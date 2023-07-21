import { useQuery } from "react-query";
import { getGiftCoupon } from "api/provider";

const useGetGiftCoupon = (targetId: number) => {
  return useQuery([targetId, "gift"], () => getGiftCoupon(targetId));
};

export default useGetGiftCoupon;
