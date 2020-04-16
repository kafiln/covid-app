import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import { KEYS } from '../i18n';

function StatisticCard({ number, stats }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`w-full my-2 sm:w-1/2 md:w-1/3 lg:w-1/4 flex-grow`}>
      <div
        className={`mx-2 py-6  ${theme.statisticCard.container} text-center font-bold  shadow-lg rounded-lg`}
      >
        <h2 className="text-2xl">
          <FormattedMessage id={KEYS[`STATUS_${stats}`]}></FormattedMessage>
        </h2>
        <h3 className="text-4xl ">{number}</h3>
      </div>
    </div>
  );
}

export default StatisticCard;
