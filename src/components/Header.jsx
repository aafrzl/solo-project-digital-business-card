import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ProfilePhoto from '../assets/afrizal.png';

export default function Header() {
  return (
    <>
      <img
        className="profile-img"
        src={ProfilePhoto}
        alt="Profile Picture"
      />
      <header className="header">
        <h1 className="header__name">Afrizal Mufriz Fouji</h1>
        <h3 className="header__job">Frontend Developer 👩🏻‍💻</h3>
        <a
          className="header__link"
          href="https://aafrzl.my.id/"
          target="_blank"
          rel="noreferrer">
          aafrzl.my.id
        </a>
        <div className="header__buttons">
          <a
            href="mailto:afrizal.mufriz25@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="header__buttons-email">
            <FontAwesomeIcon
              className="icon-email"
              icon={faEnvelope}
            />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/afrizal-mufriz-fouji-8a930111b"
            target="_blank"
            rel="noreferrer"
            className="header__buttons-linkedin">
            <FontAwesomeIcon
              className="icon-linkedin"
              icon={faLinkedin}
            />
            LinkedIn
          </a>
        </div>
      </header>
    </>
  );
}
