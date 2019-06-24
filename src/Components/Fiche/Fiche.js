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
import CounterCard from './CounterCard';
import SubTitleActors from './SubTitle/SubTitleActors';
import InstitutionCard from './InstitutionCard';

/* SCSS */
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
      odsContacts: {},
      odsInstitutions: {},
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.restCountries = response.data;
        return { data };
      });
    });

    // Données contacts
    url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-information-generale&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        if (response.data.records[0]) {
          data.odsContacts = response.data.records[0].fields;
        }
        return { data };
      });
    });

    // Données institutions
    url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-institutions&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.odsInstitutions = response.data.records[0].fields;
        return { data };
      });
    });

    // Données institutions
    url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-institutions&q=isoalpha3%3D${this.props.match.params.id}&sort=isoalpha3`;
    Axios.get(url).then((response) => {
      this.setState((prevState) => {
        const data = { ...prevState.data };
        data.odsInstitutions = response.data.records[0].fields;
        return { data };
      });
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
        countryName={this.state.data.restCountries.translations.fr}
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
          label="Les acteurs de l'ESRI"
          icon="fas fa-city"
        />

        <div className={classes.Actors}>
          <div className="row">
            <div className={`col ${classes.Map}`}>
              map
            </div>
          </div>

          <div className={classes.gridActors}>
            <div className="row">
              <CounterCard
                icon="fas fa-thumbtack fa-2x"
                label="acteurs stratégiques"
                anchor="#example" // link to anchor
              />
              <CounterCard
                icon="fas fa-money-bill-wave fa-2x"
                label="acteurs de financement"
                anchor="#example"
              />
              <CounterCard
                icon="fas fa-star fa-2x"
                label="acteurs évaluations"
                anchor="#example"
              />
            </div>
            <div className="row">
              <CounterCard
                icon="fas fa-exchange-alt fa-2x"
                label="acteurs mobilités"
                anchor="#example" // link to anchor
              />
              <CounterCard
                icon="fas fa-microscope fa-2x"
                label="acteurs ES"
                anchor="#example"
              />
              <CounterCard
                icon="fas fa-lightbulb fa-2x"
                label="acteurs RI"
                anchor="#example"
              />
            </div>
            <div className="row">
              <CounterCard
                icon="fas fa-square-root-alt fa-2x"
                label="acteurs analyses"
                anchor="#example" // link to anchor
              />
              <CounterCard
                icon="fas fa-money-bill-wave fa-2x"
                label="acteurs de financement"
                anchor="#example"
              />
              <CounterCard
                icon="fas fa-star fa-2x"
                label="acteurs évaluations"
                anchor="#example"
              />
            </div>
          </div>

          <div className={classes.ActorsList}>
            <SubTitleActors
              icon="fas fa-thumbtack"
              label="8 acteurs stratégiques"
            />
            <div className={classes.gridActors}>
              <div className="row">
                {
                  (this.state.data.odsInstitutions)
                    ? (
                      <InstitutionCard
                        nomFr={(this.state.data.odsInstitutions.nominstitutionfr || null)}
                        nom={(this.state.data.odsInstitutions.nominstitution || null)}
                        sigleFr={(this.state.data.odsInstitutions.sigleInstitutionfr || null)}
                        sigle={(this.state.data.odsInstitutions.sigleinstitution || null)}
                        description={(this.state.data.odsInstitutions.descriptioninstitutionclean || null)}
                        webSite={(this.state.data.odsInstitutions.siteinstitution || null)}
                      />
                    )
                    : null
                }
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container" id="example">
        <Title
          label="Contacts - Ressources"
          icon="fas fa-address-book"
        />
        {
          (this.state.data.odsContacts)
            ? (
              <Contacts
                language={this.props.language}
                switchLanguage={this.props.switchLanguage}
                data={this.state.data.odsContacts}
              />
            ) : null
        }
      </div>

      <Footer language={this.props.language} />
    </div>
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
