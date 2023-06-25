import Button from "components/common/Button";
import Header from "components/common/Header";
import List from "components/common/List";
import Title from "components/common/Title";
import { useParams, useNavigate } from "react-router-dom";
// import mockListData from "components/common/mockData";
import COLOR from "style/color";
import styled from "styled-components";

function Confirm() {
  const { targetId } = useParams();
  const navigate = useNavigate();

  const mockData = {
    providerName: "닝겐미키",
    consumerName: "문을 왜 그렇게 황현희니니니니니이름",
  };

  const onClickConfirmButton = () => {
    navigate(`/result/${targetId}`);
  };
  return (
    <PageWrapper>
      <Header />
      <TitleWrapper>
        <Title level={1} align="left">
          <TitleSpan>{mockData.providerName}님,</TitleSpan>
          <br />
          고르신 선물 확인해 주세요!
        </Title>
      </TitleWrapper>
      <List listData={[]} type="default" />
      <ButtonWrapper>
        <Button
          text="확인했어요!"
          color={COLOR.PINK}
          width="full"
          onClick={onClickConfirmButton}
        />
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default Confirm;

const PageWrapper = styled.div``;

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
  height: 8rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLOR.WHITE};
`;
