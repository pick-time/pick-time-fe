import { useState } from "react";
import styled from "styled-components";

import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

import ErrorCoupon from "components/common/ErrorCoupon";
import ErrorProduct from "components/common/ErrorProduct";

import COLOR from "style/color";

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
          <ListTitle>쿠폰 리스트</ListTitle>
          <ListWrapper>
            {couponList.map(ele => {
              const { couponId, couponTitle, couponImage } = ele;
              const [couponIsError, setCouponIsError] =
                useState<boolean>(false);
              return (
                <CouponItem key={couponId}>
                  <CouponItemImageWrapper>
                    {couponImage && !couponIsError && (
                      <CouponListImage
                        alt={couponTitle}
                        src={couponImage}
                        onError={() => setCouponIsError(true)}
                      />
                    )}
                    {(!couponImage || couponIsError) && <ErrorCoupon />}
                  </CouponItemImageWrapper>
                  <RadioButtonWrapper>
                    <RadioButton
                      type="radio"
                      checked={selectedCouponId === couponId}
                      onChange={() => onClickRadioButton(couponId, "coupon")}
                    />
                  </RadioButtonWrapper>
                </CouponItem>
              );
            })}
          </ListWrapper>
        </>
      )}
      {giftList && (
        <>
          <Divider />
          <ListTitle>상품 리스트</ListTitle>
          <ListWrapper>
            {giftList.map(ele => {
              const { giftId, giftUrl, giftTitle, giftImage, giftDescription } =
                ele;
              const [productImageIsError, setProductImageIsError] =
                useState<boolean>(false);
              return (
                <ProductItem key={giftId}>
                  <ProductItemInfoWrapper>
                    {!productImageIsError && (
                      <ProductImage
                        alt={giftDescription}
                        src={giftImage}
                        onError={() => setProductImageIsError(true)}
                      />
                    )}
                    {productImageIsError && <ErrorProduct />}
                    <ProductItemTextWrapper>
                      <ProductTitle href={giftUrl}>{giftTitle}</ProductTitle>
                      <ProductDescription>{giftDescription}</ProductDescription>
                    </ProductItemTextWrapper>
                  </ProductItemInfoWrapper>
                  <RadioButtonWrapper>
                    <RadioButton
                      type="radio"
                      checked={selectedProductId === giftId}
                      onChange={() => onClickRadioButton(giftId, "product")}
                    />
                  </RadioButtonWrapper>
                </ProductItem>
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

const ListTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 0.8rem 0;

  color: ${COLOR.SUB_GRAY};
  font-size: 1.4rem;
  font-weight: 700;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;

const CouponItem = styled.div`
  height: 12.4rem;
  width: 30.8rem;
  display: flex;
  background-color: ${COLOR.PLACEHOLDER_PURPLE};
  border-radius: 1rem;

  margin-bottom: 1.6rem;
  justify-content: space-between;
  margin: auto;
`;

const CouponItemImageWrapper = styled.div`
  display: flex;
  width: 26rem;
`;

const CouponListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
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

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30.8rem;
`;

const ProductItemInfoWrapper = styled.div`
  height: 9rem;
  width: 26rem;
  display: flex;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid #e6e6e6;
  border-radius: 1rem;
  padding: 0.4rem;

  margin-bottom: 1.6rem;
  margin: auto;
  gap: 0.3rem;
`;

const ProductItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  color: #333333;
  text-align: left;
  padding-top: 0.7rem;
  width: 18rem;
`;

const ProductImage = styled.img`
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
