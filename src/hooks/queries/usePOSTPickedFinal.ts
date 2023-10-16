import { useMutation } from "react-query";
import { postPickedFinal, POSTPickedGiftRequest } from "api/api";

export function usePOSTPickedFinal() {
  return useMutation(({ targetId, giftId }: POSTPickedGiftRequest) =>
    postPickedFinal({ targetId, giftId }),
  );
}

export default usePOSTPickedFinal;
