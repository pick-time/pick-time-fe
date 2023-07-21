import { getTargetInfo } from "api/consumer";
import { useQuery } from "react-query";

export const useGetTargetInfo = (targetId: number) => {
  return useQuery(["getTargetInfo", targetId], () => getTargetInfo(targetId), {
    enabled: !!targetId,
  });
};

export default useGetTargetInfo;
