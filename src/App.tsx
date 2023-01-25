import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./router";
import "./assets/scss/main.scss";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

// props 전역 스타일
const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.textColor}
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
