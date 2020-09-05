import React from 'react';
import SocialItem from './SocialItem';

//TODO: Put this in a config file
const socials = [
  { name: 'github', url: 'https://github.com/kafiln' },
  { name: 'twitter', url: 'https://twitter.com/kafiiil' },
  { name: 'linkedin', url: 'https://linkedin.com/in/kafiln/' },
  // { name: 'blog', url: 'https://kafil.xyz' },
  // { name: 'mail', url: 'mailto:kafil.nasdami@gmail.com' },
];

function Footer() {
  return (
    <footer className="mt-4">
      {/* <h1 className="text-center">Contact</h1>
      <hr /> */}
      <div className="flex justify-center items-center">
        {socials.map((social, index) => (
          <SocialItem social={social} key={index}></SocialItem>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
