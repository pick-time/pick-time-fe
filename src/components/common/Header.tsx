import styled from "styled-components";
import Icon from "./Icon";
import COLOR from "style/color";

function Header() {
  return (
    <LogoWrapper>
      <Icon name="logo-header" width={113} height={26} />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 12rem;
  position: fixed;
  top: 0px;
  background: ${COLOR.WHITE};
  z-index: 1;
`;

export default Header;
