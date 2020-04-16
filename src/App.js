import React, { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getData } from './api';
import { Main, Statistics, Title, Toggles } from './components';
import { Spinner } from './components/common';
import { AppContext, AppReducer, initialState } from './context';
import { I18nProvider } from './i18n';
import { dark, GlobalStyles, light } from './theme';
function App() {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Get the data from the url
    //TODO: try to use react-queries
    getData().then((data) => setData(data));
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <I18nProvider locale={state.lang}>
        <ThemeProvider theme={state.theme === 'light' ? light : dark}>
          <GlobalStyles></GlobalStyles>
          <Main>
            <Toggles></Toggles>
            <Title />
            {data ? <Statistics data={data} /> : <Spinner />}
          </Main>
        </ThemeProvider>
      </I18nProvider>
    </AppContext.Provider>
  );
}

export default App;
