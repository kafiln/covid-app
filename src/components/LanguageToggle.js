import React, { useContext } from 'react';
import { AppContext, Types } from '../context';

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: Types.CHANGE_LANGUAGE,
    });
  };
  return (
    <button className="p-1 mb-2 border border-white-500" onClick={handleChange}>
      <p>{lang === 'ar-ma' ? 'Français' : 'العربية'}</p>
    </button>
  );
}

export default LanguageToggle;
