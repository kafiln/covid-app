import React, { useState } from 'react';
import { Toggle } from './common';

function LanguageToggle() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      Français
      <Toggle checked={checked} onChange={handleChange} />
      Arabic
    </div>
  );
}

export default LanguageToggle;
