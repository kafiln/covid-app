import { CHANGE_LANGUAGE, CHANGE_THEME } from './types';

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const lang = state.lang === 'fr-fr' ? 'ar-ma' : 'fr-fr';
      localStorage.setItem('lang', lang);
      return {
        state,
        lang,
      };

    case CHANGE_THEME:
      const theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      return {
        state,
        theme,
      };

    default:
      return state;
  }
};
