import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;    
    }
    
  body {
      max-width: 90rem;
      padding: 0;
      color: black;
      font-family: sans-serif;
      margin: 0 auto;
  }
  
  main {
      color: #333;
  }
`;
