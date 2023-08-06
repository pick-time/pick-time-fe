import styled from "styled-components";
import Button from "components/common/Button";
import Icon from "components/common/Icon";
import COLOR from "style/color";
import { useEffect, useState } from "react";
import { GiftList } from "types/giftList.type";
import ModalFrame from "components/common/ModalFrame";
import useGift from "hooks/queries/useGift";
import { useParams } from "react-router-dom";

interface ModalProps {
  giftList: GiftList[];
  editedGiftId: number;
  setEditedGiftId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function EditGiftModal({
  giftList,
  editedGiftId,
  setEditedGiftId,
}: ModalProps) {
  const { targetId } = useParams();
  const { modifyGift } = useGift(Number(targetId));
  // 개별 선물 정보
  const [giftItem, setGiftItem] = useState({
    giftDescription: "",
    giftId: 0,
    giftTitle: "",
    giftUrl: "",
    giftImage: "",
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInputFile, setShowInputFile] = useState(false);
  const [editedImg, setEditedImg] = useState<string | Blob>();

  const getGiftItem = () => {
    const giftItemInfo = giftList?.find(list => list.giftId === editedGiftId);
    if (giftItemInfo) {
      setGiftItem(giftItemInfo);
    }
  };

  useEffect(() => {
    getGiftItem();
  }, []);

  // 선물 title, description 수정
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGiftItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 선물 이미지 수정
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files !== null) {
      setEditedImg(event.target.files[0]);
    }
  };
  // console.log(editedImg);

  // 선물 수정 폼 제출
  const handleEditForm = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("giftTitle", giftItem.giftTitle);
    formData.append("giftDescription", giftItem.giftDescription);
    formData.append("giftId", giftItem.giftId.toString());
    if (editedImg !== undefined) {
      formData.append("file", editedImg);
    }
    modifyGift.mutate(formData);
    setEditedGiftId(undefined);
  };

  const handleInputFile = () => {
    setShowInputFile(true);
  };

  return (
    <ModalFrame editedGiftId={editedGiftId} setEditedGiftId={setEditedGiftId}>
      <Descrip>상품 정보를 수정해주세요.</Descrip>
      {giftItem.giftImage ? (
        <>
          <Img
            src={giftItem?.giftImage}
            alt="상품 이미지"
            onClick={handleInputFile}
          />
          {showInputFile && <input type="file" onChange={handleChangeImage} />}
        </>
      ) : (
        <ImgBox />
      )}
      <Form onSubmit={handleEditForm}>
        <InputBox>
          <Title>
            상품 제목<span>*</span>
          </Title>
          <Input
            type="text"
            name="giftTitle"
            value={giftItem?.giftTitle}
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
            value={giftItem?.giftDescription}
            onChange={handleInputChange}
          />
        </InputBox>
        <ButtonBox>
          <Button
            type="submit"
            text="완료하기"
            color={COLOR.PURPLE}
            width="half"
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
  cursor: pointer;
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
