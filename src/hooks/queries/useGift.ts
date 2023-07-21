import { useMutation, useQuery, useQueryClient } from "react-query";
import { getGiftList, postGiftItem, deleteGiftItem } from "api/provider";

type PostGiftRequest = {
  giftUrl: string;
};

const useGift = (targetId: number) => {
  const queryClient = useQueryClient();

  // 선물 목록 조회
  const getGift = useQuery(["gift", targetId], () => getGiftList(targetId));

  // 선물 목록 추가
  const addGift = useMutation(
    ({ giftUrl }: PostGiftRequest) => postGiftItem(giftUrl, targetId),
    {
      onSuccess: () => queryClient.invalidateQueries(["gift", targetId]),
    },
  );

  const deleteGift = useMutation((giftId: number) => deleteGiftItem(giftId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["gift", targetId]);
    },
  });
  return { getGift, addGift, deleteGift };
};

export default useGift;
