import React from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';
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
      <h2 className="pb-2 text-2xl text-gray-600">
        <FormattedMessage
          id={KEYS.LAST_UPDATED}
          values={{
            day: (
              <FormattedDate
                value={new Date(lastUpdate)}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
              />
            ),
            hour: <FormattedTime value={new Date(lastUpdate)}></FormattedTime>,
          }}
        ></FormattedMessage>
      </h2>
      <div className="flex flex-wrap -mx-2">
        <StatisticCard stats="confirmed" number={confirmed}></StatisticCard>
        <StatisticCard stats="recovered" number={recovered}></StatisticCard>
        <StatisticCard stats="deaths" number={deaths}></StatisticCard>
        <StatisticCard stats="negatives" number={negatives}></StatisticCard>
      </div>
    </article>
  );
}

export default Statistics;
