import { createContext } from 'react';

export const initialState = {
  lang: localStorage.getItem('lang') || 'fr-fr',
  theme: localStorage.getItem('theme') || 'light',
};

export default createContext(initialState);
