import { createContext } from 'react';
import LOCALES from '../i18n/locales';

export const initialState = {
  lang: localStorage.getItem('lang') || 'fr-fr',
  theme: localStorage.getItem('theme') || 'light',
  languages: Object.values(LOCALES),
};

export default createContext(initialState);
