import getTargetInfo from "api/consumerResult";
import { useQuery } from "react-query";

export const useGetTargetInfo = (targetId: number) => {
  return useQuery(["getTargetInfo"], () => getTargetInfo(targetId));
};

export default useGetTargetInfo;
