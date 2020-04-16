import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context';

const Wrapper = styled.main`
  direction: ${(props) => (props.lang === 'ar-ma' ? 'rtl' : 'ltr')};
  flex-grow: 1;
`;

function Main({ children }) {
  const context = useContext(AppContext);
  return <Wrapper lang={context.lang}>{children}</Wrapper>;
}

export default Main;
