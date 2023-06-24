import React from "react";
import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";

export default function Gift() {
  return (
    <>
      <h1>Gift Page</h1>
      <ProviderGiftForm />
      <ProviderGiftList />
    </>
  );
}
