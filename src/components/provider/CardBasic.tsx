import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { cardInputState, FileInputState } from "stores/cardAtom";
import styled from "styled-components";
import CardTxt from "./CardTxt";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";
import Card4 from "../../assets/Card4.png";
import Card5 from "../../assets/Card5.png";
import Card6 from "../../assets/Card6.png";

interface CardBasicProps {
  cardTxt: string;
  handleTxtChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CardBasic({ cardTxt, handleTxtChange }: CardBasicProps) {
  const setCardInput = useSetRecoilState(cardInputState);
  const setFileInput = useSetRecoilState(FileInputState);

  const [selectedImg, setSelectedImg] = useState(Card1);
  const cards = [Card1, Card2, Card3, Card4, Card5, Card6];

  const convertToBlob = async (src: string) => {
    const response = await fetch(src);
    const blob = await response.blob();

    // Blob 객체를 사용할 수 있습니다. 원하는 작업 수행 가능
    // console.log("blob", blob);

    // Blob 객체로부터 File 객체 생성
    const file = new File([blob], "my-image.png", { type: "image/png" });

    // File 객체를 사용할 수 있습니다. 원하는 작업 수행 가능
    // console.log("file", file);

    return file; // Blob이 아닌 File 객체를 반환합니다.
  };

  const handleImgClick = async (src: string) => {
    setSelectedImg(src);
    const file = await convertToBlob(src);
    setFileInput(file);
    setCardInput(prevCardInput => ({
      ...prevCardInput,
      imgUrl: src,
    }));
  };

  return (
    <div>
      <OtherImgWrapper>
        {cards.map(card => {
          return (
            <OtherImg
              src={card}
              key={card}
              onClick={() => handleImgClick(card)}
            />
          );
        })}
      </OtherImgWrapper>
      <DefaultImg src={selectedImg} alt="카드 축하 페이지" />
      <CardTxt cardInp={cardTxt} onChange={handleTxtChange} />
    </div>
  );
}

export default CardBasic;

const DefaultImg = styled.img`
  margin: 1rem 0;
  width: 31rem;
  height: 18rem;
`;

const OtherImgWrapper = styled.div`
  width: 31rem;
  margin-top: 1rem;
  display: flex;
  overflow: scroll;
`;

const OtherImg = styled.img`
  margin-right: 1rem;
  width: 7rem;
  height: 4rem;
  cursor: pointer;
`;
