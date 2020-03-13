import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './HeaderTitle.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const HeaderTitle = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={classes.HeaderTitle}>
      <div className="container">
        <div className={`row ${classes.Content}`}>
          <div className="col">
            <nav className={classes.BreadCrumb} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">
                    Accueil
                  </a>
                </li>
                {
                  (props.countryName)
                    ? (
                      <li className={`breadcrumb-item ${classes.itemActive}`} aria-current="page">
                        {`Fiche Curie - ${props.countryName}`}
                      </li>
                    ) : null
                }
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className={classes.Title}>
            {props.countryName}
          </div>
        </div>
      </div>
    </section>
  </IntlProvider>
);

export default HeaderTitle;

HeaderTitle.propTypes = {
  language: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};
