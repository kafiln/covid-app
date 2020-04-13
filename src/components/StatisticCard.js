import React from 'react';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';

function StatisticCard({ number, stats }) {
  return (
    <div>
      <FormattedMessage id={KEYS[`STATUS_${stats}`]}></FormattedMessage>:{' '}
      {number}
    </div>
  );
}

export default StatisticCard;
