import React, { useEffect, useState } from 'react';
import { getData } from '../src/api';
import { Regions, Statistics, Title } from '../src/components';
import { Spinner } from '../src/components/common';

function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Get the data from the url
    //TODO: try to use react-queries
    getData().then((data) => setData(data));
  }, []);
  return (
    <>
      {data && <Title lastUpdate={data.lastUpdate} />}
      {data ? <Statistics data={data} /> : <Spinner />}
      {data && data.regions && <Regions regions={data.regions}></Regions>}
    </>
  );
}

export default Index;
