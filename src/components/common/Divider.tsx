import COLOR from "style/color";
import styled from "styled-components";

function Divider() {
  return <StyledDivider />;
}

export default Divider;

const StyledDivider = styled.hr`
  border: 1px solid ${COLOR.GRAY};
`;
