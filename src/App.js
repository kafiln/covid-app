import React, { useEffect, useReducer, useState } from 'react';
import { getData } from './api';
import { Regions, Statistics, Title, Toggles } from './components';
import { Spinner } from './components/common';
import { AppContext, AppReducer, initialState } from './context';

function App() {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Get the data from the url
    getData().then((data) => setData(data));
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <Title />
      <Toggles />

      {data ? (
        <>
          <Statistics data={data} />
          {/* //TODO: Toggle regions */}
          {data.regions && <Regions regions={data.regions} />}
        </>
      ) : (
        <Spinner />
      )}
    </AppContext.Provider>
  );
}

export default App;
