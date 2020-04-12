import React, { useEffect, useState } from 'react';
import { Regions, Statistics, Title, Toggles } from './components';
import { Spinner } from './components/common';

const getData = () =>
  fetch(process.env.REACT_APP_API_URL).then((res) => res.json());

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Get the data from the url
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
