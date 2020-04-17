import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';
import LastUpdate from './LastUpdate';

const Title = ({ lastUpdate }) => {
  return (
    <div className="py-4">
      <h1 className="text-4xl mb-2  font-bold">
        <FormattedMessage id={KEYS.TITLE}></FormattedMessage>
      </h1>
      <LastUpdate lastUpdate={lastUpdate}></LastUpdate>
    </div>
  );
};

export default Title;
