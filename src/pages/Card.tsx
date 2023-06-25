import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";
import Button from "components/common/Button";
import Header from "components/common/Header";
import { cardInputState } from "stores/cardAtom";
import { useRecoilState } from "recoil";
import CardToggle from "components/provider/CardToggle";
import CardCustom from "components/provider/CardCustom";
import CardBasic from "components/provider/CardBasic";

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
      {toggleType === "basic" ? (
        <CardBasic />
      ) : (
        <CardCustom
          cardTxt={cardTxt}
          imageUrl={imageURL}
          handleTxtChange={handleTxtChange}
          handleImgChange={handleImgChange}
        />
      )}
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
