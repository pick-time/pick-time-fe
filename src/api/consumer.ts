import axios from "axios";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

export interface GetCardInfoResponse {
  providerName: string;
  cardImageUrl: string;
  cardMessage: string;
}

// 카드 불러오기
export const getCardInfo = async (
  targetId: number,
): Promise<GetCardInfoResponse> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}`,
  );
  return response.data;
};

interface GetResultRequest {
  targetId: number;
}

export interface GetResultResponse {
  giftTotal: number;
  providerName: string;
  consumerName: string;
  giftList: GiftList[];
  couponList?: CouponList[];
}

// 쿠폰, 선물 목록 불러오기
export async function getResult({
  targetId,
}: GetResultRequest): Promise<GetResultResponse> {
  return axios
    .get<GetResultResponse>(
      `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    )
    .then(response => response.data);
}

export interface PostPickFinalRequest {
  targetId: number;
  giftId: number;
}
export interface PostPickFinalResponse {
  targetId: number;
}

// 최종 하나의 쿠폰 또는 선물 선택
export async function postPickFinal({
  targetId,
  giftId,
}: PostPickFinalRequest): Promise<PostPickFinalResponse> {
  const params = { giftId };
  return axios
    .get<PostPickFinalResponse>(
      `${process.env.REACT_APP_BASE_URL}/target/${targetId}/pick`,
      { params },
    )
    .then(response => response.data);
}

export interface GetFinalResultResponse {
  consumerName: string;
  finalGift: {
    giftTitle: string;
    giftImageUrl: string;
    giftUrl?: string;
  };
}

// 타겟 최종 결정된 쿠폰 또는 선물 조회
export const getFinalResult = async (
  targetId: number,
): Promise<GetFinalResultResponse> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}/final`,
  );
  return response.data;
};
