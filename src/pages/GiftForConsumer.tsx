/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GETGiftListResponse,
  useGETGiftList,
  usePOSTPickedGift,
} from "api/api";
import Button from "components/common/Button";
import Header from "components/common/Header";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import ConsumerGiftList from "components/consumer/ConsumerGiftList";
import mockCouponList from "data/couponData";
import giftList from "data/giftData";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";
import { GiftList } from "types/giftList.type";
import mockConsumerResult from "data/consumerResultData";

const IS_MOCK = false;

type User = Pick<GETGiftListResponse, "providerName" | "consumerName">;

function GiftForConsumer() {
  const { mutate } = usePOSTPickedGift();

  const { targetId } = useParams();
  const navigate = useNavigate();

  const [fetchedList, setFetchedList] = useState<GiftList[]>([]);
  const [userInfo, setUserInfo] = useState<User>();
  const [pickedGiftId, setPickedGiftId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => setIsLoading(false), 500);

  const onClickRandomButton = () => {
    alert("준비 중인 기능입니다.");
    // navigate(`/target/${targetId}/gift/random`);
  };

  const onClickPickButton = () => {
    mutate({ targetId: parseInt(targetId || "", 10), giftId: pickedGiftId });
    navigate(`/target/${targetId}/gift/final`);
  };

  const onClickLikeButton = (giftId: number) => {
    setPickedGiftId(giftId);
  };

  const fetchMockData = () => {
    setUserInfo({
      providerName: mockConsumerResult.providerName,
      consumerName: mockConsumerResult.consumerName,
    });
    setFetchedList(mockConsumerResult.giftList);
  };

  const {
    data,
    isLoading: dataIsLoading,
    isError: dataIsError,
  } = useGETGiftList({
    id: parseInt(targetId || "", 10),
  });

  useEffect(() => {
    if (IS_MOCK || dataIsError) {
      fetchMockData();
    }
  }, [IS_MOCK]);

  return (
    <PageWrapper>
      {isLoading && <Loading />}
      {dataIsLoading && <Loading />}
      <Header />
      {!isLoading && (
        <>
          <TitleWrapper>
            <Title level={1} align="left">
              {IS_MOCK
                ? userInfo?.providerName
                : data
                ? data.providerName
                : "주는 사람"}
              님이
              <br />
              <TitleSpan>
                {IS_MOCK
                  ? userInfo?.consumerName
                  : data
                  ? data.consumerName
                  : "받는 사람"}
                님
              </TitleSpan>
              을 위해
              <br />
              생각한 선물들이에요!
            </Title>
          </TitleWrapper>
          <ConsumerGiftList
            couponList={IS_MOCK ? mockCouponList : data?.couponList}
            giftList={IS_MOCK ? giftList : data?.giftList}
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
