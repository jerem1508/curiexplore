import React, { Component, Fragment } from 'react';
import Axios from 'axios';

import PropTypes from 'prop-types';

import { ODS_API_KEY } from '../../config/config';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import GraphCurie from './GraphCurie/GraphCurie';
import Title from './Title/Title';
import SubTitle from './SubTitle/SubTitle';
import Contacts from '../Shared/Contacts/Contacts';
import Scimago from './Scimago/Scimago';
import BlocText from './BlocText/BlocText';

// import CounterCard from './Actors/CounterCard';
// import SubTitleActors from './SubTitle/SubTitleActors';
// import InstitutionCard from './Actors/InstitutionCard';

import ActorsSection from './Actors/ActorsSection';

import CountryMap from './CountryMap/CountryMap';

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
  constructor(props) {
    super(props);
    this.state = {
      headerFull: true,
      target: null,
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
        odsContacts: {},
        odsInstitutions: {},
        odsQuantitatives: {},
      },
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getData();
  }

  handleTarget = (target) => {
    this.setState({ target });
  }

  handleScroll = () => {
    // RÉTRÉSSISSEMENT DE L'ENTETE AU SCROLL
    if (window.scrollY) {
      if (this.state.headerFull) { this.setState({ headerFull: false, target: null }); }
    } else {
      /* eslint-disable */
      if (!this.state.headerFull && window.scrollY === 0) { this.setState({ headerFull: true, target: null }); }
      /* eslint-enable */
    }
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

  getOdsQuantitativesData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=curiexplore-donnees-quantitatives&rows=1000&sort=country_code&refine.country_code=${this.props.match.params.id}`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        if (response.data.nhits) {
          const tabData = [];
          for (let i = 0; i < response.data.records.length; i += 1) {
            tabData.push(response.data.records[i].fields);
          }
          data.odsQuantitatives = tabData;
        }
        return { data };
      });
    });
  }

  getOdsInstitutionsData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-institutions&q=isoalpha3%3D${this.props.match.params.id}&rows=185&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        if (response.data.nhits) {
          const tabData = [];
          for (let i = 0; i < response.data.records.length; i += 1) {
            tabData.push(response.data.records[i].fields);
          }
          data.odsInstitutions = tabData;
        }
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
      if (response.data.records.length === 1 && response.data.records[0].fields) {
        this.setState((prevState) => {
          const data = { ...prevState.data };
          data.odsES = {
            PaysageEsLocal: response.data.records[0].fields.descriptionesclean,
          };
          return { data };
        });
      } else if (response.data.records.length === 2 && response.data.records[0].fields && response.data.records[1].fields) {
        this.setState((prevState) => {
          const data = { ...prevState.data };
          data.odsES = {
            PaysageEsLocal: response.data.records[0].fields.descriptionesclean,
            RelationEs: response.data.records[1].fields.descriptionesclean,
          };
          return { data };
        });
      }
    });
  }

  getOdsRiData = () => {
    const url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-recherche-innovation&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    /* eslint-disable */
    Axios.get(url).then((response) => {
      if (response.data.records.length === 0 || !response.data.records[0].fields || !response.data.records[1].fields) {
        return false;
      }

      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.odsRI = {
          PaysageRiLocal: response.data.records[0].fields.descriptionriclean,
          RelationRi: response.data.records[1].fields.descriptionriclean,
        };
        return { data };
      });
    });
    /* eslint-enable */
  }

  getOdsScimagoData = (year = null) => {
    // Récupération de toutes les années disponibles pour le pays en cours
    const urlScimagoYears = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-scimago&rows=0&sort=year&facet=year&refine.iso_alpha3=${this.props.match.params.id}`;
    /* eslint-disable-next-line */
    Axios.get(urlScimagoYears).then((responseYear) => {
      if (!responseYear.data.facet_groups) { return false; }
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
    this.getOdsInstitutionsData();
    this.getOdsScimagoData();
    this.getOdsEsData();
    this.getOdsRiData();
    this.getOdsQuantitativesData();
  }

  scimagoOnYearChangeHandler = (e) => {
    this.getOdsScimagoData(e.target.value);
  }

  renderNoData = () => (
    <div className={classes.Fiche}>
      loading ...
    </div>
  );

  filteredActors = (actorsType, field) => {
    let result = [];
    if (this.state.data.odsInstitutions.length > 0) {
      result = this.state.data.odsInstitutions.filter(el => el[field] === actorsType);
    }
    return result;
  }

  renderActors = () => {
    const actors = [];
    actors.push({ id: 'strategie', data: this.filteredActors('Principaux acteurs en charge de la définition des politiques ESRI', 'typologieinstitution'), label: 'acteurs stratégiques' });
    actors.push({ id: 'finance', data: this.filteredActors('Principaux acteurs en charge du financement de l\'ESRI', 'typologieinstitution'), label: 'acteurs de financement' });
    actors.push({ id: 'evaluation', data: this.filteredActors('Principaux acteurs en charge de l\'évaluation de l\'ESRI', 'typologieinstitution'), label: 'acteurs évaluation' });
    actors.push({ id: 'mobilite', data: this.filteredActors('Mobilité internationale', 'typologieinstitution'), label: 'acteurs mobilités' });
    actors.push({ id: 'analyses', data: this.filteredActors('Analyse du système national', 'typologieinstitution'), label: 'acteurs analyse' });
    actors.push({ id: 'acteursES', data: this.filteredActors('Établissement d\'Enseignement supérieur', 'typologieinstitution'), label: 'acteurs ES' });
    actors.push({ id: 'acteursRI', data: this.filteredActors('Institution de Recherche et Innovation', 'typologieinstitution'), label: 'acteurs RI' });
    actors.push({ id: 'acteursFrES', data: this.filteredActors('ES', 'codethematiqueinstitution'), label: 'acteurs français ES' });
    actors.push({ id: 'acteursFrRI', data: this.filteredActors('RI', 'codethematiqueinstitution'), label: 'acteurs français RI' });

    return <ActorsSection data={actors} iso={this.props.match.params.id} />;
  }

  renderLinkWithFrance = () => {
    if (!this.state.data.odsES.RelationEs && !this.state.data.odsES.RelationRi) {
      return null;
    }

    return (
      <section className={`container-fluid ${classes.LinkWithFrance}`} id="linkWithFrance">
        <div className="container">
          <Title
            label="Ses liens avec la France"
            icon="fas fa-handshake"
            cssStyle={{ color: '#fff' }}
          />
          {
          (this.state.data.odsES.RelationEs)
            ? (
              <Fragment>
                <SubTitle
                  callbackLabel="Ses liens avec la France"
                  label="Nature des relations ES avec la France"
                  hasDarkShadow
                />
                <BlocText
                  data={this.state.data.odsES.RelationEs}
                  hasDarkShadow
                />
              </Fragment>
            )
            : null
        }
          {
          (this.state.data.odsES.RelationRi)
            ? (
              <Fragment>
                <SubTitle
                  callbackLabel="Ses liens avec la France"
                  label="Nature des relations RI avec la France"
                  hasDarkShadow
                />
                <BlocText
                  data={this.state.data.odsRI.RelationRi}
                  hasDarkShadow
                />
              </Fragment>
            )
            : null
        }
        </div>
      </section>
    );
  }

  renderFiche = () => (
    <main className={classes.Fiche}>
      <Header />
      <HeaderTitle
        countryName={this.state.data.restCountries.translations.fr}
        isFull={this.state.headerFull}
        target={this.state.target}
      />
      <section className="container" id="country">
        <Title
          label="Connaitre le pays"
          icon="fas fa-binoculars"
        />
        <SubTitle
          callbackLabel="Connaitre le pays"
          label="Résumé et situation"
        />
        <div className={`row ${classes.ResumeAndSituation}`}>
          <div className="col-lg pr-1">
            <div className={`${classes.Resume}`}>
              <div className={classes.Text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue sagittis aliquet. Pellentesque nec ornare sapien, in lobortis nisl. Ut euismod massa nec ultrices pretium. Donec in sem luctus, sodales felis id, dignissim tellus. Curabitur ornare posuere massa eu efficitur. Phasellus faucibus tempor nisl, quis venenatis lorem pulvinar vitae. Curabitur facilisis, leo porta fringilla accumsan, est risus rutrum ex, vel faucibus augue erat at leo. Fusce elementum elit non justo commodo molestie.
                <br />
                <br />
                Phasellus ornare hendrerit tristique. Integer eu gravida augue. Duis pharetra turpis sit amet urna tincidunt porta. Donec at turpis eros. Nulla ornare sodales odio, et porta ex pretium eu. Nunc rutrum, arcu nec laoreet pretium, leo nisl congue libero, ut pharetra ligula dui ut velit. Sed mattis egestas turpis ultricies tempor. Nam nec lorem lectus. Praesent convallis, metus in imperdiet rutrum, risus quam dignissim metus, eget rhoncus arcu massa nec sem.
              </div>
              <div
                className={`row ${classes.AllContactsLink}`}
                onClick={() => this.handleTarget('contacts')}
                onKeyPress={() => this.handleTarget('contacts')}
                tabIndex={0}
                role="button"
              >
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
          <div className="col-lg pl-1 pr-0">
            <div className={`${classes.CountryMap}`}>
              <CountryMap capital={this.state.data.restCountries.capital} height="552px" isoCode={this.props.match.params.id} />
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
          graphType="Connaitre le pays"
          countryCode={this.props.match.params.id}
        />
      </section>

      <section className="container-fluid" id="paysageEs">
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
            graphType="Paysage ES"
            countryCode={this.props.match.params.id}
          />
        </div>

      </section>

      <section className="container-fluid" id="paysageRi">
        {
          (this.state.data.odsRI.PaysageRiLocal)
            ? (
              <div className="container">
                <Title
                  label="Le paysage de sa recherche et de son innovation (RI)"
                  icon="fas fa-microscope"
                />
                <SubTitle
                  callbackLabel="Paysage de sa ri"
                  label="Paysage RI"
                />
                <BlocText data={this.state.data.odsRI.PaysageRiLocal} />
                <GraphCurie
                  graphType="Paysage RI"
                  countryCode={this.props.match.params.id}
                />
              </div>
            )
            : null
        }
        {
          (this.state.data.odsScimago)
            ? (
              <div className={`container-fluid ${classes.Scimago}`}>
                <Scimago
                  data={this.state.data.odsScimago}
                  onYearChangeHandler={this.scimagoOnYearChangeHandler}
                  isoAlpha3={this.props.match.params.id}
                />
              </div>
            )
            : null
        }
      </section>


      <section className="container-fluid">
        {this.renderActors()}
      </section>

      {
        this.renderLinkWithFrance()
      }

      {
        (this.state.data.odsContacts)
          ? (
            <section className="container" id="contacts">
              <Title
                label="Contacts - Ressources"
                icon="fas fa-address-book"
              />
              <Contacts
                language="fr"
                data={this.state.data.odsContacts}
              />
            </section>
          ) : null
        }

      <Footer />
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

    // if (this.state.data?.restCountries?.length !== 0) {
    //   return this.renderFiche();
    // }

    return this.renderNoData();
  }
}

export default Fiche;

Fiche.propTypes = {
  match: PropTypes.object.isRequired,
};
