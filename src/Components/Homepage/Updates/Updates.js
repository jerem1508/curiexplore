import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './Updates.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const Updates = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={classes.Updates}>
      Updates
    </section>
  </IntlProvider>
);


export default Updates;

Updates.propTypes = {
  language: PropTypes.string.isRequired,
};
