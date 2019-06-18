import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import GraphCurie from './GraphCurie/GraphCurie';
import Title from './Title/Title';
import SubTitle from './SubTitle/SubTitle';

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
    });
  }

  renderNoData = () => (
    <div className={classes.Fiche}>
      loading ...
    </div>
  );

  renderFiche = () => (
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
      <div className="container">
        <Title
          label="Connaitre le pays"
          icon="fas fa-binoculars"
        />
        <SubTitle
          callbackLabel="Connaitre le pays"
          label="Résumé et situation"
        />
        <div className={`row ${classes.ResumeAndSituation}`}>
          <div className="col pr-1">
            <div className={`${classes.Resume}`}>
              <div className={classes.Text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue sagittis aliquet. Pellentesque nec ornare sapien, in lobortis nisl. Ut euismod massa nec ultrices pretium. Donec in sem luctus, sodales felis id, dignissim tellus. Curabitur ornare posuere massa eu efficitur. Phasellus faucibus tempor nisl, quis venenatis lorem pulvinar vitae. Curabitur facilisis, leo porta fringilla accumsan, est risus rutrum ex, vel faucibus augue erat at leo. Fusce elementum elit non justo commodo molestie.
                <br />
                <br />
                Phasellus ornare hendrerit tristique. Integer eu gravida augue. Duis pharetra turpis sit amet urna tincidunt porta. Donec at turpis eros. Nulla ornare sodales odio, et porta ex pretium eu. Nunc rutrum, arcu nec laoreet pretium, leo nisl congue libero, ut pharetra ligula dui ut velit. Sed mattis egestas turpis ultricies tempor. Nam nec lorem lectus. Praesent convallis, metus in imperdiet rutrum, risus quam dignissim metus, eget rhoncus arcu massa nec sem.
              </div>
              <div className={`row ${classes.AllContactsLink}`}>
                <div className="col d-flex align-items-center justify-content-end">
                  Retrouvez&nbsp;
                  <strong>tous les contacts</strong>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col pl-1 pr-0">
            <div className={`${classes.CountryMap}`}>
              carte pays
            </div>
          </div>
        </div>
        <div className={`row ${classes.MemberOf}`}>
          <div className="col">
            <div className={`row ${classes.Bloc}`}>
              <div className="col">
                bloc
              </div>
            </div>
          </div>
        </div>
        <GraphCurie
          graphType="aboutCountry"
          countryCode={this.props.match.params.id}
        />
      </div>

      <div className="container">
        <Title
          label="Connaitre le pays"
          icon="fas fa-binoculars"
        />
      </div>
    </div>
  );

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
