import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Intro from "pages/Intro";
import Gift from "pages/Gift";
import GlobalStyle from "style/GlobalStyle";
import RecoilSample from "pages/RecoilSample";
import ReactQuerySample from "pages/ReactQuerySample";
import IconLoader from "components/common/IconLoader";
import styled from "styled-components";

function App() {
  return (
    <Root className="App">
      <IconLoader />
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Intro />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/recoil-sample" element={<RecoilSample />} />
        <Route path="/react-query-sample" element={<ReactQuerySample />} />
      </Routes>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

export default App;
