/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import List from "components/common/List";
import EditGiftModal from "./EditGiftModal";
import { useParams } from "react-router-dom";
import useGift from "hooks/queries/useGift";
import styled from "styled-components";

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
        <ListWrapper>
          <List
            giftList={data.giftList}
            couponList={data.couponList}
            type="editable"
            onClickClose={handleDelete}
            onClickEdit={handleEdit}
          />
        </ListWrapper>
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

const ListWrapper = styled.div`
  padding-bottom: 20rem;
`;
