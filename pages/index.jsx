import React from 'react';
import { getData } from '../src/api';
import { Regions, Statistics, Title } from '../src/components';

function Index({ data }) {
  return (
    <>
      <Title lastUpdate={data.lastUpdate} />
      <Statistics data={data} />
      {data.regions && <Regions regions={data.regions}></Regions>}
    </>
  );
}

export async function getStaticProps({}) {
  const data = await getData();
  return {
    props: {
      data,
    },
    unstable_revalidate: 1,
  };
}

export default Index;
