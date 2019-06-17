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
    let countryName = null;

    const letterCol1 = ['A', 'B', 'C', 'D'];
    const letterCol2 = ['E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const letterCol3 = ['L', 'M', 'N', 'O', 'P', 'Q', 'R'];
    const letterCol4 = ['S', 'T', 'U', 'V', 'Y', 'Z'];

    if (this.state.data.length > 0) {
      countryName = this.state.data.map((country) => {
        if (country.name.substr(0, 1) === letterCol1.map(letter => letter)) {
          return (
            <li className={classes.country}>
              {country.translations.fr}
            </li>
          );
        }
        return null;
      });
    }

    // const content = this.state.data.map(country => (
    //   <div className="container">
    //     <div>
    //       {country.translations.fr}
    //     </div>
    //   </div>
    // ));

    return (
      <div className="container-fluid">
        <div className="container">
          <div className="col-3">
            <dl>
              <dt>
                A
              </dt>
              {countryName}
            </dl>
          </div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default CountriesList;

CountriesList.propTypes = {
  language: PropTypes.string.isRequired,
};
