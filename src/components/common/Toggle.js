import React from 'react';
import Switch from 'react-switch';

import { FaMoon, FaSun } from 'react-icons/fa';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

function Toggle({ checked, onChange }) {
  return (
    <div>
      <Switch
        onColor={'#000'}
        offColor={'#000'}
        width={64}
        height={32}
        uncheckedIcon={
          <div style={{ ...styles }}>
            <FaSun color="yellow" size="1.5em" />
          </div>
        }
        checkedIcon={
          <div style={{ ...styles }}>
            <FaMoon color="#f1c40f" size="1.5em" />
          </div>
        }
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default Toggle;
