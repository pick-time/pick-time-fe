import { useMutation, useQuery, useQueryClient } from "react-query";
import { getGiftList, postGift } from "api/provider";

type PostGiftRequest = {
  giftUrl: string;
};

const useGift = (targetId: number) => {
  const queryClient = useQueryClient();

  // 선물 목록 조회
  const getGift = useQuery(["gift", targetId], () => getGiftList(targetId));

  // 선물 목록 추가
  const addGift = useMutation(
    ({ giftUrl }: PostGiftRequest) => postGift(giftUrl, targetId),
    {
      onSuccess: () => queryClient.invalidateQueries(["gift", targetId]),
    },
  );
  return { getGift, addGift };
};

export default useGift;
