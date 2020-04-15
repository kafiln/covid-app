import Types from './types';
const { CHANGE_LANGUAGE, CHANGE_THEME } = Types;

const LANGUAGES = ['ar-ma', 'fr-fr'];
const THEMES = ['dark', 'light'];

const toggleValue = (value, choices) => {
  const index = choices.indexOf(value);
  return choices[Number(!index)];
};

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const lang = toggleValue(state.lang, LANGUAGES);
      localStorage.setItem('lang', lang);
      return {
        ...state,
        lang,
      };

    case CHANGE_THEME:
      const theme = toggleValue(state.theme, THEMES);
      localStorage.setItem('theme', theme);
      return {
        ...state,
        theme,
      };

    default:
      return state;
  }
};
