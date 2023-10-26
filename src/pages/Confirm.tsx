/* eslint-disable no-nested-ternary */

import { useGetResult } from "hooks/queries/useResult";
import Button from "components/common/Button";
import Header from "components/common/Header";
import ListComponent from "components/common/List";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import { useParams, useNavigate } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";

function Confirm() {
  const { targetId } = useParams();
  const navigate = useNavigate();

  const onClickConfirmButton = () => {
    navigate(`/result/${targetId}`);
  };

  const { data, isLoading } = useGetResult({
    id: parseInt(targetId || "", 10),
  });

  if (!data) return <Loading />;
  return (
    <PageWrapper>
      <Header />
      {!isLoading && (
        <>
          <TitleWrapper>
            <Title level={1} align="left">
              <TitleSpan>
                {data.providerName}
                님,
              </TitleSpan>
              <br />
              고르신 선물 확인해 주세요!
            </Title>
          </TitleWrapper>
          <ListComponent giftList={data?.giftList} type="default" />
          <ListComponent couponList={data?.couponList} type="default" />
        </>
      )}
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

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  height: 8rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLOR.WHITE};
`;
