import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/devmanoelrochaneto/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/noel-srocha"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/manoel.rocha93/"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
