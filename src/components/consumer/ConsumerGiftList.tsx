import { useState } from "react";
import COLOR from "style/color";
import styled from "styled-components";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

interface ConsumerGiftListProps {
  giftList?: GiftList[];
  couponList?: CouponList[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorCoupon = () => {
  return <CouponPreview>COUPON</CouponPreview>;
};

const CouponPreview = styled.div`
  width: 26.1rem;
  height: 12.4rem;
  border-radius: 8px;
  background: linear-gradient(133deg, #52ccff 0%, #5448e8 100%);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export default function ConsumerGiftList({
  giftList,
  couponList,
}: ConsumerGiftListProps) {
  const [selectedCouponId, setSelectedCouponId] = useState<number | null>(null);

  return (
    <form>
      {couponList && (
        <>
          <Divider />
          <ListTitleWrapper>
            <ListTitleText>쿠폰 리스트</ListTitleText>
          </ListTitleWrapper>
          <ListWrapper>
            {couponList.map(ele => {
              const { couponId, couponTitle, couponImage } = ele;
              const [couponIsError, setCouponIsError] =
                useState<boolean>(false);
              return (
                <CouponListItem key={couponId}>
                  <CouponListItemInfoWrapper>
                    {couponImage && !couponIsError && (
                      <CouponListImage
                        alt={couponTitle}
                        src={couponImage}
                        onError={() => setCouponIsError(true)}
                      />
                    )}
                    {(!couponImage || couponIsError) && <ErrorCoupon />}
                  </CouponListItemInfoWrapper>
                  <CouponListButtonWrapper>
                    <RadioButton
                      type="radio"
                      checked={selectedCouponId === couponId}
                      onChange={() => setSelectedCouponId(couponId)}
                    />
                  </CouponListButtonWrapper>
                </CouponListItem>
              );
            })}
          </ListWrapper>
        </>
      )}
      {giftList && (
        <>
          <Divider />
          <ListTitleWrapper>
            <ListTitleText>상품 리스트</ListTitleText>
          </ListTitleWrapper>
          <ListWrapper>
            {giftList.map(ele => {
              return ele.giftId;
            })}
          </ListWrapper>
        </>
      )}
    </form>
  );
}

const Divider = styled.hr`
  width: 100%;
  stroke-width: 0.1rem;
  stroke: #d7d7d7;
`;

const ListTitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

const ListTitleText = styled.span`
  color: ${COLOR.SUB_GRAY};
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.8rem 0;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;

const CouponListItem = styled.div`
  height: 12.4rem;
  width: 30.8rem;
  display: flex;
  background-color: ${COLOR.PLACEHOLDER_PURPLE};
  border-radius: 1rem;

  margin-bottom: 1.6rem;
  justify-content: space-between;
  margin: auto;
`;

const CouponListItemInfoWrapper = styled.div`
  display: flex;
  width: 30.8rem;
`;

const CouponListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const CouponListButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 2rem;
  margin: 0.7rem 1rem 0.7rem 0rem;
`;

const RadioButton = styled.input`
  appearance: none;
  border: 0.1em solid ${COLOR.PURPLE};
  border-radius: 50%;
  background: ${COLOR.PLACEHOLDER_PURPLE};
  width: 1.25em;
  height: 1.25em;

  &:before {
    content: "";
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem ${COLOR.PURPLE};
  }

  &:checked {
    &::before {
      transform: scale(1);
    }
  }
`;
