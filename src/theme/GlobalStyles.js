import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
}
`;
