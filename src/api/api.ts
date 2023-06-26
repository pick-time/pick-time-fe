import axios from "axios";
import { useMutation, useQuery } from "react-query";
// import { useMutation, useQuery } from "react-query";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";
import type { Todos } from "types/todo.type";

axios.defaults.withCredentials = true;

export default async function fetchTodos(): Promise<Todos[]> {
  const response = await axios.get<Todos[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
}

export async function postScrapeMetaData(url: string) {
  console.log(url);
  const res = await axios({
    // url: "http://localhost:5151/scrape",
    // url: "https://political-olive-radio.glitch.me/scrape",
    url: "/scrape", // 이거다!
    method: "post",
    data: {
      url,
    },
  });

  console.log(res);
  if (res.status === 200) {
    console.log("test");
    return res.data;
  }
  throw new Error(res.statusText);
}

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
  });
};
export async function getGiftList({
  targetId,
}: GETGiftListRequest): Promise<GETGiftListResponse> {
  return axios
    .get<GETGiftListResponse>(`/api/target/${targetId}/all`)
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
  return useMutation(postPickedGift);
}

export async function postPickedGift(
  params: POSTPickedGiftRequest,
): Promise<POSTPickedGiftResponse> {
  const { targetId, giftId } = params;
  const body = { targetId, giftId };
  return axios
    .post<POSTPickedGiftResponse>(`/target/${targetId}`, { body })
    .then(response => response.data);
}

interface POSTPickedGiftRequest {
  targetId: number;
  giftId: number;
}

export interface POSTPickedGiftResponse {
  targetId: number;
}
