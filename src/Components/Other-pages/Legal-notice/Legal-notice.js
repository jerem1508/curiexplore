import React from 'react';

import ButtonToPage from '../../Shared/Ui/Buttons/ButtonToPage';
import CardWithButton from '../../Shared/CardWithButton/CardWithButton';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
import LogoCard from '../../Shared/Ui/LogoCard/LogoCard';
import Banner from '../../Shared/Banner/Banner';

/* SCSS */
import classes from './Legal-notice.scss';

import Background from './poudre-bleu_Fgris-B.jpg';

const sectionStyle = {
  backgroundImage: `url(${Background})`,
};

const LegalNoticePage = () => (
  <div className={`container-fluid ${classes.LegalNoticePage}`}>
    <Header />
    <HeaderTitle
      labelkey="legal"
      url1="/"
      url2="#"
    />
    <section style={sectionStyle} className={classes.LegalSectionPoudre}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-8">
            <div className={classes.title}>
              text
            </div>
            <div className={classes.bold}>
              text
            </div>
            <div className={classes.light}>
              text
            </div>
            <div className={classes.address}>
              text
            </div>
            <div className={`row ${classes.buttonsRow}`}>
              <div className="col-lg-4">
                <ButtonToPage
                  className={classes.MarginTop}
                  url="#"
                >
                  Voir le site
                </ButtonToPage>
              </div>
              <div className="col-lg-4">
                <ButtonToPage
                  className={classes.MarginTop}
                  url="#"
                >
                  Contactez-nous
                </ButtonToPage>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <LogoCard
              label="scanr-blue"
            />
            <LogoCard
              label="ministere"
            />
          </div>
        </div>
      </div>
    </section>

    <section className={classes.LegalSectionBlanc}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-4">
            <div className={classes.title}>
              text
            </div>
            <div className={classes.light}>
              text
            </div>
            <div className={classes.bold}>
              text
            </div>
          </div>
          <div className="col-lg-4">
            <div className={classes.title}>
              text
            </div>
            <div>
              <img
                src="./img/logo-cradar.png"
                alt="logo C-Radar"
                className={`img-fluid ${classes.img}`}
              />
            </div>
            <div className={classes.light}>
              text
            </div>
            <div className={classes.bold}>
              text
            </div>
            <div className={classes.address}>
              text
            </div>
            <ButtonToPage
              className={classes.MarginTop}
              url="#"
            >
              Voir le site
            </ButtonToPage>
          </div>
          <div className="col-lg-4">
            <div className={classes.title}>
              text
            </div>
            <div className={classes.light}>
              text
            </div>
            <div className={classes.bold}>
              text
            </div>
            <div className={classes.address}>
              text
            </div>
            <ButtonToPage
              className={classes.MarginTop}
              url="#"
            >
              Voir le site
            </ButtonToPage>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.LegalSectionGris}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-8">
            <div className={classes.title}>
              text
            </div>
            <div className={classes.paragraph}>
              <div className={classes.bold}>
                text
              </div>
              <div className={classes.light}>
                text
              </div>
            </div>
            <div className={classes.paragraph}>
              <div className={classes.bold}>
                text
              </div>
              <div className={classes.light}>
                text
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.LegalSectionBlanc}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-8">
            <div className={classes.title}>
              text
            </div>
            <div className={classes.subtitle}>
              text
            </div>
            <div className={classes.light}>
              text
            </div>
          </div>
          <div className="col-lg-4">
            <div className={classes.title}>
              text
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.LegalSectionGris}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-8">
            <div className={classes.title}>
              text
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className="col-lg-8">
            <div className={classes.title}>
              text
            </div>
            <div className="sectionContent">
              <div className="content">
                text
              </div>
              <div className="content">
                text
              </div>
              <div className="content">
                text
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={sectionStyle} className={classes.LegalSectionPoudre}>
      <div className="container">
        <div className="row">
          <CardWithButton
            schema="card_dark"
            title="Discover.TalkAboutScanr"
            url="./medias"
            lib_button="Découvrir"
            position="CardCenter"
          />
          <CardWithButton
            schema="card_dark"
            title="Discover.Sources"
            url="./ressources"
            lib_button="Découvrir"
            position="CardCenter"
          />
          <CardWithButton
            schema="card_dark"
            title="Discover.Team"
            url="./l-equipe-et-son-projet"
            lib_button="Découvrir"
            position="CardCenter"
          />
        </div>
      </div>
    </section>

    <Banner
      labelKey="Appear"
      cssClass="BannerDark"
      url=""
    />

    <Footer />

  </div>
);

export default LegalNoticePage;
