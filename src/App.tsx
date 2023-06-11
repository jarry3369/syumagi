import { Suspense } from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import theme from "@constants/theme";
import ConfigRouters from "@/ConfigRouters";

import GlobalStyle from "./GlobalStyle";
import { SWRConfig } from "swr/_internal";

import { Loading } from "@/pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWRConfig value={{ suspense: true }}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <ConfigRouters />
          </Suspense>
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
