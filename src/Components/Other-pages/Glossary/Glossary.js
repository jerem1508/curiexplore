import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import Banner from '../../Shared/Banner/Banner';
import CardWithButton from '../../Shared/CardWithButton/CardWithButton';
import Background from '../../Shared/images/poudre-jaune_Fgris-B.jpg';

/* SCSS */
import classes from './Glossary.scss';

const sectionStyle = {
  backgroundImage: `url(${Background})`,
};

const Glossary = () => (
  <div className={`container-fluid ${classes.Glossary}`}>
    <Header />
    <section>
      <HeaderTitle
        label="glossary"
      />
    </section>
    <section style={sectionStyle} className={classes.Content}>
      <div className="container">
        <div className="row">
          bla bla
        </div>
      </div>
    </section>
    <section className={classes.ThreeCards}>
      <div className="container">
        <div className="row">
          <CardWithButton
            title="Discover.TalkAboutScanr"
            url="https://worldwide.espacenet.com/?locale=fr_EP"
            lib_button="Découvrir"
          />
          <CardWithButton
            title="Discover.Sources"
            url="https://worldwide.espacenet.com/?locale=fr_EP"
            lib_button="Découvrir"
          />
          <CardWithButton
            title="Discover.Team"
            url="https://worldwide.espacenet.com/?locale=fr_EP"
            lib_button="Découvrir"
          />
        </div>
      </div>
    </section>
    <Banner
      label="Appear"
      cssClass="BannerDark"
    />
    <Footer />
  </div>
);

export default Glossary;
