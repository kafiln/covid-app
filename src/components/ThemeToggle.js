import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppContext, Types } from '../context';
import { KEYS } from '../i18n';
import { Toggle } from './common';

function ThemeToggle() {
  const { theme, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: Types.CHANGE_THEME,
    });
  };
  return (
    <div>
      <FormattedMessage id={KEYS.DARK}></FormattedMessage>
      <Toggle checked={theme === 'light'} onChange={handleChange} />
      <FormattedMessage id={KEYS.LIGHT}></FormattedMessage>
    </div>
  );
}

export default ThemeToggle;
