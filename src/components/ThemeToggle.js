import React, { useContext } from 'react';
import { AppContext, Types } from '../context';
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
      Dark
      <Toggle checked={theme === 'light'} onChange={handleChange} />
      Light
    </div>
  );
}

export default ThemeToggle;
