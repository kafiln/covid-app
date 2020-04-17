import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';

const Title = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl mb-2  font-bold">
        <span className="mx-1" role="img" aria-label="Virus">
          🦠
        </span>
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
      </h1>
      {/* <p className="text-lg text-gray-500">
        <FormattedMessage id={KEYS.SUBTITLE}></FormattedMessage>
      </p> */}
    </div>
  );
};

export default Title;
