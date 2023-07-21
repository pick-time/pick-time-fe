import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";
import OpenModalButton from "components/provider/coupon/OpenModalButton";
import usePostGift from "hooks/queries/usePostGift";
import styled from "styled-components";

export default function Gift() {
  const { addGift, giftList } = usePostGift();
  return (
    <>
      <Header />
      <BodyWrapper>
        <ProviderCard />
        <ProviderGiftForm addGift={addGift} />
        <OpenModalButton />
        <ProviderGiftList giftList={giftList} />
      </BodyWrapper>
    </>
  );
}

const BodyWrapper = styled.div`
  height: 100%;
`;
