import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';

import classes from './Fiche.scss';

/**
 * Fiche
 * Url : .
 * Description : .
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
class Fiche extends Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`;
    Axios.get(url).then((response) => {
      this.setState({ data: response.data });
    }).catch((error) => {
      console.log('error =>', error);
    });
  }

  renderNoData = () => (
    <div className={classes.Fiche}>
      loading ...
    </div>
  );

  renderFiche = () => {
    return (
      <div className={classes.Fiche}>
        <Header
          language={this.props.language}
          switchLanguage={this.props.switchLanguage}
        />
        <HeaderTitle
          language={this.props.language}
          switchLanguage={this.props.switchLanguage}
          countryName={this.state.data.translations.fr}
        />
      </div>
    );
  }

  render() {
    if (!this.state.data) {
      return this.renderNoData();
    }
    return this.renderFiche();
  }
}

export default Fiche;

Fiche.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
