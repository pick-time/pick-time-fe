/* eslint-disable @typescript-eslint/no-unused-vars */
import { GETGiftListResponse, getGiftList, useGETGiftList } from "api/api";
import Button from "components/common/Button";
import Header from "components/common/Header";
import ListComponent from "components/common/List";
import Title from "components/common/Title";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";
import { GiftList } from "types/giftList.type";
// import { CouponList } from "types/couponList.type";

const IS_MOCK = false;

// coupon 보류
// export interface GiftCouponList {
//   giftList: GiftList[];
//   couponList: CouponList[];
// }

type User = Pick<GETGiftListResponse, "providerName" | "consumerName">;

function Confirm() {
  const { targetId } = useParams();
  const navigate = useNavigate();

  const [fetchedList, setFetchedList] = useState<GiftList[]>([]);
  const [userInfo, setUserInfo] = useState<User>();
  const [isError, setIsError] = useState<boolean>(false);

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
    ],
    // couponList: [
    //   {
    //     couponImage:
    //       "https://t4.ftcdn.net/jpg/03/29/10/97/360_F_329109774_iTsyjzLU5O9cagJ9UhahhNF2ZdkW4OHc.jpg",
    //     couponTitle: "안마 쿠폰",
    //   },
    // ],
  };

  const onClickConfirmButton = () => {
    navigate(`/result/${targetId}`);
  };

  const fetchMockData = () => {
    setUserInfo({
      providerName: mockData.providerName,
      consumerName: mockData.consumerName,
    });
    setFetchedList(
      mockData.giftList,
      // couponList: mockData.couponList,
    );
  };

  // const useGETGiftList = ({ id }: { id: number }) => {
  //   return useQuery<GETGiftListResponse>({
  //     queryKey: ["result", id],
  //     queryFn: () => getGiftList({ targetId: id }),
  //     refetchOnWindowFocus: false,
  //     retry: 0,
  //   });
  // };

  const {
    data,
    isLoading: dataIsLoading,
    isError: dataIsError,
  } = useGETGiftList({
    id: parseInt(targetId || "", 10),
  });

  if (!dataIsLoading && data) {
    const { giftList, providerName, consumerName } = data;
    setUserInfo({ providerName, consumerName });
    setFetchedList(giftList);
  }

  useEffect(() => {
    if (dataIsError) {
      fetchMockData();
    }
  }, []);

  return (
    <PageWrapper>
      <Header />
      {!dataIsLoading && (
        <>
          <TitleWrapper>
            <Title level={1} align="left">
              <TitleSpan>{userInfo?.providerName}님,</TitleSpan>
              <br />
              고르신 선물 확인해 주세요!
            </Title>
          </TitleWrapper>
          <ListComponent listData={fetchedList} type="default" />
          <ButtonWrapper>
            <Button
              text="확인했어요!"
              color={COLOR.PINK}
              width="full"
              onClick={onClickConfirmButton}
            />
          </ButtonWrapper>
        </>
      )}
    </PageWrapper>
  );
}

export default Confirm;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  height: 8rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLOR.WHITE};
`;
