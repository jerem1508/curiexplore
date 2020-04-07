import React from 'react';

import logo from '../svg/logo-ministere.svg';

/* SCSS */
import classes from './Footer.scss';

const Footer = () => (
  <section className={classes.Footer}>
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={logo}
            alt="Logo MESRI"
            className={classes.Logo}
          />
        </div>
        <div className="col">
          <ul>
            <li>
              <a href="/opendata">
                Données ouvertes & API
              </a>
            </li>
            <li>
              Glossaire
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              Accessiibilité
            </li>
            <li>
              <a href="/mentions-legales">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
