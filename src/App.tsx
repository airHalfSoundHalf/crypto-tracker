import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./router";
import "./assets/scss/main.scss";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./theme";

// props 전역 스타일
const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.textColor}
}
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <button onClick={toggleDark}>Mode</button>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
