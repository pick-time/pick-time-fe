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
export const useGETGiftList = ({ id }: { id: number }) => {
  return useQuery<GETGiftListResponse>({
    queryKey: ["result", id],
    queryFn: () => getGiftList({ targetId: id }),
    enabled: !!id,
  });
};
async function getGiftList({
  targetId,
}: GETGiftListRequest): Promise<GETGiftListResponse> {
  return axios
    .get<GETGiftListResponse>(
      `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    )
    .then(response => response.data);
}

interface GETGiftListRequest {
  targetId: number;
}

export interface GETGiftListResponse {
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
export function usePOSTPickedGift() {
  return useMutation(({ targetId, giftId }: POSTPickedGiftRequest) =>
    postPickedGift({ targetId, giftId }),
  );
}

export async function postPickedGift(
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

export const useGETPickedGift = ({
  targetId,
  giftId,
  isPickedAndSend,
}: GETPickedGiftQueryRequest) => {
  return useQuery<GETPickedGiftResponse>({
    queryKey: ["consumer_result", targetId],
    queryFn: () => getPickedGift({ targetId, giftId }),
    enabled: isPickedAndSend,
  });
};

async function getPickedGift({
  targetId,
  giftId,
}: GETPickedGiftRequest): Promise<GETPickedGiftResponse> {
  const params = { giftId };
  return axios
    .get<GETPickedGiftResponse>(
      `${process.env.REACT_APP_BASE_URL}/target/${targetId}/pick`,
      { params },
    )
    .then(response => response.data);
}

interface GETPickedGiftQueryRequest extends GETPickedGiftRequest {
  isPickedAndSend: boolean;
}

interface GETPickedGiftRequest {
  targetId: number;
  giftId: number;
}
interface GETPickedGiftResponse {
  targetId: number;
}
