import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";
import EditGiftModal from "./EditGiftModal";
import giftList from "data/giftData";

export interface ResponseData {
  giftDescription: string;
  giftId: number;
  giftImage: string;
  giftTitle: string;
  giftUrl: string;
}

export default function ProviderGiftList() {
  // const navigate = useNavigate();
  // const { targetId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] =
    useRecoilState<ResponseData[]>(urlResponseState);

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
    <Wrapper>
      <Title>상품 리스트</Title>
      {response && (
        <List
          listData={response}
          type="editable"
          onClickClose={handleDelete}
          onClickEdit={handleEdit}
        />
      )}
      {openEditModal && (
        <EditGiftModal
          listData={response}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid #d7d7d7;
`;

const Title = styled.div`
  color: #a3a3a3;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 0.8rem 0;
`;
