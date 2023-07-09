import Button from "components/common/Button";
import Icon from "components/common/Icon";
import Input from "components/common/Input";
import Text from "components/common/Text";
import { usePostTarget } from "hooks/queries/usePostTarget";
import useInputFormValidation from "hooks/useInputValidation";
import { useEffect, useState } from "react";
import COLOR from "style/color";
import styled, { keyframes } from "styled-components";

function ProviderIntro() {
  const [form, errors, handleFormChange] = useInputFormValidation();
  const [showContent, setShowContent] = useState(false);
  const postTargetMutation = usePostTarget();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!form.providerName || !form.consumerName) {
      handleFormChange({
        ...form,
        type: "all",
      });
      return;
    }
    const { providerName, consumerName } = form;
    postTargetMutation.mutate({ providerName, consumerName });
  };

  return (
    <IntroWrapper show={showContent}>
      <HeaderLogo>
        <Icon name="logo-large" width={218} height={50} />
      </HeaderLogo>
      <ImageWrapper>
        <Icon name="logo-main" width={242} height={201} />
      </ImageWrapper>
      <TextWrapper>
        <Text
          fontSize="1.8rem"
          fontWeight={700}
          contents={
            "무엇이든 담아서 \n 당신의 소중한 사람에게 마음을 전하세요!"
          }
        />
      </TextWrapper>
      <InputWrapper>
        <Input
          placeholder="주는 사람"
          align="center"
          value={form.providerName}
          maxLength={10}
          onChange={e => {
            handleFormChange({
              ...form,
              type: "provider",
              providerName: e.target.value,
            });
          }}
        />
        {errors.providerNameError && (
          <InputErrorText>{errors.providerNameError}</InputErrorText>
        )}
        <Spacing />
        <Input
          placeholder="누구에게 주는 선물인가요?"
          value={form.consumerName}
          align="center"
          maxLength={10}
          onChange={e => {
            handleFormChange({
              ...form,
              type: "consumer",
              consumerName: e.target.value,
            });
          }}
        />
        {errors.consumerNameError && (
          <InputErrorText>{errors.consumerNameError}</InputErrorText>
        )}
      </InputWrapper>
      <Spacing />
      <Button
        type="button"
        text="선물 고르러 가기"
        color={COLOR.PINK}
        width="full"
        isDisabled={form.isDisabled}
        onClick={handleClick}
      />
    </IntroWrapper>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroWrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  opacity: 0;
  ${({ show }: { show: boolean }) => show && "opacity: 1;"}
`;

const HeaderLogo = styled.header`
  text-align: center;
  padding: 0.5rem;
`;

const ImageWrapper = styled.div`
  margin-top: 3.9rem;
  padding: 1rem;
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-top: 3.9rem;
`;

const InputWrapper = styled.div`
  margin-top: 4rem;
`;

const Spacing = styled.div`
  margin-top: 1rem;
`;

const InputErrorText = styled.p`
  margin-top: 0.5rem;
  color: ${COLOR.PINK};
  text-align: center;
`;

export default ProviderIntro;
