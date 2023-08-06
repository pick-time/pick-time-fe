import ErrorCoupon from "components/common/ErrorCoupon";
import { useState } from "react";
import COLOR from "style/color";
import styled from "styled-components";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

interface ConsumerGiftListProps {
  giftList?: GiftList[];
  couponList?: CouponList[];
  onSelectGift: (id: number) => void;
}

export default function ConsumerGiftList({
  giftList,
  couponList,
  onSelectGift,
}: ConsumerGiftListProps) {
  // TODO: gift - coupon 데이터에서 id가 겹치지 않는 것이 보장될 경우 합칠 수 있음
  const [selectedCouponId, setSelectedCouponId] = useState<number | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null,
  );

  const onClickRadioButton = (id: number, giftType: "coupon" | "product") => {
    if (giftType === "coupon") {
      setSelectedCouponId(id);
      setSelectedProductId(null);
    }
    if (giftType === "product") {
      setSelectedProductId(id);
      setSelectedCouponId(null);
    }
    onSelectGift(id);
  };

  return (
    <GiftListWrapper>
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
                      onChange={() => onClickRadioButton(couponId, "coupon")}
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
              const { giftId, giftUrl, giftTitle, giftImage, giftDescription } =
                ele;
              const [productImageIsError, setProductImageIsError] =
                useState<boolean>(false);
              return (
                <ProductItemWrapper key={giftId}>
                  <ProductListItem>
                    <ProductListItemInfoWrapper>
                      {productImageIsError}
                      <ProductListImage
                        alt={giftDescription}
                        src={giftImage}
                        onError={() => setProductImageIsError(true)}
                      />
                      <ProductListTextWrapper>
                        <ProductTitle href={giftUrl}>{giftTitle}</ProductTitle>
                        <ProductDescription>
                          {giftDescription}
                        </ProductDescription>
                      </ProductListTextWrapper>
                    </ProductListItemInfoWrapper>
                  </ProductListItem>
                  <CouponListButtonWrapper>
                    <RadioButton
                      type="radio"
                      checked={selectedProductId === giftId}
                      onChange={() => onClickRadioButton(giftId, "product")}
                    />
                  </CouponListButtonWrapper>
                </ProductItemWrapper>
              );
            })}
          </ListWrapper>
        </>
      )}
    </GiftListWrapper>
  );
}

const GiftListWrapper = styled.div`
  padding-bottom: 13.5em;
`;
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
  align-items: center;
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
  width: 26rem;
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
  width: 4.8rem;
  /* margin: 0.7rem 1rem 0.7rem 0rem; */
`;

const RadioButton = styled.input`
  appearance: none;
  border: 0.1rem solid ${COLOR.PURPLE};
  border-radius: 50%;
  background: ${COLOR.BUTTON_LIGHT_PURPLE};
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.15rem;

  &:checked {
    box-shadow: 2rem 2rem inset ${COLOR.PURPLE};
    outline: 0.5rem solid ${COLOR.BUTTON_LIGHT_PURPLE};
    outline-offset: -0.6rem;
  }
`;

const ProductItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30.8rem;
`;

const ProductListItem = styled.div`
  height: 9rem;
  width: 26rem;
  display: flex;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid #e6e6e6;
  border-radius: 1rem;
  padding: 0.4rem;
  margin-bottom: 1.6rem;
  margin: auto;
`;

const ProductListItemInfoWrapper = styled.div`
  display: flex;
  width: 20rem;
`;

const ProductListTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  color: #333333;
  text-align: left;
  padding-top: 0.7rem;
  width: 18rem;
`;

const ProductListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const ProductTitle = styled.a`
  overflow: hidden;
  color: "#333333";
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  line-height: 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;

const ProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;

  line-clamp: 2;
  height: 3rem;
`;
