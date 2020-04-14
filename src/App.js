import React, { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getData } from './api';
import {
  Regions,
  Statistics,
  Title,
  ThemeToggle,
  LanguageToggle,
} from './components';
import { Spinner } from './components/common';
import { AppContext, AppReducer, initialState } from './context';
import { I18nProvider } from './i18n';
import { dark, GlobalStyles, light } from './theme';
function App() {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Get the data from the url
    getData().then((data) => setData(data));
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <I18nProvider locale={state.lang}>
        <ThemeProvider theme={state.theme === 'light' ? light : dark}>
          <GlobalStyles></GlobalStyles>
          <Title />
          <LanguageToggle />
          <ThemeToggle byDefault="light" />
          {data ? (
            <>
              <Statistics data={data} />
              {/* //TODO: Toggle regions */}
              {data.regions && <Regions regions={data.regions} />}
            </>
          ) : (
            <Spinner />
          )}
        </ThemeProvider>
      </I18nProvider>
    </AppContext.Provider>
  );
}

export default App;
