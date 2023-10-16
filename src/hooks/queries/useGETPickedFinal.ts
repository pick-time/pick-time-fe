import { useQuery } from "react-query";
import {
  getPickedFinal,
  GETPickedFinalRequest,
  GETPickedFinalResponse,
} from "api/consumer";

export interface GETPickedGiftQueryRequest extends GETPickedFinalRequest {
  isPickedAndSend: boolean;
}

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
