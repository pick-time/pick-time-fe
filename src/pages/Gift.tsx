import styled from "styled-components";
import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";
import OpenModalButton from "components/provider/coupon/OpenModalButton";

export default function Gift() {
  return (
    <>
      <Header />
      <BodyWrapper>
        <ProviderCard />
        <ProviderGiftForm />
        <OpenModalButton />
        <ProviderGiftList />
      </BodyWrapper>
    </>
  );
}

const BodyWrapper = styled.div`
  height: 100%;
`;
