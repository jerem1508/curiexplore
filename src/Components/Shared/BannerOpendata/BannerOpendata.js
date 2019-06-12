import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './BannerOpendata.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const BannerOpendata = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={classes.BannerOpendata}>
      BannerOpendata
    </section>
  </IntlProvider>
);


export default BannerOpendata;

BannerOpendata.propTypes = {
  language: PropTypes.string.isRequired,
};
