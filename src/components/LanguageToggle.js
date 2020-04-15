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
      className="cursor-pointer w-24 flex p-0 border rounded border-white-500 justify-between	 items-center"
      onClick={handleChange}
    >
      <p className="text-sm ml-2 flex-1">
        {lang === 'ar-ma' ? 'Français' : 'العربية'}
      </p>
      <MdLanguage className="mx-1" size="1.5em" />
    </div>
  );
}

export default LanguageToggle;
