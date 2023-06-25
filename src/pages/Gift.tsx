import React from "react";
import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import Header from "components/common/Header";

export default function Gift() {
  return (
    <>
      <Header />
      <ProviderCard />
      <ProviderGiftForm />
      <ProviderGiftList />
    </>
  );
}
