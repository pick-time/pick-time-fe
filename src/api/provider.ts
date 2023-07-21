import axios from "axios";

export const API_URL = "https://api.picktime.store";

// 선물 조회
export const getGiftList = async (targetId: number) => {
  const response = await axios.get(`/api/gift/${targetId}`);
  return response.data.giftList;
};

// 선물 추가
export const postGiftItem = async (giftUrl: string, targetId: number) => {
  const response = await axios.post(`/api/gift/${targetId}`, {
    giftUrl,
  });
  // console.log(response.data.giftList);
  return response.data.giftList;
};

// 선물 삭제
export const deleteGiftItem = async (giftId: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const response = await axios.delete(`/api/gift/${giftId}`);
  return response;
};

interface PutGiftRequest {
  giftId: number;
  description: string;
}

// 선물 수정
export const putGift = async ({ giftId, description }: PutGiftRequest) => {
  const response = await axios.put(`/gift/${giftId}`, description, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
};
