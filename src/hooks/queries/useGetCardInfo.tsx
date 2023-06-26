import { getCardInfo } from "api/consumer";
import { useQuery } from "react-query";

export const useGetCardInfo = (targetId: number) => {
  return useQuery(["getCardInfo", targetId], () => getCardInfo(targetId));
};

export default useGetCardInfo;
