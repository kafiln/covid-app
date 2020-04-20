import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from 'styled-components';

//TODO: Find a good spot fot this button
export default function ViewOnGithub() {
  const theme = useTheme();
  return (
    <div
      className={`${theme.githubButton} border flex items-center justify-center font-bold px-1 py-2 rounded w-1/3`}
    >
      <a
        target="_black"
        className="mx-2 "
        href="https://github.com/kafiil/covid-app"
      >
        View on Github
      </a>
      <FaGithub size="2rem"></FaGithub>
    </div>
  );
}
