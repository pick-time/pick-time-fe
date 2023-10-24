import styled from "styled-components";
import ProviderGiftForm from "components/provider/ProviderGiftForm";
import ProviderGiftList from "components/provider/ProviderGiftList";
import ProviderCard from "components/provider/ProviderCard";
import OpenModalButton from "components/provider/coupon/OpenModalButton";
import HeaderWithButton from "components/common/HeaderWithButton";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateTarget } from "hooks/queries/usePostTarget";
import { useRecoilValue } from "recoil";
import { FileInputState, cardInputState } from "stores/cardAtom";
import useGift from "hooks/queries/useGift";

export default function Gift() {
  const { targetId } = useParams();
  const navigate = useNavigate();
  const cardInput = useRecoilValue(cardInputState);
  const cardFile = useRecoilValue(FileInputState);

  const { mutate } = useUpdateTarget();

  const { getGift } = useGift(Number(targetId));

  const onSubmitSelectResult = async () => {
    try {
      if (targetId) {
        const postData = {
          targetId: +targetId,
          cardMessage: cardInput.cardText,
          file: cardFile,
          giftList: getGift.data?.giftList.reduce((a: number[], ele) => {
            a.push(ele.giftId);
            return a;
          }, []),
          couponList: getGift.data?.couponList.reduce((a: number[], ele) => {
            a.push(ele.couponId);
            return a;
          }, []),
        };
        mutate(postData);
        navigate(`/result/${targetId}`);
      }
    } catch (err) {
      console.error(err);
      alert("죄송합니다. 잠시 후 다시 시도해주세요.");
    }
  };
  return (
    <>
      <HeaderWithButton
        onClickBackBtn={() => navigate("/")}
        onClickCompleteBtn={() => onSubmitSelectResult()}
      />
      <BodyWrapper>
        <ProviderCard />
        <ProviderGiftForm />
        <OpenModalButton />
        <ProviderGiftList />
      </BodyWrapper>
    </>
  );
}

const BodyWrapper = styled.div`
  height: 100%;
`;
