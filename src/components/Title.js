import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';

const Title = () => {
  return (
    <>
      <h1>
        <span role="img" aria-label="Virus">
          🦠
        </span>
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
      </h1>
      <p>
        {' '}
        <FormattedMessage id={KEYS.SUBTITLE}></FormattedMessage>
      </p>
    </>
  );
};

export default Title;
