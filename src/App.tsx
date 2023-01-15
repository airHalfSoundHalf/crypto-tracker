import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./router";
import "./assets/scss/main.scss";

// props 전역 스타일
const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.textColor}
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
