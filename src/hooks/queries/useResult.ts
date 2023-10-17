import { useQuery } from "react-query";
import {
  getResult,
  postPickFinal,
  getFinalResult,
  GetResultResponse,
  PostPickFinalRequest,
  PostPickFinalResponse,
} from "api/consumer";

export interface GetPickGiftQueryRequest extends PostPickFinalRequest {
  isPickedAndSend: boolean;
}

export const useGetResult = ({ id }: { id: number }) => {
  return useQuery<GetResultResponse>({
    queryKey: ["result", id],
    queryFn: () => getResult({ targetId: id }),
    enabled: !!id,
  });
};

export const usePostPickFinal = ({
  targetId,
  giftId,
  isPickedAndSend,
}: GetPickGiftQueryRequest) => {
  return useQuery<PostPickFinalResponse>({
    queryKey: ["consumer_result", giftId],
    queryFn: () => postPickFinal({ targetId, giftId }),
    enabled: isPickedAndSend,
  });
};

export const useGetFinalResult = (targetId: number) => {
  return useQuery(
    ["getFinalResult", targetId],
    () => getFinalResult(targetId),
    {
      enabled: !!targetId,
    },
  );
};
