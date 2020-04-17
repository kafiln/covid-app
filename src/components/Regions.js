import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Region } from '.';
import { KEYS } from '../i18n';
function Regions({ regions }) {
  return (
    <article className="py-4">
      <h1 className="py-2 font-bold text-3xl">
        <FormattedMessage id={KEYS.STATISTICS_BY_REGION}></FormattedMessage>
      </h1>
      <div className="regions">
        {regions.map((region, index) => (
          <Region key={index} region={region} />
        ))}
      </div>
    </article>
  );
}

export default Regions;
