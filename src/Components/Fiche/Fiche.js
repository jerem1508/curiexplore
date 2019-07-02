import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import { ODS_API_KEY } from '../../config/config';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import GraphCurie from './GraphCurie/GraphCurie';
import Title from './Title/Title';
import SubTitle from './SubTitle/SubTitle';
import Contacts from '../Shared/Contacts/Contacts';
import Scimago from './Scimago/Scimago';
import BlocText from './BlocText/BlocText';

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
  state = {
    data: {
      restCountries: [],
      odsES: {
        PaysageEsLocal: '',
        RelationEs: '',
      },
      odsRI: {
        PaysageRiLocal: '',
        RelationRi: '',
      },
    },
  };

  componentDidMount() {
    this.getData();
  }

  getRestCountriesData = () => {
    const url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.restCountries = response.data;
        return { data };
      });
    });
  }

  getOdsContactsData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-information-generale&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        if (response.data.records[0]) {
          data.odsContacts = response.data.records[0].fields;
        }
        return { data };
      });
    });
  }

  getOdsEsData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-enseignement-superieur&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.odsES = {
          PaysageEsLocal: response.data.records[0].fields.descriptionesclean,
          RelationEs: response.data.records[1].fields.descriptionesclean,
        };
        return { data };
      });
    });
  }

  getOdsRiData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-recherche-innovation&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.odsRI = {
          PaysageRiLocal: response.data.records[0].fields.descriptionriclean,
          RelationRi: response.data.records[1].fields.descriptionriclean,
        };
        return { data };
      });
    });
  }

  getOdsScimagoData = (year = null) => {
    // Récupération de toutes les années disponibles pour le pays en cours
    const urlScimagoYears = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-scimago&rows=0&sort=year&facet=year&refine.iso_alpha3=${this.props.match.params.id}`;
    Axios.get(urlScimagoYears).then((responseYear) => {
      let years = [];
      if (!year) {
        for (let i = 0; i < responseYear.data.facet_groups[0].facets.length; i += 1) {
          years.push(responseYear.data.facet_groups[0].facets[i].name);
        }
        years.sort((a, b) => b - a);
      } else {
        years = this.state.data.odsScimago.years;
      }

      const yearToGet = (year || years[0]);

      // récupération des données de l'année la plus récente
      // le reste se fera sur le onChange du selecteur d'année Scimago
      const urlScimago = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-scimago&rows=5000&refine.year=${yearToGet}`;
      Axios.get(urlScimago).then((responseData) => {
        this.setState((prevState) => {
          const data = { ...prevState.data };
          data.odsScimago = { years, selectedYear: yearToGet, data: responseData.data.records };
          return { data };
        });
      });
    });
  }

  getData = () => {
    this.getRestCountriesData();
    this.getOdsContactsData();
    this.getOdsScimagoData();
    this.getOdsEsData();
    this.getOdsRiData();
  }

  scimagoOnYearChangeHandler = (e) => {
    this.getOdsScimagoData(e.target.value);
  }

  renderNoData = () => (
    <div className={classes.Fiche}>
      loading ...
    </div>
  );

  renderFiche = () => (
    <main className={classes.Fiche}>
      <Header
        language={this.props.language}
        switchLanguage={this.props.switchLanguage}
      />
      <HeaderTitle
        language={this.props.language}
        switchLanguage={this.props.switchLanguage}
        countryName={this.state.data.restCountries.translations.fr}
      />
      <section className="container">
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
          graphType="Pays"
          countryCode={this.props.match.params.id}
        />

        {
          /*
            <GraphCurie
              graphType="mobilite-etudiante"
              countryCode={this.props.match.params.id}
            />
            <GraphCurie
              graphType="paysage-ES"
              countryCode={this.props.match.params.id}
            />
            <GraphCurie
              graphType="politique-ESRI"
              countryCode={this.props.match.params.id}
            />
          */
        }

      </section>

      <section className="container-fluid">
        <div className="container">
          <Title
            label="Le paysage de son enseignement supérieur (ES)"
            icon="fas fa-microscope"
          />
          <SubTitle
            callbackLabel="Paysage de son es"
            label="Paysage ES"
          />
          <BlocText data={this.state.data.odsES.PaysageEsLocal} />

          <GraphCurie
            graphType="paysage-ES"
            countryCode={this.props.match.params.id}
          />
        </div>

      </section>

      <section className="container-fluid">
        <div className="container">
          <Title
            label="Le paysage de sa recherche et de son innovation (RI)"
            icon="fas fa-microscope"
          />
          <SubTitle
            callbackLabel="Paysage de sa ri"
            label="Paysage RI"
          />
          {
            <BlocText data={this.state.data.odsRI.PaysageRiLocal} />
          }

          <GraphCurie
            graphType="paysage-RI"
            countryCode={this.props.match.params.id}
          />
        </div>
        {
          (this.state.data.odsScimago)
            ? (
              <div className={`container-fluid ${classes.Scimago}`}>
                <Scimago
                  language={this.props.language}
                  data={this.state.data.odsScimago}
                  onYearChangeHandler={this.scimagoOnYearChangeHandler}
                  isoAlpha3={this.props.match.params.id}
                />
              </div>
            )
            : null
        }
      </section>

      <section className="container">
        <Title
          label="Contacts - Ressources"
          icon="fas fa-address-book"
        />
        {
          (this.state.data.odsContacts)
            ? (
              <Contacts
                language={this.props.language}
                data={this.state.data.odsContacts}
              />
            ) : null
        }
      </section>

      <Footer language={this.props.language} />
    </main>
  );

  render() {
    if (this.state.data) {
      if (this.state.data.restCountries) {
        if (this.state.data.restCountries.length !== 0) {
          return this.renderFiche();
        }
      }
    }
    return this.renderNoData();
  }
}

export default Fiche;

Fiche.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
