import React from 'react';
import { StatisticCard } from '.';

function Statistics({
  data: { lastUpdate, recovered, deaths, confirmed, negatives },
}) {
  return (
    <div className="flex flex-wrap -mx-2">
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
