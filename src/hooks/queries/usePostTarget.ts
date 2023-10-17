import { postTarget } from "api/provider";
import { useMutation } from "react-query";

export const usePostTarget = () => {
  return useMutation(postTarget);
};

export default usePostTarget;
