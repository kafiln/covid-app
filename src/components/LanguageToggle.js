import React, { useContext } from 'react';
import { AppContext } from '../context';
import { CHANGE_LANGUAGE } from '../context/types';
import { Languages as LOCALES } from '../i18n';

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const languages = Object.values(LOCALES);
  const displayLanguages = languages.filter((e) => e.id !== lang);

  const handleChange = (langId) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: langId,
    });
  };
  return (
    <ul className="flex">
      {displayLanguages.map((lang) => (
        <li
          className="cursor-pointer mx-2 hover:underline font-bold"
          key={lang.id}
          onClick={() => handleChange(lang.id)}
        >
          {lang.displayName}
        </li>
      ))}
    </ul>
  );
}

export default LanguageToggle;
