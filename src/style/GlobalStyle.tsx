import COLOR from "style/color";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  :root {
    --toastify-color-success: ${COLOR.PINK};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 844px;
  }

  body,
  button,
  input {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1em;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
