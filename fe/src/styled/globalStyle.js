import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
    background-color: #36393F;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    padding: 10px 16px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  ul,
  li {
    list-style: none;
  }

  input, form {
    border:none;
  }
  input,button{
    outline: none;
  }

`;
