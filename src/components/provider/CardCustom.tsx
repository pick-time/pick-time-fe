import styled from "styled-components";
import CardTxt from "./CardTxt";

interface CardCustomProps {
  cardTxt: string;
  imageUrl: string | null;
  handleTxtChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImgChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardCustom({
  cardTxt,
  imageUrl,
  handleTxtChange,
  handleImgChange,
}: CardCustomProps) {
  return (
    <div>
      <ImgLabel htmlFor="cardImg">
        {imageUrl ? (
          <PreviewImage src={imageUrl} alt="선택한 이미지" />
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
      <CardTxt cardInp={cardTxt} onChange={handleTxtChange} />
    </div>
  );
}

export default CardCustom;

const ImgLabel = styled.label`
  margin: 6.2rem 0 1rem;
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
