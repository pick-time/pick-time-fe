import axios from "axios";
import { GetCardInfo, GetFinalResult } from "types/remote";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

// 카드 불러오기
export const getCardInfo = async (targetId: number): Promise<GetCardInfo> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}`,
  );
  return response.data;
};

interface GETGiftListRequest {
  targetId: number;
}

export interface GETGiftsAndCouponsResponse {
  giftTotal: number;
  providerName: string;
  consumerName: string;
  giftList: GiftList[];
  couponList?: CouponList[];
}

// 쿠폰, 선물 목록 불러오기
export async function getGiftsAndCoupons({
  targetId,
}: GETGiftListRequest): Promise<GETGiftsAndCouponsResponse> {
  return axios
    .get<GETGiftsAndCouponsResponse>(
      `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    )
    .then(response => response.data);
}

export interface POSTPickFinalRequest {
  targetId: number;
  giftId: number;
}
export interface POSTPickFinalResponse {
  targetId: number;
}

// 최종 하나의 쿠폰 또는 선물 선택
export async function postPickFinal({
  targetId,
  giftId,
}: POSTPickFinalRequest): Promise<POSTPickFinalResponse> {
  const params = { giftId };
  return axios
    .get<POSTPickFinalResponse>(
      `${process.env.REACT_APP_BASE_URL}/target/${targetId}/pick`,
      { params },
    )
    .then(response => response.data);
}

// 타겟 최종 결정된 쿠폰 또는 선물 조회
export const getFinalResult = async (
  targetId: number,
): Promise<GetFinalResult> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}/final`,
  );
  return response.data;
};
