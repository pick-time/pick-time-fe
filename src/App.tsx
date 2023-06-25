import React from "react";
import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Intro from "pages/Intro";
import Gift from "pages/Gift";
import GlobalStyle from "style/GlobalStyle";
import RecoilSample from "pages/RecoilSample";
import ReactQuerySample from "pages/ReactQuerySample";
import IconLoader from "components/common/IconLoader";
// import createTodo from "api/todoApi";

const SayHello = styled.h1`
  background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function App() {
  // const todo = {
  //   title: "test1",
  //   description: "test1",
  // };

  // createTodo(todo).then(res => console.log(res));

  return (
    <div className="App">
      <IconLoader />
      <GlobalStyle />
      <header className="App-header">
        <SayHello>Hello Pick Time</SayHello>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Intro />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/recoil-sample" element={<RecoilSample />} />
          <Route path="/react-query-sample" element={<ReactQuerySample />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
