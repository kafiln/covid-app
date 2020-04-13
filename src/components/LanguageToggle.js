import React, { useContext } from 'react';
import { AppContext, Types } from '../context';
import { Toggle } from './common';

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: Types.CHANGE_LANGUAGE,
    });
  };
  return (
    <div>
      Français
      <Toggle checked={lang === 'ar-ma'} onChange={handleChange} />
      Arabic
    </div>
  );
}

export default LanguageToggle;
