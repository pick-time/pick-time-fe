import styled from "styled-components";
import Button from "components/common/Button";
import Icon from "components/common/Icon";
import COLOR from "style/color";
import { useEffect, useState } from "react";
import { GiftList } from "types/giftList.type";
import ModalFrame from "components/common/ModalFrame";
import { putGift } from "api/provider";

interface ModalProps {
  giftList: GiftList[];
  editedGiftId: number;
  setEditedGiftId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EditGiftModal({
  giftList,
  editedGiftId,
  setEditedGiftId,
}: ModalProps) {
  // 개별 선물 아이템 정보
  const [giftInfo, setGiftInfo] = useState({
    giftDescription: "",
    giftId: 0,
    giftImage: "",
    giftTitle: "",
    giftUrl: "",
  });
  const [showTooltip, setShowTooltip] = useState(false);
  // const [editedValue, setEditedValue] = useState({
  //   editedImage: "",
  //   editedTitle: "",
  //   editedDescription: "",
  // });

  const getGiftItemInfo = () => {
    const editedGift = giftList?.find(list => list.giftId === editedGiftId);
    if (editedGift) {
      setGiftInfo(editedGift);
    } else {
      setGiftInfo({
        giftDescription: "",
        giftId: 0,
        giftImage: "",
        giftTitle: "",
        giftUrl: "",
      });
    }
  };

  useEffect(() => {
    getGiftItemInfo();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGiftInfo({ ...giftInfo, [name]: value });
  };

  console.log(giftInfo);

  // 선물 수정
  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    putGift(giftInfo);
    setEditedGiftId(undefined);
  };

  return (
    <ModalFrame editedGiftId={editedGiftId} setEditedGiftId={setEditedGiftId}>
      <Descrip>상품 정보를 수정해주세요.</Descrip>
      {giftInfo ? (
        <Img src={giftInfo?.giftImage} alt="상품 이미지" />
      ) : (
        <ImgBox />
      )}
      <Form onSubmit={handleEdit}>
        <InputBox>
          <Title>
            상품 제목<span>*</span>
          </Title>
          <Input
            type="text"
            name="giftTitle"
            value={giftInfo?.giftTitle}
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
            name="giftDescription"
            value={giftInfo?.giftDescription}
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
const Img = styled.img`
  width: 12.4rem;
  height: 12.4rem;
  border-radius: 50%;
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
