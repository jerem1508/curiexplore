import React, { Component } from 'react';
import Axios from 'axios';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

/* SCSS */
import classes from './CountriesList.scss';

/* Data */
import countries from './countriesList.json';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

class CountriesList extends Component {
  state = {
    data: countries,
  };

  createColumn = (column) => {
    const col = [];
    let letter = '';
    for (let i = 0; i < column.length; i += 1) {
      let title = null;
      if (letter !== column[i]) {
        letter = column[i];
        // + affichage du titre
        title = <dt>{column[i]}</dt>;
      }

      const countryName = [];
      for (let j = 0; j < this.state.data.length; j += 1) {
        if (this.state.data[j].Pays.substr(0, 1) === letter) {
          const a = (
            <li className={classes.country}>
              <a href={`/fiche/${this.state.data[j].ISO_alpha3}`}>
                {this.state.data[j].Pays}
              </a>
            </li>
          );
          countryName.push(a);
        }
      }
      col.push(<dl>{title}<ul>{countryName}</ul></dl>);
    }
    return col;
  }

  render() {
    if (this.state.data.length === 0) {
      return null;
    }

    const letterCol1 = ['A', 'B', 'C', 'D'];
    const letterCol2 = ['E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const letterCol3 = ['L', 'M', 'N', 'O', 'P', 'Q', 'R'];
    const letterCol4 = ['S', 'T', 'U', 'V', 'Y', 'Z'];

    const col1 = this.createColumn(letterCol1);
    const col2 = this.createColumn(letterCol2);
    const col3 = this.createColumn(letterCol3);
    const col4 = this.createColumn(letterCol4);

    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            Recherchez un pays dans la liste suivante
          </div>
          <div className={`row ${classes.countryList}`}>
            <div className="col-3">
              {
                col1.map(letterList => letterList)
              }
            </div>
            <div className="col-3">
              {
                col2.map(letterList => letterList)
              }
            </div>
            <div className="col-3">
              {
                col3.map(letterList => letterList)
              }
            </div>
            <div className="col-3">
              {
                col4.map(letterList => letterList)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;

CountriesList.propTypes = {
  language: PropTypes.string.isRequired,
};
