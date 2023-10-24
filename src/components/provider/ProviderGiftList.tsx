/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";
// import giftList from "data/giftData";
import { useParams } from "react-router-dom";
import useGift from "hooks/queries/useGift";

export default function ProviderGiftList() {
  const { targetId } = useParams();
  const {
    deleteGift,
    getGift: { isLoading, data },
  } = useGift(Number(targetId));

  const [editedGiftId, setEditedGiftId] = useState<number>();

  const handleDelete = (giftId: number) => {
    deleteGift.mutate(giftId);
  };

  const handleEdit = (giftId: number) => {
    setEditedGiftId(giftId);
  };
  if (isLoading) return <div>loading</div>;
  return (
    <>
      {data && (
        <List
          giftList={data.giftList}
          couponList={data.couponList}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      {data && editedGiftId && (
        <EditGiftModal
          giftList={data.giftList}
          editedGiftId={editedGiftId}
          setEditedGiftId={setEditedGiftId}
        />
      )}
    </>
  );
}
