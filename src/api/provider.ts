import axios from "axios";
import { Result } from "types/result.type";

export interface PostTargetRequest {
  providerName: string;
  consumerName: string;
}

// 타겟 생성
export const postTarget = async ({
  consumerName,
  providerName,
}: PostTargetRequest): Promise<number> => {
  const response = await axios.post<number>(
    `${process.env.REACT_APP_BASE_URL}/target`,
    {
      consumerName,
      providerName,
    },
  );
  return response.data;
};

// 선물 조회
export const getGiftList = async (targetId: number): Promise<Result> => {
  const response = await axios.get<Result>(
    `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
  );
  return response.data;
};

// 선물 추가
export const postGiftItem = async (
  giftUrl: string,
  targetId: number,
): Promise<Result> => {
  const response = await axios.post<Result>(
    `${process.env.REACT_APP_BASE_URL}/gift/${targetId}`,
    {
      giftUrl,
    },
  );
  return response.data;
};

// 선물 삭제
export const deleteGiftItem = async (giftId: number) => {
  await axios.delete(`${process.env.REACT_APP_BASE_URL}/gift/${giftId}`);
};

// 선물 수정
export const putGiftItem = async (formData: FormData): Promise<Result> => {
  const giftId = formData.get("giftId");
  const response = await axios.put<Result>(
    `${process.env.REACT_APP_BASE_URL}/gift/${giftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
