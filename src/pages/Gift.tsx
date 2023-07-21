import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";
import OpenModalButton from "components/provider/coupon/OpenModalButton";
import usePostGift from "hooks/queries/usePostGift";

export default function Gift() {
  const { mutate, giftList } = usePostGift();
  return (
    <>
      <Header />
      <ProviderCard />
      <ProviderGiftForm mutate={mutate} />
      <OpenModalButton />
      <ProviderGiftList giftList={giftList} />
    </>
  );
}
