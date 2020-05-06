import React from 'react';
import SocialItem from './SocialItem';

//TODO: Put this in a config file
const socials = [
  { name: 'github', url: 'https://github.com/kafiil' },
  { name: 'twitter', url: 'https://twitter.com/Kaaafiiil' },
  { name: 'linkedin', url: 'https://linkedin.com/in/nkafil/' },
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
