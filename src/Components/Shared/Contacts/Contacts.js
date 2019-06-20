import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import classes from './Contacts.scss';

/**
 * Contacts
 * Url : Appelé dans la fiche pays et dans la page annuaire
 * Description : Contacts d'un pays
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
class Contacts extends Component {
  state = {
    selected: '',
  };

  setSelected = (type) => {
    this.setState({ selected: type });
  }

  render() {
    return (
      <div className={classes.Contacts}>
        <div className="row">
          <div className={`col ${classes.Map}`}>
            map
          </div>
        </div>
        <div className="row">
          {
            (this.props.data.adresseambassade)
              ? (
                <Card
                  title="Ambassade"
                  address={this.props.data.adresseambassade}
                  ville={this.props.data.villeambassade}
                  webSite={this.props.data.siteambassade}
                />
              )
              : null
          }
          {
            (this.props.data.nomservicees)
              ? (
                <Card
                  title={this.props.data.nomservicees}
                  address={this.props.data.adresseservicees}
                  ville={this.props.data.villeservicees}
                  webSite={this.props.data.siteservicees}
                />
              )
              : null
          }
          {
            (this.props.data.nomserviceri)
              ? (
                <Card
                  title={this.props.data.nomserviceri}
                  address={this.props.data.adresseserviceri}
                  ville={this.props.data.villeserviceri}
                  webSite={this.props.data.siteservicees}
                />
              )
              : null
          }
        </div>
      </div>
    );
  }
}

/*
adresseambassade: "4101 Reservoir Road NW"
villeambassade: "Washington, D.C. 20007"
autrereseauambassade: "https://www.youtube.com/franceintheus"
twitterambassade: "https://twitter.com/franceintheus?lang=fr"
siteambassade: "https://fr.franceintheus.org/"

separationesri: "Y"
isoalpha3: "USA"

nomservicees: "Mission Culturelle et Universitaire Française aux Etats-Unis"
adresseservicees: "972 Fifth Avenue"
villeservicees: "New York, NY 10075"
twitterservicees: "https://twitter.com/franceinnyc"
siteservicees: "http://frenchculture.org/"

nomserviceri: "Service pour la Science et la Technologie"
adresseserviceri: "4101 Reservoir Road NW"
villeserviceri: "Washington, D.C. 20007"
twitterserviceri: "https://twitter.com/FranceScience?lang=fr"

*/

export default Contacts;

Contacts.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  data: PropTypes.object,
};
