import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import { ODS_API_KEY } from '../../config/config';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Title from '../Shared/Title/Title';
import Contacts from '../Shared/Contacts/Contacts';

import classes from './Annuaire.scss';

/**
 * Annuaire
 * Url : .
 * Description : Page d'annuaire des contacts
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
class Annuaire extends Component {
  state = {
    data: {},
    selectedLetter: 'A',
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Données contacts
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-information-generale&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        if (response.data.nhits) {
          const tabData = [];
          for (let i = 0; i < response.data.records.length; i += 1) {
            tabData.push(response.data.records[i].fields);
          }
          data.allContacts = tabData;
        }
        return { data };
      });
    });
  }

  setSelectedLetter = (letter) => {
    if (this.state.selectedLetter !== letter) {
      this.setState({ selectedLetter: letter });
    }
  }

  renderFilterByLetters = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const jsxLetters = letters.map((letter) => {
      return (
        <span
          className={classes.Letter}
          onClick={() => this.setSelectedLetter(letter)}
          onKeyPress={() => this.setSelectedLetter(letter)}
          tabIndex={0}
          role="button"
        >
          {letter}
        </span>
      );
    });
    return jsxLetters;
  }

  render() {
    if (!this.state.data.allContacts || this.state.data.allContacts.length === 0) {
      return <div>Loading ...</div>;
    }
    const filteredContacts = this.state.data.allContacts.filter(country => country.namefr.charAt(0) === this.state.selectedLetter);

    return (
      <div className={classes.Annuaire}>
        <Header
          language="fr"
          // switchLanguage={this.props.switchLanguage}
        />
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
                    Annuaire
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-8">
                <div className={classes.Title}>
                  Annuaire
                </div>
                <div className={classes.Label}>
                  Trouvez le bon contact dans chaque pays
                </div>
              </div>
              <div className={`col-4 ${classes.Search}`}>
                <div className={classes.Label}>
                  Chercher un pays
                </div>
                <div className={classes.Input}>
                  <input type="text" placeHolder="Ex: Norvège" />
                </div>
              </div>
            </div>
            {this.renderFilterByLetters()}
          </div>
        </section>
        <div className="container">
          {
            filteredContacts.map(country => (
              <Fragment key={country.namefr}>
                <Title
                  label={country.namefr}
                  icon="fas fa-address-card"
                />
                <Contacts
                  language="fr"
                  data={country}
                />
              </Fragment>
            ))
          }
        </div>

        <Footer language="fr" />
      </div>
    );
  }
}

export default Annuaire;

Annuaire.propTypes = {
  // language: PropTypes.string.isRequired,
};
