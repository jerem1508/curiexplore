import React, { Component } from 'react';
import Axios from 'axios';
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

class CountriesList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({ data: response.data });
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    let a = null;
    if (this.state.data.length > 0) {
      a = this.state.data.map((country) => {
        if (country.name.substr(0, 1) === 'E') {
          return (
            <div className="container">
              <div>
                {country.translations.fr}
              </div>
            </div>
          );
        }
        return null;
      });
    }

    const content = this.state.data.map(country => (
      <div className="container">
        <div>
          {country.translations.fr}
        </div>
      </div>
    ));
    return (
      <div className="container-fluid">
        {a}
      </div>
    );
  }
}

export default CountriesList;

CountriesList.propTypes = {
  language: PropTypes.string.isRequired,
};
