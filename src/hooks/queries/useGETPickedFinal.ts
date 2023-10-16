import { useQuery } from "react-query";
import {
  getPickedFinal,
  GETPickedGiftQueryRequest,
  GETPickedFinalResponse,
} from "api/api";

export const useGETPickedFinal = ({
  targetId,
  giftId,
  isPickedAndSend,
}: GETPickedGiftQueryRequest) => {
  return useQuery<GETPickedFinalResponse>({
    queryKey: ["consumer_result", targetId],
    queryFn: () => getPickedFinal({ targetId, giftId }),
    enabled: isPickedAndSend,
  });
};

export default useGETPickedFinal;
