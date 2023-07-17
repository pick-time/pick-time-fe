import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";
import Button from "components/common/Button";
import COLOR from "style/color";
import giftList from "data/giftData";
import { useNavigate, useParams } from "react-router-dom";
import mockCouponList from "data/couponData";

interface ResponseData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProviderGiftList() {
  const navigate = useNavigate();
  const { targetId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] =
    useRecoilState<ResponseData>(urlResponseState);
  // 시현용
  const [listData, setListData] = useState<GiftList[] | undefined>(giftList);
  // const [listData, setListData] = useState<GiftList[] | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openEditModal, setOpenEditModal] = useState<number>();

  const handleDelete = (giftId: number) => {
    setListData(listData?.filter(list => list.giftId !== giftId));
  };

  const handleEdit = (giftId: number) => {
    setOpenEditModal(giftId);
  };

  const handleClick = () => {
    console.log(targetId);

    navigate(`/result/${13}`);
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
          // TODO: listData 삭제
          listData={listData}
          giftList={listData}
          // TODO: 실데이터로 교체
          couponList={mockCouponList}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      <Button
        text="작성 완료하기"
        color={COLOR.PINK}
        width="full"
        onClick={handleClick}
      />
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
