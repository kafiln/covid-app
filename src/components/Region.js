import React from 'react';
import { FormattedMessage } from 'react-intl';
import KEYS from '../i18n/messages/keys';

function Region({ region: { name, value } }) {
  name = 'REGIONS_' + name.replace(/\s/g, '').replace(/[-]/g, '');
  return (
    <div className="region">
      <FormattedMessage id={KEYS[`${name}`]}></FormattedMessage>:{value}
    </div>
  );
}

export default Region;
