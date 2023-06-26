/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GETGiftListResponse,
  useGETGiftList,
  usePOSTPickedGift,
} from "api/api";
import Button from "components/common/Button";
import Header from "components/common/Header";
import List from "components/common/List";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";
import { GiftList } from "types/giftList.type";

const IS_MOCK = false;

type User = Pick<GETGiftListResponse, "providerName" | "consumerName">;

function GiftForConsumer() {
  const { mutate } = usePOSTPickedGift();

  const { targetId } = useParams();
  const navigate = useNavigate();

  const [fetchedList, setFetchedList] = useState<GiftList[]>([]);
  const [userInfo, setUserInfo] = useState<User>();
  const [pickedGiftId, setPickedGiftId] = useState<number>(0);

  const mockData = {
    providerName: "닝겐미키",
    consumerName: "문을 왜 그렇게 황현희니니니니니이름",
    giftList: [
      {
        giftId: 123,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
      {
        giftId: 1234,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
      {
        giftId: 12345,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
      {
        giftId: 12345778,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
      {
        giftId: 123456,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
      {
        giftId: 123457,
        giftTitle: "CK 캘빈클라인 비 EDT 100ml",
        giftUrl:
          "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148683&chlNo=1&chlDtlNo=61&utm_source=naver&utm_medium=shopping_ep&utm_campaign=onpro_ep_product_0101_1231&utm_content=pc_price&nv_ad=pla&n_media=11068&n_query=%ED%96%A5%EC%88%98&n_rank=1&n_ad_group=grp-a001-02-000000013179677&n_ad=nad-a001-02-000000226442586&n_campaign_type=2&n_mall_id=oliveyoungshop&n_mall_pid=A000000148683&n_ad_group_type=2&NaPm=ct%3Dljbghxoo%7Cci%3D0zi0003bdDvyINl17f0o%7Ctr%3Dpla%7Chk%3Dacc0c9fff7e60837c1bbd4703c5516d5e19bb931",
        giftImage:
          "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0014/A00000014868303ko.jpg?l=ko",
        giftDescription:
          "본 상품 정보(상품 상세, 상품 설명 등)의 내용은 협력사가 직접 등록한 것 입니다.",
      },
    ],
  };

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
      providerName: mockData.providerName,
      consumerName: mockData.consumerName,
    });
    setFetchedList(mockData.giftList);
  };

  const {
    data,
    isLoading: dataIsLoading,
    isError: dataIsError,
  } = useGETGiftList({
    id: parseInt(targetId || "", 10),
  });

  return (
    <PageWrapper>
      {dataIsLoading && data && <Loading />}
      <Header />
      {!dataIsLoading && data && (
        <>
          <TitleWrapper>
            <Title level={1} align="left">
              {data.providerName}님이
              <br />
              <TitleSpan>{data.consumerName}님</TitleSpan>을 위해
              <br />
              생각한 선물들이에요!
            </Title>
          </TitleWrapper>
          <List
            listData={data.giftList}
            type="likable"
            selectedGiftId={pickedGiftId}
            onClickLike={onClickLikeButton}
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
