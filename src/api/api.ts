import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

/**
 *
 * 주는 사람이 생성한 선물 목록을 확인하는 페이지에 진입할때 요청하는 api
 * @param targetId
 * @returns GETGiftListResponse
 */
export const useGETGiftsAndCoupons = ({ id }: { id: number }) => {
  return useQuery<GETGiftsAndCouponsResponse>({
    queryKey: ["result", id],
    queryFn: () => getGiftsAndCoupons({ targetId: id }),
    enabled: !!id,
  });
};
async function getGiftsAndCoupons({
  targetId,
}: GETGiftListRequest): Promise<GETGiftsAndCouponsResponse> {
  return axios
    .get<GETGiftsAndCouponsResponse>(
      `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    )
    .then(response => response.data);
}

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

/**
 *
 * 받는 사람 최종 상품 1개 선택 후 이걸로 정했어요 버튼 클릭 시 요청되는 api
 * @param01 targetId
 * @param02 giftId
 * @returns POSTPickedGiftResponse
 */
export function usePOSTPickedFinal() {
  return useMutation(({ targetId, giftId }: POSTPickedGiftRequest) =>
    postPickedFinal({ targetId, giftId }),
  );
}

export async function postPickedFinal(
  params: POSTPickedGiftRequest,
): Promise<POSTPickedGiftResponse> {
  const { targetId, giftId } = params;
  const body = { targetId, giftId };
  return axios
    .post<POSTPickedGiftResponse>(
      `${process.env.REACT_APP_BASE_URL}/target/${targetId}/pick`,
      { body },
    )
    .then(response => response.data);
}

interface POSTPickedGiftRequest {
  targetId: number;
  giftId: number;
}

export interface POSTPickedGiftResponse {
  targetId: number;
}

/**
 *
 * 받는 사람 최종 상품 1개 선택 후 이걸로 정했어요 버튼 클릭 시 요청되는 api
 * @param01 targetId
 * @param02 giftId
 * @returns GETPickedGiftResponse
 */

export const useGETPickedFinal = ({
  targetId,
  giftId,
  isPickedAndSend,
}: GETPickedGiftQueryRequest) => {
  return useQuery<GETPickedFinalResponse>({
    queryKey: ["consumer_result", targetId],
    queryFn: () => getPickedFinal({ targetId, giftId }),
    enabled: isPickedAndSend,
  });
};

async function getPickedFinal({
  targetId,
  giftId,
}: GETPickedFinalRequest): Promise<GETPickedFinalResponse> {
  const params = { giftId };
  return axios
    .get<GETPickedFinalResponse>(
      `${process.env.REACT_APP_BASE_URL}/target/${targetId}/pick`,
      { params },
    )
    .then(response => response.data);
}

interface GETPickedGiftQueryRequest extends GETPickedFinalRequest {
  isPickedAndSend: boolean;
}

interface GETPickedFinalRequest {
  targetId: number;
  giftId: number;
}
interface GETPickedFinalResponse {
  targetId: number;
}
