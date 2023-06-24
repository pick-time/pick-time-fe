import styled from "styled-components";
import Icon from "./Icon";

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
  padding: 3rem 12rem;
`;

export default Header;
