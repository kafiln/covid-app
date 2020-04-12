import React from 'react';
import { StatisticCard } from '.';
function Statistics({
  data: { lastUpdate, recovered, deaths, confirmed, negatives },
}) {
  return (
    <div className="cards-container">
      <h1>Statistics</h1>
      <h2>From the last update on {new Date(lastUpdate).toDateString()}</h2>
      <StatisticCard
        word="recovered"
        number={recovered}
        image="recovered"
      ></StatisticCard>
      <StatisticCard
        word="deaths"
        image="deaths"
        number={deaths}
      ></StatisticCard>
      <StatisticCard
        word="confirmed"
        image="confirmed"
        number={confirmed}
      ></StatisticCard>
      <StatisticCard
        word="negatives"
        image="negatives"
        number={negatives}
      ></StatisticCard>
    </div>
  );
}

export default Statistics;
