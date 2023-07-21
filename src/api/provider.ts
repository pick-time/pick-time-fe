import axios from "axios";

export const API_URL = "https://api.picktime.store";

// 선물, 쿠폰 조회
export const getGiftCoupon = async (targetId: number) => {
  const response = await axios.get(`/api/gift/${targetId}`);
  console.log(response.data);
  return response.data;
};

// 선물 추가
export const postGift = async (giftUrl: string, targetId: number) => {
  const response = await axios.post(`/api/gift/${targetId}`, {
    giftUrl,
  });
  // console.log(response.data.giftList);
  return response.data.giftList;
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
