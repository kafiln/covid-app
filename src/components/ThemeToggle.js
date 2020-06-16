import React, { useContext } from 'react';
import { AppContext } from '../context';
import { CHANGE_THEME } from '../context/types';
import { Toggle } from './common';

function ThemeToggle({ defaultValue }) {
  const { theme, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: CHANGE_THEME,
    });
  };
  return <Toggle checked={theme === defaultValue} onChange={handleChange} />;
}

export default ThemeToggle;
