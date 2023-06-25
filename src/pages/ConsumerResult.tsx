import Button from "components/common/Button";
import Header from "components/common/Header";
import Title from "components/common/Title";
import CopyLink from "components/provider/CopyLink";
import { useEffect, useState } from "react";
import COLOR from "style/color";
import styled, { keyframes } from "styled-components";

const mockData = {
  finalGift: {
    title: "CK 캘빈클라인 비 EDT 100ml",
    image:
      "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
  },
};

function ConsumerResult() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <ResultWrapper show={showContent}>
        <Title level={1} align="center">
          고르신 선물은 <br />
          마음에 드시나요?
        </Title>
        <ImageWrapper>
          <StyledImage src={mockData.finalGift.image} alt="선택한 선물" />
        </ImageWrapper>
        <CopyLink>
          <Button text="이걸로 정했어요!" color={COLOR.PINK} width="full" />
        </CopyLink>
      </ResultWrapper>
    </>
  );
}

export default ConsumerResult;

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
  width: 100%;
  animation: ${fadeIn} 1.5s ease-in-out;
  opacity: 0;
  ${({ show }: { show: boolean }) => show && "opacity: 1;"}
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 4.4rem 0 4.8rem 0;
`;

const StyledImage = styled.img`
  width: 21.2rem;
  height: 21.2rem;
  border-radius: 1rem;
`;
