import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";
import Button from "components/common/Button";
import Header from "components/common/Header";
import CardTxt from "components/provider/CardTxt";
import { cardInputState } from "stores/cardAtom";
import { useRecoilState } from "recoil";
import CardToggle from "components/provider/CardToggle";

function Card() {
  const navigate = useNavigate();
  const [toggleType, setToggleType] = useState<"basic" | "custom">("basic");

  const [cardTxt, setCardTxt] = useState("");
  const [imageURL, setImageURL] = useState<string | null>("");
  const [cardInput, setCardInput] = useRecoilState(cardInputState);
  console.log(cardInput);

  const handleTxtChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardTxt(event.target.value);
    setCardInput(prevCardInput => ({
      ...prevCardInput,
      cardText: event.target.value,
    }));
  };

  const handleImgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
      setCardInput(prevCardInput => ({
        ...prevCardInput,
        imgUrl: imageUrl,
      }));
    }
  };

  const handleCancel = () => {
    navigate("/gift");
  };

  const handleSuccess = () => {
    navigate("/gift");
  };

  return (
    <Form>
      <Header />
      <CardToggle toggleType={toggleType} setToggleType={setToggleType} />
      <ImgLabel htmlFor="cardImg">
        {imageURL ? (
          <PreviewImage src={imageURL} alt="선택한 이미지" />
        ) : (
          <>
            <p>나만의 이미지 등록</p>
            <input
              type="file"
              id="cardImg"
              accept="image/*"
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
          </>
        )}
      </ImgLabel>
      <CardTxt
        cardInp={cardTxt}
        onChange={handleTxtChange}
        placeholder="마음을 전하고 싶은 분에게 메세지를 작성해 보세요!"
      />
      <ButtonWrapper>
        <Button
          text="취소"
          width="half"
          color={COLOR.WHITE}
          onClick={handleCancel}
        />
        <Button
          text="완료"
          color={COLOR.PINK}
          width="half"
          onClick={handleSuccess}
        />
      </ButtonWrapper>
    </Form>
  );
}

export default Card;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 31rem;
`;

const ImgLabel = styled.label`
  margin: 1rem 0;
  width: 31rem;
  height: 16rem;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  p {
    color: #8e8e8e;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;

const PreviewImage = styled.img`
  width: 31rem;
  height: 16rem;
  border-radius: 1rem;
  object-fit: cover;
`;
