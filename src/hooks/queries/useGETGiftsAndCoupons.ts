import { useQuery } from "react-query";
import { GETGiftsAndCouponsResponse, getGiftsAndCoupons } from "api/consumer";

const useGETGiftsAndCoupons = ({ id }: { id: number }) => {
  return useQuery<GETGiftsAndCouponsResponse>({
    queryKey: ["result", id],
    queryFn: () => getGiftsAndCoupons({ targetId: id }),
    enabled: !!id,
  });
};

export default useGETGiftsAndCoupons;
