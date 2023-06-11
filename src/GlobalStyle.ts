import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  ${({ theme }) => ({
    color: theme.colors.SG00 + "de",
    backgroundColor: theme.colors.SG02,
  })}

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a { 
  ${({ theme }) => ({
    color: theme.colors.SG00 + "de",
  })}
  text-decoration: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;

  place-items: center;
  text-align: center;
  width: inherit;
  min-width: 320px;
  min-height: 100vh;

  margin: 0 auto;

  overflow-x: hidden;
   
  #root {
    width: 100%;
  }
}

button {
  ${({ theme }) => ({
    color: theme.colors.SG00 + "de",
  })}
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

`;
export default GlobalStyle;