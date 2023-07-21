import COLOR from "style/color";
import styled from "styled-components";
import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

interface ConsumerGiftListProps {
  giftList?: GiftList[];
  couponList?: CouponList[];
}

export default function ConsumerGiftList({
  giftList,
  couponList,
}: ConsumerGiftListProps) {
  return (
    <>
      {couponList && (
        <>
          <Divider />
          <ListTitleWrapper>
            <ListTitleText>쿠폰 리스트</ListTitleText>
          </ListTitleWrapper>
          {couponList.map(ele => {
            return ele.couponId;
          })}
        </>
      )}
      {giftList && (
        <>
          <Divider />
          <ListTitleWrapper>
            <ListTitleText>상품 리스트</ListTitleText>
          </ListTitleWrapper>
          {giftList.map(ele => {
            return ele.giftId;
          })}
        </>
      )}
    </>
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
