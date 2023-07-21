import axios from "axios";

export const API_URL = "https://api.picktime.store";

export interface PostGiftRequest {
  giftUrl: string;
  targetId: number;
}

// 타겟 추가
interface PostTargetData {
  providerName: string;
  consumerName: string;
}

// export const getTarget = async (targetId: number) => {
//   // console.log("postTarget", data);
//   const response = await axios.get(`${API_URL}/target/${targetId}`);
//   console.log(response.data);
//   return response.data;
// };

export const getTarget = async () => {
  const response = await axios.get("https://api.picktime.store/target/34");
  console.log(response);
};

export const postTarget = async (data: PostTargetData) => {
  console.log("postTarget", data);
  const response = await axios.post(`${API_URL}/target`, data);
  return response.data;
};

// 선물 추가
export const postGift = async ({ giftUrl, targetId }: PostGiftRequest) => {
  const response = await axios.post(`/api/gift/${targetId}`, {
    giftUrl,
  });
  console.log(response.data.giftList);
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
