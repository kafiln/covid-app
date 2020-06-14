import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all .5s ease;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
}

`;
