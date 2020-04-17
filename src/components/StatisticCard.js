import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import confirmed from '../assets/img/confirmed.svg';
import deaths from '../assets/img/deaths.svg';
import negatives from '../assets/img/negatives.svg';
import recovered from '../assets/img/recovered.svg';
import { KEYS } from '../i18n';

const stringToImg = (name) => {
  switch (name) {
    case 'confirmed':
      return confirmed;
    case 'deaths':
      return deaths;
    case 'negatives':
      return negatives;
    case 'recovered':
      return recovered;
    default:
      break;
  }
};

function StatisticCard({ number, stats }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`w-full my-2 sm:w-1/2  flex-grow`}>
      <div
        className={`mx-2 py-6 px-3  ${theme.statisticCard.container} shadow-lg rounded-lg flex`}
      >
        <div className="flex-grow">
          <h2 className="text-1xl uppercase">
            <FormattedMessage
              id={KEYS[`STATUS_${stats.toUpperCase()}`]}
            ></FormattedMessage>
          </h2>
          <h3 className="text-4xl font-bold">{number}</h3>
          <p>
            <FormattedMessage
              id={KEYS.INCREASE_FROM_YESTERDAY}
              values={{
                number: 23,
                percentage: '32%',
                type: <FormattedMessage id={KEYS.INCREASE} />,
              }}
            ></FormattedMessage>
          </p>
        </div>
        <div>
          <img src={stringToImg(stats)} alt={stats} />
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
