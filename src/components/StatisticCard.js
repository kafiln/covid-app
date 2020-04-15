import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import { KEYS } from '../i18n';

function StatisticCard({ number, stats }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`text-center flex-1 w-1/2 sm:w-1/3 md:w-1/4 p-4 shadow-lg m-1 sm:m-2 rounded-lg ${theme.statisticCard.container}`}
    >
      <h2 className="">
        <FormattedMessage id={KEYS[`STATUS_${stats}`]}></FormattedMessage>
      </h2>
      <h3 className="text-4xl font-bold">{number}</h3>
    </div>
  );
}

export default StatisticCard;
