/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import COLOR from "style/color";

import Header from "components/common/Header";
import Title from "components/common/Title";
import Button from "components/common/Button";
import Icon from "components/common/Icon";

import {
  ResultWrapper,
  ImageWrapper,
  StyledImage,
  GiftTitle,
} from "./ConsumerResult";

import useGetTargetInfo from "hooks/queries/useGetTargetInfo";
import useGETPickedFinal from "hooks/queries/useGETPickedFinal";

import { pickRandomId } from "utils/randomUtils";

function RandomSelect() {
  const { targetId } = useParams() as { targetId: string };
  const { state } = useLocation();
  const [pickedFinalId, setPickedFinalId] = useState<number>(0);
  const [isPickedAndSend, setIsPickedAndSend] = useState<boolean>(false);

  const { data: randomItem, refetch: getRandomItem } = useGetTargetInfo(
    Number(targetId),
  );

  const { refetch, isLoading: isPickedLoading } = useGETPickedFinal({
    targetId: parseInt(targetId, 10),
    giftId: pickedFinalId,
    isPickedAndSend,
  });

  const handleRetry = () => {
    setIsPickedAndSend(true);
    const randomId = pickRandomId(state);
    setPickedFinalId(randomId);
    setIsPickedAndSend(false);
  };

  useEffect(() => {
    if (!isPickedAndSend && pickedFinalId) {
      refetch();
    }
    getRandomItem();
  }, [isPickedAndSend, pickedFinalId]);

  return (
    <ResultWrapper>
      <Header />
      <Title level={1} align="left">
        랜덤으로 선물을 골랐어요!
      </Title>
      <ImageWrapper>
        <StyledImage
          src={randomItem?.finalGift.giftImageUrl}
          alt="선택한 선물"
        />
      </ImageWrapper>
      <GiftTitle>
        <p>{randomItem?.finalGift.giftTitle}</p>
        <Icon name="link-icon" width={23} height={23} />
      </GiftTitle>
      <ButtonWrapper>
        <Button
          text="다시 한 번 골라주세요!"
          color={COLOR.PINK}
          width="full"
          onClick={handleRetry}
        />
        <Button
          text="마음에 들어요!"
          color={COLOR.PURPLE}
          width="full"
          onClick={handleRetry}
        />
      </ButtonWrapper>
    </ResultWrapper>
  );
}

export default RandomSelect;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
