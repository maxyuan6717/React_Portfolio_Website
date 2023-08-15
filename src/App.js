import React from "react";
import { CxmmunalSupport } from "./components/CxmmunalSupport";
import { CxmmunalPrivacy } from "./components/CxmmunalPrivacy";
import { CxmmunalEULA } from "./components/CxmmunalEULA";
import PageContainer from "./components/PageContainer";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/UseDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GA);

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
            <Router>
              <Switch>
                <Route exact path="/zoom">
                  {() => {
                    window.location.href = "https://yale.zoom.us/j/2459116717";
                    return <div />;
                  }}
                </Route>
                <Route exact path="/cxmmunal">
                  <CxmmunalSupport />
                </Route>
                <Route exact path="/cxmmunal-privacy">
                  <CxmmunalPrivacy />
                </Route>
                <Route exact path="/cxmmunal-eula">
                  <CxmmunalEULA />
                </Route>
                <Route path="/">
                  <PageContainer theme={theme} toggleTheme={themeToggler} />
                </Route>
              </Switch>
            </Router>
          </div>
        </WindowDimensionsProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
