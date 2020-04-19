import React, { useContext } from 'react';
import { MdLanguage } from 'react-icons/md';
import { AppContext, Types } from '../context';
import LOCALES from '../i18n/locales';
import styled from 'styled-components';

const Dropdown = styled.div`
  font: 400 16px system-ui;
  &:hover {
    .dropdown-menu {
      display: block;
    }
  }
`;

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const languages = Object.values(LOCALES);

  //getting the current language displayName based on it's ID
  const currentLang =
    languages.filter((l) => l.id === lang)[0].displayName || 'fr-fr';

  const handleChange = (langID) => {
    dispatch({
      type: Types.CHANGE_LANGUAGE,
      payload: langID,
    });
  };
  return (
    <Dropdown className="dropdown inline-block relative ">
      <button className="bg-gray-300  font-semibold py-2 px-4 rounded inline-flex items-center outline-none">
        <span className="mr-1">{currentLang}</span>
        <MdLanguage className="mx-1" size="1.5em" />
      </button>
      <ul className="dropdown-menu absolute hidden  pt-1 outline-none">
        {languages &&
          languages.map((language) => (
            <li
              onClick={(_) => handleChange(language.id)}
              key={language.id}
              className=""
            >
              <span className="cursor-pointer rounded-b bg-gray-300 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                {language.displayName}
              </span>
            </li>
          ))}
      </ul>
    </Dropdown>
  );
}

export default LanguageToggle;
