import { postCouponItem } from "api/provider";
import { useMutation, useQueryClient } from "react-query";

const useCoupon = (targetId: number) => {
  const queryClient = useQueryClient();
  const addCoupon = useMutation(postCouponItem, {
    onSuccess: () => queryClient.invalidateQueries(["gift", targetId]),
  });
  return { addCoupon };
};

export default useCoupon;
