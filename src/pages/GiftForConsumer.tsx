import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGETGiftList, useGETPickedGift, usePOSTPickedGift } from "api/api";

import Button from "components/common/Button";
import Header from "components/common/Header";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import ConsumerGiftList from "components/consumer/ConsumerGiftList";

import COLOR from "style/color";
import styled from "styled-components";

import mockConsumerResult, { ConsumerResult } from "data/consumerResultData";

const IS_MOCK = false;

function GiftForConsumer() {
  const { targetId } = useParams() as { targetId: string };
  const navigate = useNavigate();

  // TODO: GET 인지 POST 인지 확인
  // const { mutate, isSuccess } = usePOSTPickedGift();

  // MOCK DATA 처리
  const {
    providerName: MOCK_PROVIDER,
    consumerName: MOCK_CONSUMER,
    couponList: MOCK_COUPONLIST,
    giftList: MOCK_GIFTLIST,
  }: ConsumerResult = mockConsumerResult;

  const onClickRandomButton = () => {
    alert("준비 중인 기능입니다.");
    // navigate(`/target/${targetId}/gift/random`);
  };

  const [pickedGiftId, setPickedGiftId] = useState<number>(0);
  const [isPickedAndSend, setIsPickedAndSend] = useState<boolean>(false);

  const onClickPickButton = () => {
    // mutate({
    //   targetId: parseInt(targetId || "", 10),
    //   giftId: pickedGiftId,
    // });
    setIsPickedAndSend(true);
    refetch();
    setTimeout(() => {
      navigate(`/target/${targetId}/gift/final`);
    }, 100);
  };

  const { data, isLoading: isGetGiftListLoading } = useGETGiftList({
    id: parseInt(targetId, 10),
  });
  const { refetch, isLoading: isPickedLoading } = useGETPickedGift({
    targetId: parseInt(targetId, 10),
    giftId: pickedGiftId,
    isPickedAndSend,
  });

  const loading = isGetGiftListLoading || isPickedLoading;

  return (
    <PageWrapper>
      {loading && <Loading />}
      <Header />
      {!isGetGiftListLoading && (
        <>
          <TitleWrapper>
            <Title level={1} align="left">
              {IS_MOCK ? MOCK_PROVIDER : data?.providerName}
              님이
              <br />
              <TitleSpan>
                {IS_MOCK ? MOCK_CONSUMER : data?.consumerName}
              </TitleSpan>
              님을 위해
              <br />
              생각한 선물들이에요!
            </Title>
          </TitleWrapper>
          <ConsumerGiftList
            onSelectGift={(id: number) => setPickedGiftId(id)}
            couponList={IS_MOCK ? MOCK_COUPONLIST : data?.couponList}
            giftList={IS_MOCK ? MOCK_GIFTLIST : data?.giftList}
          />
        </>
      )}
      <ButtonWrapper>
        <Button
          text="전부 마음에 드는데 어쩌죠?"
          color={COLOR.PINK}
          width="full"
          onClick={onClickRandomButton}
        />
        <Button
          isDisabled={pickedGiftId === 0}
          text="다 골랐어요!"
          color={COLOR.PURPLE}
          width="full"
          onClick={onClickPickButton}
        />
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default GiftForConsumer;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 1.1rem;
`;

const TitleSpan = styled.span`
  color: #e363a3;
  font-weight: 900;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0rem;

  width: 35.8rem;
  height: 13.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLOR.WHITE};
  gap: 1rem;
`;
