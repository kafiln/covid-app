import React from 'react';

function Region({ region: { name, value } }) {
  return (
    <div className="region">
      {name}:{value}
    </div>
  );
}

export default Region;
