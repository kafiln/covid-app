import React, { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getData } from './api';
import { Statistics, Title } from './components';
import { Spinner } from './components/common';
import { Layout } from './components/layout';
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
          <Layout>
            <Title />
            {data ? <Statistics data={data} /> : <Spinner />}
          </Layout>
        </ThemeProvider>
      </I18nProvider>
    </AppContext.Provider>
  );
}

export default App;
