import styled from "styled-components";
import Button from "components/common/Button";
import Icon from "components/common/Icon";
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

  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <ModalFrame
      openEditModal={openEditModal}
      setOpenEditModal={setOpenEditModal}
    >
      <Descrip>상품 정보를 수정해주세요.</Descrip>
      {imgSrc ? <img src={imgSrc} alt="상품 이미지" /> : <ImgBox />}
      <Form onSubmit={handleEdit}>
        <InputBox>
          <Title>
            상품 제목<span>*</span>
          </Title>
          <Input
            type="text"
            name="title"
            value={editedValue.title}
            onChange={handleInputChange}
          />
        </InputBox>
        <InputBox>
          <Title>상품 설명</Title>
          <TooltipBtn
            onMouseOver={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Icon name="tooltip" width={16} height={16} />
          </TooltipBtn>
          {showTooltip && (
            <TooltipContent>선물을 선택한 이유를 적어보세요!</TooltipContent>
          )}
          <Input
            type="text"
            name="des"
            value={editedValue.des}
            onChange={handleInputChange}
          />
        </InputBox>
        <ButtonBox>
          <Button
            type="submit"
            text="완료하기"
            color={COLOR.PURPLE}
            width="half"
            // isDisabled={form.isDisabled}
            // onClick={handleClick}
          />
        </ButtonBox>
      </Form>
    </ModalFrame>
  );
}

const Descrip = styled.div`
  font-size: 18px;
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
const InputBox = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  span {
    color: #ff2c2c;
  }
`;
const TooltipBtn = styled.div`
  position: absolute;
  top: 0;
  left: 5.5rem;
  cursor: pointer;
`;
const TooltipContent = styled.div`
  position: absolute;
  top: -0.9rem;
  left: 8rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background-color: #8e8e8e;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-right-color: #8e8e8e;
    border-left: 0;
    margin-top: -6px;
    margin-left: -6px;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 26rem;
  height: 3.3rem;
  color: #8e8e8e;
  font-size: 12px;
  font-weight: 500;
  border-bottom: 1px solid #f2f3f5;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
