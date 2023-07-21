import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";
import OpenModalButton from "components/provider/coupon/OpenModalButton";
import usePostGift from "hooks/queries/usePostGift";
import useGetGiftCoupon from "hooks/queries/useGetCouponGift";

export default function Gift() {
  const { addGift } = usePostGift();
  const { isLoading, data, refetch } = useGetGiftCoupon(32);
  if (isLoading) return <div>로딩 중</div>;
  const { giftList, couponList } = data;
  console.log(couponList);
  return (
    <>
      <Header />
      <ProviderCard />
      <ProviderGiftForm addGift={addGift} refetch={refetch} />
      <OpenModalButton />
      <ProviderGiftList giftList={giftList} />
    </>
  );
}
