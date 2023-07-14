import axios from "axios";

export const API_URL = "https://api.picktime.store";

export interface PostGiftRequest {
  giftUrl: string;
  targetId: number;
}

export const postGift = async ({ giftUrl, targetId }: PostGiftRequest) => {
  const response = await axios.post(`/gift/${targetId}`, {
    giftUrl,
  });
  console.log(response.data.giftList);
  return response.data.giftList;
};

export const getGift = async () => {};
