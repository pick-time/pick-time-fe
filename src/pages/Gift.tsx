import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";
import OpenModalButton from "components/provider/coupon/OpenModalButton";

export default function Gift() {
  return (
    <>
      <Header />
      <ProviderCard />
      <ProviderGiftForm />
      <OpenModalButton />
      <ProviderGiftList />
    </>
  );
}
