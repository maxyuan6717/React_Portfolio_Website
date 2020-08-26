import React from "react";
import PageContainer from "./components/PageContainer";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";

function App() {
  return (
    <WindowDimensionsProvider>
      <div id="base">
        <PageContainer />
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;
