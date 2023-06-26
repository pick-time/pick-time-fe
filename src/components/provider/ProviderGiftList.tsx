import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";

interface ResponseData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProviderGiftList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] =
    useRecoilState<ResponseData>(urlResponseState);
  const [listData, setListData] = useState<GiftList[] | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openEditModal, setOpenEditModal] = useState<number>();

  const handleDelete = (giftId: number) => {
    setListData(listData?.filter(list => list.giftId !== giftId));
  };

  const handleEdit = (giftId: number) => {
    setOpenEditModal(giftId);
  };

  useEffect(() => {
    if (response.title !== "") {
      const newData: GiftList = {
        giftId: new Date().getTime(),
        giftUrl: response.url,
        giftImage: response.image,
        giftTitle: response.title,
        giftDescription: response.description,
      };
      setListData(prevListData =>
        prevListData ? [...prevListData, newData] : [newData],
      );
    }
  }, [response]);

  return (
    <>
      {listData && (
        <List
          listData={listData}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      {openEditModal && (
        <EditGiftModal
          listData={listData}
          setListData={setListData}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
    </>
  );
}
