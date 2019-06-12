import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './Maps.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const Maps = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={classes.Maps}>
      Maps
    </section>
  </IntlProvider>
);


export default Maps;

Maps.propTypes = {
  language: PropTypes.string.isRequired,
};
