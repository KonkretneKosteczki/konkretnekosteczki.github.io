import React from 'react';
import UserBadge from "./components/badge";
import {ThemeProvider} from "@emotion/react";
import {MainTheme} from "./themes/main.theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={MainTheme}>
        <header className="App-header">
          <UserBadge/>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
