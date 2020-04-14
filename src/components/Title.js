import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import { KEYS } from '../i18n';

const Title = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`max-w-lg mx-auto p-6 flex flex-col bg-${theme.backgroundColor} rounded-lg shadow-sm`}
    >
      <h1 className="text-2xl mb-2">
        <span className="mr-1" role="img" aria-label="Virus">
          🦠
        </span>
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
      </h1>
      <p className="text-md">
        <FormattedMessage id={KEYS.SUBTITLE}></FormattedMessage>
      </p>
    </div>
  );
};

export default Title;
