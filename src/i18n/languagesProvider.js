import React from 'react';
import LOCALES from './locales';

const LanguagesProvider = ({ children }) => (
  <LanguagesContext.Provider
    value={{
      languages: Object.values(LOCALES),
    }}
  >
    {children}
  </LanguagesContext.Provider>
);

export const LanguagesContext = React.createContext({});
export default LanguagesProvider;
