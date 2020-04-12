import React from 'react';
import { Region } from '.';
function Regions({ regions }) {
  return (
    <>
      <h1>Stats by regions</h1>
      <div className="regions">
        {regions.map((region, index) => (
          <Region key={index} region={region} />
        ))}
      </div>
    </>
  );
}

export default Regions;
