import { useMutation } from "react-query";
import { postGift } from "api/provider";

type PostGiftRequest = {
  giftUrl: string;
  targetId: string;
};

const usePostGift = () => {
  const { mutate: addGift, data: giftList } = useMutation(
    ({ giftUrl, targetId }: PostGiftRequest) => postGift(giftUrl, targetId),
  );
  return { addGift, giftList };
};

export default usePostGift;
