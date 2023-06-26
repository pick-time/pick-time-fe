import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Icon from "components/common/Icon";
import { imgUrlSelector } from "stores/cardAtom";

function ProviderCard() {
  const navigate = useNavigate();
  const imgUrl = useRecoilValue(imgUrlSelector);

  const handleNextToPage = () => {
    navigate("/card");
  };
  return (
    <CardWrapper>
      <ContentWrapper onClick={handleNextToPage}>
        {imgUrl ? (
          <Img src={imgUrl} alt="나만의 카드 사진" />
        ) : (
          <>
            <Icon name="card-create" width={32} height={32} />
            <Content>나만의 카드 등록하기</Content>
          </>
        )}
      </ContentWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 31rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 2.6rem 4rem 2.6rem;
  border: 1px dashed #d3c9e7;
  border-radius: 10px;
`;

const ContentWrapper = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
`;
const Content = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.1rem;
`;

const Img = styled.img`
  width: 31rem;
  height: 16rem;
  border-radius: 10px;
  margin: 3rem 2.6rem 4rem 2.6rem;
`;

export default ProviderCard;
