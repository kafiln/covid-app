import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { AppContext } from '../context';

const Global = createGlobalStyle`
*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
  transition: all .5s ease;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  direction: ${(props) => (props.lang === 'ar-ma' ? 'rtl' : 'ltr')};
  overflow: hidden;
}
`;

function GlobalStylesWithContext(props) {
  const { lang } = useContext(AppContext);
  return <Global {...props} lang={lang}></Global>;
}

export default GlobalStylesWithContext;
