import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Intro from "pages/Intro";
import Gift from "pages/Gift";
import Card from "pages/Card";
import GlobalStyle from "style/GlobalStyle";
import RecoilSample from "pages/RecoilSample";
import ReactQuerySample from "pages/ReactQuerySample";
import IconLoader from "components/common/IconLoader";
import styled from "styled-components";
import Confirm from "pages/Confirm";
import GiftForConsumer from "pages/GiftForConsumer";
import ProviderResult from "pages/ProviderResult";

function App() {
  return (
    <Root className="App">
      <IconLoader />
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Intro />} />
        <Route path="/target/:targetId" element={<Intro />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/card" element={<Card />} />
        <Route path="/result/:targetId" element={<ProviderResult />} />
        <Route path="/confirm/:targetId" element={<Confirm />} />
        <Route path="/target/:targetId/gift" element={<GiftForConsumer />} />
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
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
`;

export default App;
