import Button from "components/common/Button";
import Header from "components/common/Header";
import List from "components/common/List";
import Title from "components/common/Title";
import { useParams, useNavigate } from "react-router-dom";
import mockListData from "components/common/mockData";
import COLOR from "style/color";
import styled from "styled-components";

function GiftForConsumer() {
  const { targetId } = useParams();
  const navigate = useNavigate();

  const mockData = {
    providerName: "닝겐미키",
    consumerName: "문을 왜 그렇게 황현희니니니니니이름",
    finalGiftId: 123123,
  };

  const onClickRandomButton = () => {
    navigate(`/target/${targetId}/gift/random`);
  };

  const onClickPickButton = () => {
    navigate(`/target/${targetId}/${mockData.finalGiftId}`);
  };
  return (
    <PageWrapper>
      <Header />
      <TitleWrapper>
        <Title level={1} align="left">
          {mockData.providerName}님이
          <br />
          <TitleSpan>{mockData.consumerName}님</TitleSpan>을 위해
          <br />
          생각한 선물들이에요!
        </Title>
      </TitleWrapper>
      <List
        listData={mockListData}
        type="likable"
        onClickLike={() => console.log("liked")}
      />
      <ButtonWrapper>
        <Button
          text="전부 마음에 드는데 어쩌죠?"
          color={COLOR.PINK}
          width="full"
          onClick={onClickRandomButton}
        />
        <Button
          text="다 골랐어요!"
          color={COLOR.PURPLE}
          width="full"
          onClick={onClickPickButton}
        />
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default GiftForConsumer;

const PageWrapper = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 1.1rem;
`;

const TitleSpan = styled.span`
  color: #e363a3;
  font-weight: 900;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0rem;

  width: 35.8rem;
  height: 13.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLOR.WHITE};
  gap: 1rem;
`;
