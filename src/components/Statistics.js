import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { StatisticCard } from '.';
import { KEYS } from '../i18n';

function Statistics({
  data: { lastUpdate, recovered, deaths, confirmed, negatives },
}) {
  return (
    <div>
      <h1>
        <FormattedMessage id={KEYS.STATISTICS}></FormattedMessage>
      </h1>
      <h2>
        <FormattedMessage id={KEYS.LAST_UPDATED}></FormattedMessage>
        <FormattedDate value={new Date(lastUpdate)}></FormattedDate>
      </h2>
      <StatisticCard stats="CONFIRMED" number={confirmed}></StatisticCard>
      <StatisticCard stats="RECOVERED" number={recovered}></StatisticCard>
      <StatisticCard stats="DEATHS" number={deaths}></StatisticCard>
      <StatisticCard stats="NEGATIVES" number={negatives}></StatisticCard>
    </div>
  );
}

export default Statistics;
