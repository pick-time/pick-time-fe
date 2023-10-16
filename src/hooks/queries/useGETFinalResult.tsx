import { getFinalResult } from "api/consumer";
import { useQuery } from "react-query";

export const useGETFinalResult = (targetId: number) => {
  return useQuery(
    ["getFinalResult", targetId],
    () => getFinalResult(targetId),
    {
      enabled: !!targetId,
    },
  );
};

export default useGETFinalResult;
