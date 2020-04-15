import React from 'react';
import { StatisticCard } from '.';

function Statistics({
  data: { lastUpdate, recovered, deaths, confirmed, negatives },
}) {
  return (
    <div className="mt-2 flex flex-wrap overflow-hidden">
      {/* <h1 className="text">
        <FormattedMessage id={KEYS.STATISTICS}></FormattedMessage>
      </h1>
      <h2>
        <FormattedMessage id={KEYS.LAST_UPDATED}></FormattedMessage>
        <FormattedDate value={new Date(lastUpdate)}></FormattedDate>
      </h2> */}
      <StatisticCard stats="CONFIRMED" number={confirmed}></StatisticCard>
      <StatisticCard stats="RECOVERED" number={recovered}></StatisticCard>
      <StatisticCard stats="DEATHS" number={deaths}></StatisticCard>
      <StatisticCard stats="NEGATIVES" number={negatives}></StatisticCard>
    </div>
  );
}

export default Statistics;
