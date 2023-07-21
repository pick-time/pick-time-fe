/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";
// import giftList from "data/giftData";

import { useNavigate, useParams } from "react-router-dom";
import mockCouponList from "data/couponData";

interface ResponseData {
  title: string;
  description: string;
  image: string;
  url: string;
}

type GiftListProps = {
  giftList: GiftList[];
};

export default function ProviderGiftList({ giftList }: GiftListProps) {
  // const navigate = useNavigate();
  // const { targetId } = useParams();
  // 시현용
  const [listData, setListData] = useState<GiftList[]>(giftList);
  const [openEditModal, setOpenEditModal] = useState<number>();

  const handleDelete = (giftId: number) => {
    setListData(listData?.filter(list => list.giftId !== giftId));
  };

  const handleEdit = (giftId: number) => {
    setOpenEditModal(giftId);
  };

  // useEffect(() => {
  //   if (response.title !== "") {
  //     const newData: GiftList = {
  //       giftId: new Date().getTime(),
  //       giftUrl: response.url,
  //       giftImage: response.image,
  //       giftTitle: response.title,
  //       giftDescription: response.description,
  //     };
  //     setListData(prevListData =>
  //       prevListData ? [...prevListData, newData] : [newData],
  //     );
  //   }
  // }, [response]);

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

const Title = styled.div`
  color: #a3a3a3;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 0.8rem 0;
`;
