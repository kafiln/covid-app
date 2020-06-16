import React from 'react';
import { LIGHT } from '../context/types';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <LanguageToggle />
      <ThemeToggle defaultValue={LIGHT} />
    </header>
  );
}
export default Header;
