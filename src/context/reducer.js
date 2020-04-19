import Types from './types';
const { CHANGE_LANGUAGE, CHANGE_THEME } = Types;

const THEMES = ['dark', 'light'];

const toggleValue = (value, choices) => {
  const index = choices.indexOf(value);
  return choices[Number(!index)];
};

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const lang = action.payload;
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
