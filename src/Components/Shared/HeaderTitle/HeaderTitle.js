import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

// import BreadCrumb from '../Ui/Breadcrumb/Breadcrumb';

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
        <div className="row">
          <nav className={classes.BreadCrumb} aria-label="breadcrumb">
            <ol className={`breadcrumb ${classes.breadcrumb}`}>
              <li className={`breadcrumb-item ${classes.item}`}>
                <a href="/">
                  Accueil
                </a>
              </li>
              <li className={`breadcrumb-item active ${classes.active}`} aria-current="page">
                {`Fiche Curie - ${props.countryName}`}
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className={classes.title}>
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
