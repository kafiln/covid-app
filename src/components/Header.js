import React from 'react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <LanguageToggle />
      <ThemeToggle byDefault="light" />
    </header>
  );
}

export default Header;
