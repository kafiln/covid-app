import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';

const Title = () => {
  return (
    <div className="py-8">
      <h1 className="text-2xl mb-2  font-bold">
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
        {/* <span className="" role="img" aria-label="Virus">
          🦠
        </span> */}
      </h1>
      <p className="text-sm text-gray-500">
        <FormattedMessage id={KEYS.SUBTITLE}></FormattedMessage>
      </p>
    </div>
  );
};

export default Title;
