import styled from "styled-components";
import Button from "components/common/Button";
// import Icon from "components/common/Icon";
import COLOR from "style/color";
import { useState } from "react";
import { GiftList } from "types/giftList.type";
import ModalFrame from "components/common/ModalFrame";

interface ModalProps {
  listData: GiftList[] | undefined;
  setListData: React.Dispatch<React.SetStateAction<GiftList[] | undefined>>;
  openEditModal: number;
  setOpenEditModal: React.Dispatch<React.SetStateAction<number | undefined>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EditGiftModal({
  listData,
  setListData,
  openEditModal,
  setOpenEditModal,
}: ModalProps) {
  const [editedValue, setEditedValue] = useState({
    title: "",
    des: "",
  });
  const [imgSrc, setImgSrc] = useState<string | undefined>("");

  function getImgSrcById() {
    const foundList = listData?.find(list => list.giftId === openEditModal);
    setImgSrc(foundList?.giftImage);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedValue(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    getImgSrcById();

    const updatedTitle = editedValue.title;
    const updatedDes = editedValue.des;

    setListData(prevListData =>
      prevListData?.map(list => {
        if (list.giftId === openEditModal) {
          return {
            ...list,
            giftTitle: updatedTitle,
            giftDescription: updatedDes,
          };
        }
        return list;
      }),
    );
    setOpenEditModal(undefined);
  };

  return (
    <ModalFrame
      openEditModal={openEditModal}
      setOpenEditModal={setOpenEditModal}
    >
      <Descrip>상품을 수정해주세요.</Descrip>
      {imgSrc ? <img src={imgSrc} alt="상품 이미지" /> : <ImgBox />}
      <Form onSubmit={handleEdit}>
        <InputContainer>
          <Title>제품 명</Title>
          <Input
            type="text"
            name="title"
            value={editedValue.title}
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Title>제품 설명</Title>
          <Input
            type="text"
            name="des"
            value={editedValue.des}
            onChange={handleInputChange}
          />
        </InputContainer>
        <Button
          type="submit"
          text="확인"
          color={COLOR.PINK}
          width="modal"
          // isDisabled={form.isDisabled}
          // onClick={handleClick}
        />
      </Form>
    </ModalFrame>
  );
}

const Descrip = styled.div`
  color: #333;
  font-size: 13px;
  font-weight: 700;
`;
const ImgBox = styled.div`
  width: 12.4rem;
  height: 12.4rem;
  border-radius: 50%;
  background-color: #f2f3f5;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;
const InputContainer = styled.div``;
const Title = styled.div`
  color: #333;
  font-size: 9px;
  font-weight: 500;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 26rem;
  height: 3.3rem;
  border-bottom: 1px solid #f2f3f5;
`;
