import axios from "axios";
import { useQuery } from "react-query";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";
import type { Todos } from "types/todo.type";

export default async function fetchTodos(): Promise<Todos[]> {
  const response = await axios.get<Todos[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
}

export async function postScrapeMetaData(url: string) {
  const res = await axios({
    url: "http://localhost:5000/scrape",
    method: "post",
    data: {
      url,
    },
  });
  if (res.statusText === "OK") {
    return res.data;
  }
  throw new Error(res.statusText);
}

async function getGiftList({
  targetId,
}: GETGiftListRequest): Promise<GETGiftListResponse> {
  return axios
    .get<GETGiftListResponse>(`/gift/${targetId}`, {
      params: targetId,
    })
    .then(response => response.data);
}
/**
 *
 *
 * @param targetId
 * @returns GETGiftListResponse
 */
export function useGETGiftList({ targetId }: { targetId: number }) {
  return useQuery<GETGiftListResponse>({
    queryKey: ["result", targetId],
    queryFn: () => getGiftList({ targetId }),
    refetchOnWindowFocus: false,
    retry: 0,
  });
}

interface GETGiftListRequest {
  targetId: number;
}

export interface GETGiftListResponse {
  giftTotal: number;
  providerName: string;
  consumerName: string;
  giftList: GiftList[];
  couponList: CouponList[];
}
