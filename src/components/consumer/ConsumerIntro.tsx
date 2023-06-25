import Button from "components/common/Button";
import Icon from "components/common/Icon";
import Image from "components/common/Image";
import Text from "components/common/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled, { keyframes } from "styled-components";

function ConsumerIntro() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/gift");
  };

  return (
    <IntroWrapper show={showContent}>
      <ImageWrapper>
        <Image
          src="/assets/images/card1.png"
          alt="나만의 카드 이미지"
          width={308}
          height={160}
        />
      </ImageWrapper>
      <HeaderLogo>
        <Icon name="logo-large" width={218} height={50} />
      </HeaderLogo>
      <TextWrapper>
        <Text
          contents={
            "닝겐 미키님의 마음이 도착했어요! \n 정성스럽게 모은 선물 목록에서 \n 원하는 것을 골라주세요!"
          }
        />
      </TextWrapper>
      <Spacing />
      <ButtonWrapper>
        <Button
          type="button"
          text="선물 목록 보러가기"
          color={COLOR.PURPLE}
          width="full"
          onClick={handleClick}
        />
      </ButtonWrapper>
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
  margin-top: 8rem;
  text-align: center;
  padding: 0.5rem;
`;

const ImageWrapper = styled.div`
  margin-top: 3.9rem;
  padding: 1rem;
`;

const TextWrapper = styled.div`
  margin-top: 1.9rem;
`;

const Spacing = styled.div`
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 8rem;
`;

export default ConsumerIntro;
