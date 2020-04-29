import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const getFaIcon = (name) => {
  switch (name) {
    case 'github':
      return <FaGithub size="2em" />;
    case 'twitter':
      return <FaTwitter size="2em" />;
    case 'linkedin':
      return <FaLinkedin size="2em" />;
    case 'mail':
      return <MdEmail size="2em" />;
    case 'blog':
      return <FaHome size="2em" />;
    default:
      return <FaHome size="2em" />;
  }
};

function SocialItem({ social: { name, url } }) {
  return (
    <div className="flex-grow-1 mx-2 my-1  rounded-full p-1">
      <a rel="noopener noreferrer" target="_blank" href={url}>
        <span className="opacity-0">{name}</span>
        {getFaIcon(name)}
      </a>
    </div>
  );
}

export default SocialItem;
