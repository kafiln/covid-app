import React, { useContext } from 'react';
import { MdLanguage } from 'react-icons/md';
import { AppContext, Types } from '../context';

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const handleChange = () => {
    dispatch({
      type: Types.CHANGE_LANGUAGE,
    });
  };
  return (
    <div
      className="flex p-0 border rounded border-white-500 .justify-center	 items-center"
      onClick={handleChange}
    >
      <p className="text-sm ml-2">
        {lang === 'ar-ma' ? 'Français' : 'العربية'}
      </p>
      <MdLanguage className="mx-1" size="2em" />
    </div>
  );
}

export default LanguageToggle;
