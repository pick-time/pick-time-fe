import { useQuery } from "react-query";
import {
  postPickFinal,
  POSTPickFinalRequest,
  POSTPickFinalResponse,
} from "api/consumer";

export interface GETPickedGiftQueryRequest extends POSTPickFinalRequest {
  isPickedAndSend: boolean;
}

export const usePOSTPickFinal = ({
  targetId,
  giftId,
  isPickedAndSend,
}: GETPickedGiftQueryRequest) => {
  return useQuery<POSTPickFinalResponse>({
    queryKey: ["consumer_result", giftId],
    queryFn: () => postPickFinal({ targetId, giftId }),
    enabled: isPickedAndSend,
  });
};

export default usePOSTPickFinal;
