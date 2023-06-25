import Button from "components/common/Button";
import Header from "components/common/Header";
import List from "components/common/List";
import Title from "components/common/Title";
// import { useParams } from "react-router-dom";
// import mockListData from "components/common/mockData";
import COLOR from "style/color";
import styled from "styled-components";

function Confirm() {
  //   const { targetId } = useParams();

  const mockData = { providerName: "닝겐미키" };
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
      <Button
        text="확인했어요!"
        color={COLOR.PINK}
        width="full"
        onClick={() => console.log("!")}
      />
    </PageWrapper>
  );
}

export default Confirm;

const PageWrapper = styled.div``;

const TitleWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.7rem;
`;

const TitleSpan = styled.span`
  color: #e363a3;
  font-weight: 900;
`;
