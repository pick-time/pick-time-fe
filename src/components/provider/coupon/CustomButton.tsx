import COLOR from "style/color";
import styled from "styled-components";

function CustomButton() {
  return <StyledCouponButton>쿠폰 만들기</StyledCouponButton>;
}

export default CustomButton;

const StyledCouponButton = styled.button`
  width: 10.5rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 10rem;
  background-color: ${COLOR.PINK};
  color: ${COLOR.WHITE};
  font-weight: 700;
  font-size: 1.4rem;
`;
