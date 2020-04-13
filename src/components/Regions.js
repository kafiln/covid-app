import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Region } from '.';
import { KEYS } from '../i18n';
function Regions({ regions }) {
  return (
    <>
      <h1>
        <FormattedMessage id={KEYS.STATISTICS_BY_REGION}></FormattedMessage>
      </h1>
      <div className="regions">
        {regions.map((region, index) => (
          <Region key={index} region={region} />
        ))}
      </div>
    </>
  );
}

export default Regions;
