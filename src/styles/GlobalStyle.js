import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #1A1A1A;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
    margin: 0;
  }

  button {
    background-color:#009dff;
    color: #000000;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 9px;
    transition: background-color 0.3s ease;
     margin-top: 9px; 
  }

  button:hover {
    background-color: #0916d4;
    color: white;
  }
`;

export default GlobalStyle;
