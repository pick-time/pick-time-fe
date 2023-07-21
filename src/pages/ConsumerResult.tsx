import Button from "components/common/Button";
import Header from "components/common/Header";
import Icon from "components/common/Icon";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import CopyLink from "components/provider/CopyLink";
import KakaoShare from "components/provider/KakaoShare";
import useGetTargetInfo from "hooks/queries/useGetTargetInfo";
import { useParams } from "react-router-dom";
import COLOR from "style/color";
import styled from "styled-components";

function ConsumerResult() {
  const { targetId } = useParams();
  const { data } = useGetTargetInfo(Number(targetId));

  if (!data) return <Loading />;
  return (
    <>
      <ResultWrapper>
        <Header />
        <Title level={1} align="center">
          {data.consumerName}님이 <br />
          고른 선물이에요
        </Title>
        <ImageWrapper>
          <StyledImage src={data?.finalGift.giftImageUrl} alt="선택한 선물" />
        </ImageWrapper>
        <GiftTitle>
          <p>{data?.finalGift.giftTitle}</p>
          <Icon name="link-icon" width={23} height={23} />
        </GiftTitle>
        <LinkWrapper>
          <KakaoShare userType="consumer" consumerName={data.consumerName} />
          <CopyLink>
            <Button text="URL" color={COLOR.NAVY} width="half" />
          </CopyLink>
        </LinkWrapper>
      </ResultWrapper>
    </>
  );
}

export default ConsumerResult;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 5rem 0 2.5rem 0;
`;

const StyledImage = styled.img`
  width: 21.2rem;
  height: 21.2rem;
  border-radius: 1rem;
`;

const GiftTitle = styled.div`
  display: flex;
  align-items: center;

  height: 5rem;

  & > p {
    width: 25rem;
    font-size: 1.8rem;
    font-weight: 700;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  width: 30.2rem;
  height: 6.1rem;
  background-color: ${COLOR.WHITE};
`;
