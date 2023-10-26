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
}: PostTargetRequest) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/target`,
    {
      consumerName,
      providerName,
    },
  );
  return response.data;
};

// 타겟 업데이트 = 카드, <선물, 쿠폰> 목록 확정
interface UpdateTargetRequest {
  targetId: number;
  cardMessage: string; // 카드 텍스트
  file: File | null; // 카드 이미지 파일
  giftList?: number[];
  couponList?: number[];
}

export const updateTarget = async (query: UpdateTargetRequest) => {
  const { targetId, giftList, couponList, file } = query;
  const formData = new FormData();
  if (file) formData.append("file", file);

  const giftListQuery = giftList?.reduce((str, giftId, idx) => {
    if (idx === 0) return `giftList=${giftId}`;
    return `${str}&giftList=${giftId}`;
  }, "");

  const couponListQuery = couponList?.reduce((str, couponId, idx) => {
    if (idx === 0) return `couponList=${couponId}`;
    return `${str}&couponList=${couponId}`;
  }, "");

  // eslint-disable-next-line no-nested-ternary
  const combineQuery = couponListQuery
    ? giftListQuery
      ? `${giftListQuery}&${couponListQuery}`
      : `${couponListQuery}`
    : `${giftListQuery}`;

  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}?${combineQuery}`,
    formData,
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

interface PostCouponRequest {
  couponForm: FormData;
  targetId: number;
}

export const postCouponItem = async ({
  couponForm,
  targetId,
}: PostCouponRequest): Promise<Result> => {
  const response = await axios.post<Result>(
    `${process.env.REACT_APP_BASE_URL}/coupon?targetId=${targetId}`,
    couponForm,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
