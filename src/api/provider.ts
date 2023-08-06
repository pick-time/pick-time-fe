import axios from "axios";

// 선물 조회
export const getGiftList = async (targetId: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
  );
  return response.data.giftList;
};

// 선물 추가
export const postGiftItem = async (giftUrl: string, targetId: number) => {
  await axios.post(`${process.env.REACT_APP_BASE_URL}/gift/${targetId}`, {
    giftUrl,
  });
};

// 선물 삭제
export const deleteGiftItem = async (giftId: number) => {
  await axios.delete(`${process.env.REACT_APP_BASE_URL}/gift/${giftId}`);
};

// 선물 수정
export const putGiftItem = async (formData: FormData) => {
  const giftId = formData.get("giftId");
  await axios.put(
    `${process.env.REACT_APP_BASE_URL}/gift/${giftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
