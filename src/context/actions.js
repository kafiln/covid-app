import { INITIAL_INIT, LANG, THEME } from './types';

export const initState = (dispatch) => {
  const theme = localStorage.getItem(THEME);
  const lang = localStorage.getItem(LANG);
  dispatch({
    type: INITIAL_INIT,
    payload: {
      theme,
      lang,
    },
  });
};
