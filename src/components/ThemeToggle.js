import React, { useState } from 'react';
import { Toggle } from './common';

function ThemeToggle() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      Dark
      <Toggle checked={checked} onChange={handleChange} />
      Light
    </div>
  );
}

export default ThemeToggle;
