import Text from "components/common/Text";
import Icon from "components/common/Icon";
import styled, { keyframes } from "styled-components";
import Button from "components/common/Button";
import COLOR from "style/color";
import KakaoShare from "components/provider/KakaoShare";
import CopyLink from "components/provider/CopyLink";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProviderResult() {
  const { targetId } = useParams();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate(`/confirm/${targetId}`);
  };

  return (
    <ResultWrapper show={showContent}>
      <ImageWrapper>
        <Icon name="logo-provider-result" width={264} height={231} />
      </ImageWrapper>
      <LogoWrapper>
        <Icon name="logo-large" width={218} height={50} />
      </LogoWrapper>
      <TextWrapper>
        <Text
          contents={
            "마음을 담은 선물이 완성 되었어요!\n소중한 사람에게 당신의 마음을 전달해 보세요!"
          }
        />
      </TextWrapper>
      <Button
        text="선물 목록 보러가기"
        color={COLOR.PINK}
        width="full"
        onClick={handleClick}
      />
      <LinkWrapper>
        <KakaoShare />
        <CopyLink>
          <Button text="URL" color={COLOR.NAVY} width="half" />
        </CopyLink>
      </LinkWrapper>
    </ResultWrapper>
  );
}

export default ProviderResult;

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

const ResultWrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  opacity: 0;
  ${({ show }: { show: boolean }) => show && "opacity: 1;"}
`;

const ImageWrapper = styled.header`
  text-align: center;
  padding: 0.5rem;
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin: 5rem 0 2rem 0;
`;

const TextWrapper = styled.div`
  margin: 2rem 0 4.8rem 0;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
