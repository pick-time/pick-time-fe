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

  // 시현용
  const [listData, setListData] = useState<GiftList[]>([]);
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
          // TODO: listData 삭제
          listData={listData}
          giftList={data.giftList}
          // TODO: 실데이터로 교체
          couponList={[]}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      {data && editedGiftId && (
        <EditGiftModal
          // listData={response}
          giftList={data.giftList}
          editedGiftId={editedGiftId}
          setEditedGiftId={setEditedGiftId}
        />
      )}
    </>
  );
}
