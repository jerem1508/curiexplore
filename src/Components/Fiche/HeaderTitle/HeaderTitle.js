import React, { Component } from 'react';
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

class HeaderTitle extends Component {
  state = {
    selectedOption: '',
  };

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
    document.getElementById(e.target.value).scrollIntoView(true);
    window.scrollBy({ top: -120, behavior: 'smooth' });
  };

  render() {
    return (
      <IntlProvider locale={this.props.language} messages={messages[this.props.language]}>
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
                    <li className={`breadcrumb-item ${classes.itemActive}`} aria-current="page">
                      {`Fiche Curie - ${this.props.countryName}`}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col">
                <select className="form-control" onChange={this.handleChange} value={this.state.selectedOption}>
                  <option value="country">Connaitre le pays</option>
                  <option value="" disabled>Sa politique ESRI</option>
                  <option value="paysageEs">Le paysage de son enseignement supérieur (ES)</option>
                  <option value="paysageRi">Le paysage de sa recherche et de son innovation (RI)</option>
                  <option value="actors">Les acteurs de l’ESRI</option>
                  <option value="LinkWithFrance">Ses liens avec la France</option>
                  <option value="" disabled>Sa coopération à l’international</option>
                  <option value="" disabled>La mobilité étudiante</option>
                  <option value="contacts">Contacts - Ressources</option>
                </select>
              </div>
            </div>
            {
              (this.props.isFull)
                ? (
                  <div className="row">
                    <div className={classes.Title}>
                      {this.props.countryName}
                    </div>
                  </div>
                )
                : null
            }
          </div>
        </section>
      </IntlProvider>
    );
  }
}


export default HeaderTitle;

HeaderTitle.propTypes = {
  language: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  isFull: PropTypes.bool.isRequired,
};
