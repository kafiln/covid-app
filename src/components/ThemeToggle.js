import React, { useContext } from 'react';
import { AppContext } from '../context';
import { CHANGE_THEME } from '../context/types';
import { Toggle } from './common';

function ThemeToggle({ byDefault }) {
  const { theme, dispatch } = useContext(AppContext);
  const handleChange = () => {
    console.log('Changing theme');
    dispatch({
      type: CHANGE_THEME,
    });
  };
  return <Toggle checked={theme === byDefault} onChange={handleChange} />;
}

export default ThemeToggle;
