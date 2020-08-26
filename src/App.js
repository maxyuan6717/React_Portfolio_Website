import React from "react";
import PageContainer from "./components/PageContainer";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/UseDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <WindowDimensionsProvider>
          <div id="base">
            <PageContainer theme={theme} toggleTheme={themeToggler} />
          </div>
        </WindowDimensionsProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
