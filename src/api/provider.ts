import axios from "axios";

// 선물 추가
export const postGift = async (giftUrl: string, targetId: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    {
      giftUrl,
    },
  );
  // console.log(response.data.giftList);
  return response.data.giftList;
};

interface PutGiftRequest {
  giftId: number;
  description: string;
}

// 선물 수정
export const putGift = async ({ giftId, description }: PutGiftRequest) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}/gift/${giftId}`,
    description,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  console.log(response);
};
