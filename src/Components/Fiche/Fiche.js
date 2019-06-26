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
    url = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=ccp-survey-institutions&q=isoalpha3%3D${this.props.match.params.id}&rows=185&sort=isoalpha3`;
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

  filteredActors = (actorsType) => {
    let result = [];
    if (this.state.data.odsInstitutions.length > 0) {
      result = this.state.data.odsInstitutions.filter(el => el.typologieinstitution === actorsType);
    }
    return result;
  }

  filteredActorsA8 = (thematic) => {
    let result = [];
    if (this.state.data.odsInstitutions.length > 0) {
      result = this.state.data.odsInstitutions.filter(el => el.codethematiqueinstitution === thematic);
    }
    return result;
  }

  renderNoData = () => (
    <div className={classes.Fiche}>
      loading ...
    </div>
  );

  renderFiche = () => {
    const type1 = 'Principaux acteurs en charge de la définition des politiques ESRI';
    const type2 = 'Principaux acteurs en charge du financement de l\'ESRI';
    const type3 = 'Principaux acteurs en charge de l\'évaluation de l\'ESRI';
    const type4 = 'Mobilité internationale';
    const type5 = 'Analyse du système national';
    const type6 = 'Établissement d\'Enseignement supérieur';
    const type7 = 'Institution de Recherche et Innovation';
    const type8 = 'ES';
    const type9 = 'RI';

    const filteredActors1 = this.filteredActors(type1);
    const filteredActors2 = this.filteredActors(type2);
    const filteredActors3 = this.filteredActors(type3);
    const filteredActors4 = this.filteredActors(type4);
    const filteredActors5 = this.filteredActors(type5);
    const filteredActors6 = this.filteredActors(type6);
    const filteredActors7 = this.filteredActors(type7);
    const filteredActors8 = this.filteredActorsA8(type8);
    const filteredActors9 = this.filteredActorsA8(type9);

    return (
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
                  count={filteredActors1.length}
                  icon="fas fa-thumbtack fa-2x"
                  label="acteurs stratégiques"
                  anchor="#example" // link to anchor
                />
                <CounterCard
                  count={filteredActors2.length}
                  icon="fas fa-money-bill-wave fa-2x"
                  label="acteurs de financement"
                  anchor="#example"
                />
                <CounterCard
                  count={filteredActors3.length}
                  icon="fas fa-star fa-2x"
                  label="acteurs évaluations"
                  anchor="#example"
                />
              </div>
              <div className="row">
                <CounterCard
                  count={filteredActors4.length}
                  icon="fas fa-exchange-alt fa-2x"
                  label="acteurs mobilités"
                  anchor="#example" // link to anchor
                />
                <CounterCard
                  count={filteredActors5.length}
                  icon="fas fa-microscope fa-2x"
                  label="acteurs ES"
                  anchor="#example"
                />
                <CounterCard
                  count={filteredActors6.length}
                  icon="fas fa-lightbulb fa-2x"
                  label="acteurs RI"
                  anchor="#example"
                />
              </div>
              <div className="row">
                <CounterCard
                  count={filteredActors7.length}
                  icon="fas fa-square-root-alt fa-2x"
                  label="acteurs analyses"
                  anchor="#example" // link to anchor
                />
                <CounterCard
                  count={filteredActors8.length}
                  icon="fas fa-money-bill-wave fa-2x"
                  label="acteurs de financement"
                  anchor="#example"
                />
                <CounterCard
                  count={filteredActors9.length}
                  icon="fas fa-star fa-2x"
                  label="acteurs évaluations"
                  anchor="#example"
                />
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors1.length}
                icon="fas fa-thumbtack"
                label="acteurs stratégiques"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors1.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors2.length}
                icon="fas fa-thumbtack"
                label="acteurs de financement"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors2.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors3.length}
                icon="fas fa-thumbtack"
                label="acteurs évaluations"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors3.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors4.length}
                icon="fas fa-thumbtack"
                label="acteurs mobilités"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors4.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors5.length}
                icon="fas fa-thumbtack"
                label="acteurs ES"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors5.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors6.length}
                icon="fas fa-thumbtack"
                label="acteurs RI"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors6.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors7.length}
                icon="fas fa-thumbtack"
                label="acteurs analyses"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors7.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors8.length}
                icon="fas fa-thumbtack"
                label="acteurs français ES sur place"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors8.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={classes.ActorsList}>
              <SubTitleActors
                count={filteredActors9.length}
                icon="fas fa-thumbtack"
                label="acteurs français RI sur place"
              />
              <div className={classes.gridActors}>
                <div className="row">
                  {
                    filteredActors9.map(item => (
                      <InstitutionCard
                        nomFr={(item.nominstitutionfr || null)}
                        nom={(item.nominstitution || null)}
                        sigleFr={(item.sigleInstitutionfr || null)}
                        sigle={(item.sigleinstitution || null)}
                        description={(item.descriptioninstitutionclean || null)}
                        webSite={(item.siteinstitution || null)}
                      />
                    ))
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
  }

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
