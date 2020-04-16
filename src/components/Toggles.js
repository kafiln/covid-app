import React from 'react';
import styled from 'styled-components';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const NoDirectionChange = styled.div`
  direction: ltr;
`;

function Toggles() {
  return (
    <NoDirectionChange className="flex items-center justify-between bg-aqua">
      <LanguageToggle />
      <ThemeToggle byDefault="light" />
    </NoDirectionChange>
  );
}

export default Toggles;
