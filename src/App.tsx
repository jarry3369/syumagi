import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import theme from "@constants/theme";
import ConfigRouters from "@/ConfigRouters";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ConfigRouters />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
