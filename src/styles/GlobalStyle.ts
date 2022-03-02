import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  margin: 0;
  padding: 0; 
  border: 0;
}

body {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

`;

export default GlobalStyle;
