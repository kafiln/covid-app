import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from 'styled-components';
import Confirmed from '../assets/img/confirmed.svg';
import Deaths from '../assets/img/deaths.svg';
import Negatives from '../assets/img/negatives.svg';
import Recovered from '../assets/img/recovered.svg';
import { KEYS } from '../i18n';

//TODO: Search for a better way to achieve this
const stringToReactSVG = (name) => {
  switch (name) {
    case 'confirmed':
      return <Confirmed />;
    case 'deaths':
      return <Deaths />;
    case 'negatives':
      return <Negatives />;
    case 'recovered':
      return <Recovered />;
    default:
      return <Negatives />;
  }
};

const withStatus = (name) => `STATUS_${name.toUpperCase()}`;

function StatisticCard({ field, stats, inverted }) {
  const theme = useTheme();
  const { actual, old, percentage } = field;
  const diff = actual - old;
  const isPositif = Math.sign(diff) * (inverted ? 1 : -1);
  return (
    <div className={`w-full my-2 sm:w-1/2  flex-grow`}>
      <div
        className={`mx-2 py-4 px-3 h-full ${theme.statisticCard.container} shadow-lg rounded-lg flex`}
      >
        <div className="flex-grow">
          <h2 className="text-1xl uppercase">
            <FormattedMessage id={KEYS[withStatus(stats)]}></FormattedMessage>
          </h2>
          <div className="flex items-center">
            <div>
              <h3 className="text-4xl font-bold">{actual}</h3>
            </div>
            <div
              className={`mx-3 ${
                isPositif >= 0 ? 'bg-green-600' : 'bg-red-600'
              } p-1 rounded text-sm text-white font-bold`}
            >
              {diff > 0 ? '+' : ''}
              {diff}
            </div>
          </div>
          <p>
            <FormattedMessage
              id={KEYS.INCREASE_FROM_YESTERDAY}
              values={{
                number: old,
                percentage: `${percentage}%`,
                type: <FormattedMessage id={KEYS.INCREASE} />,
              }}
            ></FormattedMessage>
          </p>
        </div>
        {stringToReactSVG(stats)}
      </div>
    </div>
  );
}

export default StatisticCard;
