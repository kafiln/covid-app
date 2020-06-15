import { createContext } from 'react';
import { LIGHT } from './types';

export const initialState = {
  lang: 'fr-fr',
  theme: LIGHT,
};

export default createContext(initialState);
