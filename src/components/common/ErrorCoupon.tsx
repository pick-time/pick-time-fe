import COLOR from "style/color";
import styled from "styled-components";

const ErrorCoupon = () => {
  return <CouponPreview>COUPON</CouponPreview>;
};

const CouponPreview = styled.div`
  width: 26rem;
  height: 12.4rem;
  border-radius: 8px;
  background: linear-gradient(133deg, #52ccff 0%, #5448e8 100%);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export default ErrorCoupon;
