import React, { Component } from 'react';
import Axios from 'axios';
import { Map, Marker, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';

import { redIcon, blackIcon } from './icons';

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
    selected: 'ambassade',
    data: this.props.data,
    coordinates: {
      ambassade: [],
      servicees: [],
      serviceri: [],
      serviceesri: [],
    },
  };

  componentDidMount() {
    this.setMarkers();
  }

  // componentDidUpdate() {
  //   if (this.props.data !== this.state.data) {
  //     this.setMarkers();
  //   }
  // }

  setMarkers = () => {
    if (this.props.data.adresseambassade && this.props.data.villeambassade) {
      let completAddress = `${this.props.data.adresseambassade} ${this.props.data.villeambassade}`;
      completAddress = completAddress.split(' ').join('%20');
      this.getCoordinates(completAddress, 'ambassade');
    }
    if (this.props.data.adresseservicees && this.props.data.villeservicees) {
      let completAddress = `${this.props.data.adresseservicees} ${this.props.data.villeservicees}`;
      completAddress = completAddress.split(' ').join('%20');
      this.getCoordinates(completAddress, 'servicees');
    }
    if (this.props.data.adresseserviceri && this.props.data.villeserviceri) {
      let completAddress = `${this.props.data.adresseserviceri} ${this.props.data.villeserviceri}`;
      completAddress = completAddress.split(' ').join('%20');
      this.getCoordinates(completAddress, 'serviceri');
    }
    if (this.props.data.adresseserviceesri && this.props.data.villeserviceesri) {
      let completAddress = `${this.props.data.adresseserviceesri} ${this.props.data.villeserviceesri}`;
      completAddress = completAddress.split(' ').join('%20');
      this.getCoordinates(completAddress, 'serviceesri');
    }
  }

  getCoordinates = (address, type) => {
    const prefixeUrl = 'http://10.243.98.74/geocoder/address/';
    const suffixeUrl = '?provider=openstreetmap';
    const url = `${prefixeUrl}${address}${suffixeUrl}`;
    Axios.get(url).then((response) => {
      if (response.data) {
        if (response.data.coordinates) {
          if (response.data.coordinates.coordinates) {
            this.setState((prevState) => {
              const newState = { ...prevState };
              newState.coordinates[type] = response.data.coordinates.coordinates;
              return { newState };
            });
          }
        }
      }
    });
  }

  clickOnCardHandler = (selected) => {
    this.setState({ selected });
  }

  getBounds = () => {
    const bounds = [];
    const allBounds = [];

    /* eslint-disable */
    for (var type in this.state.coordinates) {
      if (this.state.coordinates[type].length !== 0) {
        const val = `${this.state.coordinates[type][0]}|${this.state.coordinates[type][1]}`;
        let found = false;

        for (var i = 0; i < allBounds.length; i++) {
          if (allBounds[i] === val) {
            found = true;
          }
        }
        allBounds.push(val);

        if (!found) {
          bounds.push([this.state.coordinates[type][0], this.state.coordinates[type][1]]);
        }
      }
    }
    /* eslint-enable */
    return bounds;
  }

  getMarkers = () => {
    /* eslint-disable */
    const markers = [];
    for (var type in this.state.coordinates) {
      if (this.state.coordinates[type].length !== 0) {
        if (type === this.state.selected){
          markers.push(<Marker position={this.state.coordinates[type]} icon={ redIcon } />);
        } else {
          markers.push(<Marker position={this.state.coordinates[type]} icon={ blackIcon } />);
        }
      }
    }
    /* eslint-enable */
    return markers;
  }

  render() {
    const newBounds = this.getBounds();
    let mapProps = {
      center: [48, 3], // France
      zoom: 4,
    };
    if (newBounds.length === 1) {
      mapProps = {
        center: newBounds[0],
        zoom: 4,
      };
    }
    if (newBounds.length > 1) {
      // bounds = newBounds;
      mapProps = {
        bounds: newBounds,
        boundsOptions: { padding: [50, 50] },
        zoom: 4,
      };
    }

    const markers = this.getMarkers();

    return (
      <div className={classes.Contacts}>
        <div className="row">
          <div className={`col ${classes.MapContainer}`}>
            <Map
              className={classes.Map}
              {...mapProps}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
              />
              {
                markers.map(marker => marker)
              }
            </Map>
          </div>
        </div>
        <div className={`row ${classes.Cards}`}>
          {
            (this.props.data.adresseambassade)
              ? (
                <Card
                  title="Ambassade"
                  address={(this.props.data.adresseambassade || null)}
                  ville={(this.props.data.villeambassade || null)}
                  webSite={(this.props.data.siteambassade || null)}
                  twitter={(this.props.data.twitterambassade || null)}
                  instagram={(this.props.data.instagramambassade || null)}
                  facebook={(this.props.data.facebookambassade || null)}
                  otherSocialNetwork={(this.props.data.autrereseauambassade || null)}
                  onClickHandler={this.clickOnCardHandler}
                  type="ambassade"
                  selected={(this.state.selected === 'ambassade')}
                />
              )
              : null
          }
          {
            (this.props.data.nomservicees)
              ? (
                <Card
                  title={(this.props.data.nomservicees || null)}
                  address={(this.props.data.adresseservicees || null)}
                  ville={(this.props.data.villeservicees || null)}
                  webSite={(this.props.data.siteservicees || null)}
                  twitter={(this.props.data.twitterservicees || null)}
                  instagram={(this.props.data.instagramservicees || null)}
                  facebook={(this.props.data.facebookservicees || null)}
                  otherSocialNetwork={(this.props.data.autrereseauservicees || null)}
                  onClickHandler={this.clickOnCardHandler}
                  type="servicees"
                  selected={(this.state.selected === 'servicees')}
                />
              )
              : null
          }
          {
            (this.props.data.nomserviceri)
              ? (
                <Card
                  title={(this.props.data.nomserviceri || null)}
                  address={(this.props.data.adresseserviceri || null)}
                  ville={(this.props.data.villeserviceri || null)}
                  webSite={(this.props.data.siteservicees || null)}
                  twitter={(this.props.data.twitterserviceri || null)}
                  instagram={(this.props.data.instagramserviceri || null)}
                  facebook={(this.props.data.facebookserviceri || null)}
                  otherSocialNetwork={(this.props.data.autrereseauserviceri || null)}
                  onClickHandler={this.clickOnCardHandler}
                  type="serviceri"
                  selected={(this.state.selected === 'serviceri')}
                />
              )
              : null
          }
          {
            (this.props.data.nomserviceesri)
              ? (
                <Card
                  title={(this.props.data.nomserviceesri || null)}
                  address={(this.props.data.adresseserviceesri || null)}
                  ville={(this.props.data.villeserviceesri || null)}
                  webSite={(this.props.data.siteserviceeses || null)}
                  twitter={(this.props.data.twitterserviceesri || null)}
                  instagram={(this.props.data.instagramserviceesri || null)}
                  facebook={(this.props.data.facebookserviceesri || null)}
                  otherSocialNetwork={(this.props.data.autrereseauserviceesri || null)}
                  onClickHandler={this.clickOnCardHandler}
                  type="serviceesri"
                  selected={(this.state.selected === 'serviceesri')}
                />
              )
              : null
          }
        </div>
      </div>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  // language: PropTypes.string.isRequired,
  data: PropTypes.object,
};
