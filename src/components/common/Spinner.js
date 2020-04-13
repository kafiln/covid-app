import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled, { keyframes } from 'styled-components';
import { KEYS } from '../../i18n';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  flex: 1;
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: ${(props) =>
      `${props.theme.color} transparent ${props.theme.color} transparent`};
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Wrapper)`
  height: 50vh;
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
        <h4>
          <FormattedMessage id={KEYS.SPINNER_LOADING}></FormattedMessage>
        </h4>
      </Wrapper>
    </Container>
  );
};
