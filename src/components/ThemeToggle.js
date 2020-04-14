import React, { useContext } from 'react';
import { AppContext, Types } from '../context';
import { Toggle } from './common';

function ThemeToggle({ byDefault }) {
  const { theme, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: Types.CHANGE_THEME,
    });
  };
  return <Toggle checked={theme === byDefault} onChange={handleChange} />;
}

export default ThemeToggle;
