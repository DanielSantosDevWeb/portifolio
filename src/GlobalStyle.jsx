import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  background-color: aqua;
  
  }

  html {
    height: 1000px;
  }

  

`