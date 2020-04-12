import React from 'react';
import Switch from 'react-switch';

function Toggle({ checked, onChange, color }) {
  return (
    <div>
      <Switch
        checkedIcon={false}
        uncheckedIcon={false}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default Toggle;
