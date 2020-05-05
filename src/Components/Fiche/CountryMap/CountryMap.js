import React, { Component } from 'react';
// import axios from 'axios';
import propTypes from 'prop-types';
import {
  Map, GeoJSON, Circle, Tooltip,
} from 'react-leaflet';


import classes from './CountryMap.scss';
import worldGeoJSON from '../../../Data/custom.geo.json';
import capitalsList from './capitalsList.json';

export default class Carto extends Component {
  constructor(props) {
    super(props);
    this.capital = '';
    // this.isBLurred = true;
    this.hasCapital = false;
    this.blurred = classes.Blurred;
    this.state = {
      capitalPos: [0, 0],
      bounds: [[85, -180], [-85, 180]],
    };
    this.onEachFeature = this.onEachFeature.bind(this);
    this.getCapital = this.getCapital.bind(this);
  }

  onEachFeature(feature, layer) {
    const latLngNE = [];
    const latLngSW = [];
    const bounds = [];
    const capitalPos = [];

    if (layer.feature.properties.adm0_a3 === this.props.isoCode) {
      // console.log(layer);
      // console.log(feature);
      layer.setStyle({ fillColor: '#fff' });
      // eslint-disable-next-line
      latLngNE.push(layer._bounds._northEast.lat, layer._bounds._northEast.lng);
      // eslint-disable-next-line
      latLngSW.push(layer._bounds._southWest.lat, layer._bounds._southWest.lng);
      bounds.push(latLngNE, latLngSW);
      for (let i = 0; i < capitalsList.length; i += 1) {
        if (capitalsList[i].capital === 'primary' && capitalsList[i].iso3 === this.props.isoCode) {
          capitalPos.push(capitalsList[i].lat, capitalsList[i].lng);
          // alert(capitalsList[i].lat);
          // alert(capitalsList[i].lng);
          break;
        }
      }
      this.hasCapital = true;
      this.setState({ capitalPos });
      this.setState({ bounds });
    } else {
      layer.setStyle({ fillColor: `${classes.otherCountryColor}` });
    }
  }

  getCapital() {
    const capitalPos = [];
    for (let i = 0; i < capitalsList.length; i += 1) {
      if (capitalsList[i].capital === 'primary' && capitalsList[i].iso3 === this.props.isoCode) {
        capitalPos.push(capitalsList[i].lat, capitalsList[i].lng);
        break;
      }
    }
    this.setState({ capitalPos });
    this.hasCapital = true;
  }

  render() {
    return (
      <div>
        <Map
          center={[50, 10]}
          zoom={15}
          // zoomControl={false}
          zoomControl
          // maxZoom={7}
          // attributionControl
          scrollWheelZoom={false}
          dragging
          animate
          bounds={this.state.bounds}
          fitBounds={this.state.bounds}
          // boundsOptions={{ padding: [-3000, -3000] }}
          easeLinearity={0.35}
          style={{
            height: this.props.height,
            backgroundColor: `${classes.femmeParPaysColor}`,
          }}
        >
          <GeoJSON
            data={worldGeoJSON}
            style={() => ({
              color: `${classes.femmeParPaysColor}`,
              weight: 0.7,
              fillOpacity: 1,
            })}
            onEachFeature={this.onEachFeature}
          />
          {this.hasCapital === false ? this.getCapital() : null}
          <Circle
            center={this.state.capitalPos}
            color="black"
            radius={20}
            weight={5}
          >
            <Tooltip permanent direction="center" className={classes.LabelStyle}>
              <span className={classes.CapitalName}>{this.props.capital}</span>
            </Tooltip>
          </Circle>
        </Map>
      </div>
    );
  }
}

Carto.propTypes = {
  capital: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
  isoCode: propTypes.string.isRequired,
};
