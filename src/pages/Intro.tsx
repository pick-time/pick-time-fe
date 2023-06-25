import Button from "components/common/Button";
import Icon from "components/common/Icon";
import Input from "components/common/Input";
import Text from "components/common/Text";
import React, { useEffect, useState } from "react";
import COLOR from "style/color";
import styled, { keyframes } from "styled-components";

function Intro() {
  const [text, setText] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleClick = () => {
    console.log("click");
  };
  return (
    <IntroWrapper show={showContent}>
      <HeaderLogo>
        <Icon name="logo-large" width={218} height={50} />
      </HeaderLogo>
      <ImageWrapper>
        <Icon name="logo-intro-provider" width={282} height={200} />
      </ImageWrapper>
      <TextWrapper>
        <Text
          contents={
            "무엇이든 담아서 \n 당신의 소중한 사람에게 마음을 전하세요!"
          }
        />
      </TextWrapper>
      <InputWrapper>
        <Input
          placeholder="주는 사람"
          align="center"
          value={text}
          onChange={handleChange}
        />
        <Spacing />
        <Input
          placeholder="누구에게 주는 선물인가요?"
          align="center"
          value={text}
          onChange={handleChange}
        />
      </InputWrapper>
      <Spacing />
      <Button
        type="button"
        text="선물 고르러 가기"
        color={COLOR.PINK}
        width="full"
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
  margin-top: 39px;
  padding: 1rem;
`;

const TextWrapper = styled.div`
  margin-top: 39px;
`;

const InputWrapper = styled.div`
  margin-top: 40px;
`;

const Spacing = styled.div`
  margin-top: 1rem;
`;

export default Intro;
