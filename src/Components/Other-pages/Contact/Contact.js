import React from 'react';
import PropTypes from 'prop-types';
/* import ReCAPTCHA from 'react-google-recaptcha'; */

import CardToPage from '../../Shared/CardWithButton/CardToPage';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import FormContact from './FormContact/FormContact';

/* SCSS */
import classes from './Contact.scss';


/**
 * Contact
 * Url : /contact
 * Description : Page du formulaire de contact scanR
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
 */

const Contact = props => (
  <div className={`container-fluid ${classes.Contact}`}>
    <Header
      language={props.language}
      switchLanguage={props.switchLanguage}
    />

    <HeaderTitle
      language={props.language}
      labelkey="contact"
      url1="/"
      url2="#"
    />

    <section className={classes.Content}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={classes.Texte}>
              text
            </div>
          </div>
        </div>

        <FormContact
          language={props.language}
          name="name"
          organisation="organisation"
          fonction="fonction"
          email="email"
          message="message"
          text="text"
          btnText="btnText"
        />
      </div>
    </section>

    <section className={classes.Cards}>
      <div className="container">
        <div className="row">
          <div className="col-lg pt-3">
            <CardToPage
              cssClass="card_lightdark"
              labelKey="consultFAQ"
              language={props.language}
              btnText="discover"
              url=""
              target="_blank"
            />
          </div>
          <div className="col-lg pt-3">
            <CardToPage
              cssClass="card_lightdark"
              labelKey="whatAreOurSources"
              language={props.language}
              btnText="discover"
              url=""
              target="_blank"
            />
          </div>
          <div className="col-lg py-3">
            <CardToPage
              cssClass="card_lightdark"
              labelKey="openData"
              language={props.language}
              btnText="discover"
              url=""
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>

    <Banner
      cssClass="BannerDark"
      labelKey="Appear"
      language={props.language}
      url=""
      target="_blank"
    />

    <Footer language={props.language} />
  </div>
);

export default Contact;

Contact.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};
