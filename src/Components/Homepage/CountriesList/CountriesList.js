import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './CountriesList.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const CountriesList = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={classes.CountriesList}>
      CountriesList
    </section>
  </IntlProvider>
);


export default CountriesList;

CountriesList.propTypes = {
  language: PropTypes.string.isRequired,
};
