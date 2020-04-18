import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StatisticCard } from '.';
import { KEYS } from '../i18n';

function Statistics({
  data: { lastUpdate, recovered, deaths, confirmed, negatives },
}) {
  return (
    <article className="py-4">
      <h1 className="py-2 font-bold text-3xl">
        <FormattedMessage id={KEYS.STATISTICS}></FormattedMessage>
      </h1>
      {/* <LastUpdate lastUpdate={lastUpdate}></LastUpdate> */}
      <div className="flex flex-wrap -mx-2">
        <StatisticCard stats="confirmed" field={confirmed}></StatisticCard>
        <StatisticCard stats="recovered" field={recovered}></StatisticCard>
        <StatisticCard stats="deaths" field={deaths}></StatisticCard>
        <StatisticCard stats="negatives" field={negatives}></StatisticCard>
      </div>
    </article>
  );
}

export default Statistics;
