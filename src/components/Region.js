import React from 'react';
import { FormattedMessage } from 'react-intl';
import KEYS from '../i18n/messages/keys';

// TODO: Extract it in utils
const stringTovariableName = (prefix, name) =>
  prefix + name.replace(/\s/g, '').replace(/[-]/g, '');

function Region({ region: { name, value } }) {
  return (
    <div className="region">
      <FormattedMessage
        id={KEYS[`${stringTovariableName('REGIONS_', name)}`]}
      ></FormattedMessage>
      :{value}
    </div>
  );
}

export default Region;
