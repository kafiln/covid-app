import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Switch from 'react-switch';

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
        aria-label="toggle between dark and light theme"
        aria-checked={checked}
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
