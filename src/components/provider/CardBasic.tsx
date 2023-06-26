import { useState } from "react";
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
  handleTxtChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardBasic({ cardTxt, handleTxtChange }: CardBasicProps) {
  const [selectedImg, setSelectedImg] = useState(Card1);
  const cards = [Card1, Card2, Card3, Card4, Card5, Card6];

  const handleImgClick = (src: string) => {
    setSelectedImg(src);
    // const formData = new FormData();
    // formData.append("file", selectedImg);
    // console.log(formData);
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
  height: 16rem;
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
`;
