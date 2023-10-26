import { postTarget, updateTarget } from "api/provider";
import { useMutation } from "react-query";

export const usePostTarget = () => {
  return useMutation(postTarget);
};

export const useUpdateTarget = () => {
  return useMutation(updateTarget);
};

export default usePostTarget;
