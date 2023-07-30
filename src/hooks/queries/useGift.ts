import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getGiftList,
  postGiftItem,
  deleteGiftItem,
  putGiftItem,
} from "api/provider";

type PostGiftRequest = {
  giftUrl: string;
};

const useGift = (targetId: number) => {
  const queryClient = useQueryClient();

  // 전체 선물 조회
  const getGift = useQuery(["gift", targetId], () => getGiftList(targetId));

  // 개별 선물 추가
  const addGift = useMutation(
    ({ giftUrl }: PostGiftRequest) => postGiftItem(giftUrl, targetId),
    {
      onSuccess: () => queryClient.invalidateQueries(["gift", targetId]),
    },
  );

  // 개별 선물 삭제
  const deleteGift = useMutation((giftId: number) => deleteGiftItem(giftId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["gift", targetId]);
    },
  });

  // 개별 선물 수정
  const modifyGift = useMutation(putGiftItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["gift", targetId]);
    },
  });

  return { getGift, addGift, deleteGift, modifyGift };
};

export default useGift;
