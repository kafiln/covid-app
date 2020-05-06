import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';
import LastUpdate from './LastUpdate';

const Title = ({ lastUpdate }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
      </h1>
      <LastUpdate lastUpdate={lastUpdate}></LastUpdate>
    </div>
  );
};

export default Title;
