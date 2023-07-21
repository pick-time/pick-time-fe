/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";
// import giftList from "data/giftData";
import { useParams } from "react-router-dom";
import mockCouponList from "data/couponData";
import useGift from "hooks/queries/useGift";

export default function ProviderGiftList() {
  const { targetId } = useParams();
  const {
    getGift: { isLoading, data: giftList },
  } = useGift(Number(targetId));
  // 시현용
  const [listData, setListData] = useState<GiftList[]>(giftList);
  const [openEditModal, setOpenEditModal] = useState<number>();

  const handleDelete = (giftId: number) => {
    setListData(listData?.filter(list => list.giftId !== giftId));
  };

  const handleEdit = (giftId: number) => {
    setOpenEditModal(giftId);
  };
  if (isLoading) return <div>loading</div>;
  return (
    <>
      {giftList && (
        <List
          // TODO: listData 삭제
          listData={listData}
          giftList={giftList}
          // TODO: 실데이터로 교체
          couponList={mockCouponList}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      {openEditModal && (
        <EditGiftModal
          // listData={response}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
    </>
  );
}
