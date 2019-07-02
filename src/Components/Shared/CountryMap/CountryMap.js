import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { Row, Col } from 'react-bootstrap';
import {
  Map, GeoJSON,
} from 'react-leaflet';


import classes from './Cartographie.scss';
import worldGeoJSON from '../Homepage/Maps/custom.geo.json';

export default class Carto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: [[85, -180], [-85, 180]],
    };
  }

  onEachFeature = (feature, layer) => {
    const latLngNE = [];
    const latLngSW = [];
    const bounds = [];

    if (feature.properties.adm0_a3 === this.props.isoCode) {
      // eslint-disable-next-line
      latLngNE.push(layer._bounds._northEast.lat, layer._bounds._northEast.lng);
      // eslint-disable-next-line
      latLngSW.push(layer._bounds._southWest.lat, layer._bounds._southWest.lng);
      bounds.push(latLngNE, latLngSW);
      this.setState({ bounds });
    }
  }

  render() {
    return (
      <Map
        center={[50, 10]}
        zoom={15}
        // zoomControl={false}
        // maxZoom={7}
        // attributionControl
        scrollWheelZoom={false}
        dragging
        animate
        bounds={this.state.bounds}
        // fitBounds={this.state.bounds}
        // boundsOptions={{ padding: [-3000, -3000] }}
        // maxBounds={[[80.657, 31.293], [58.078, 4.992]]}
        // easeLinearity={0.35}
        style={{
          height: '700px',
          backgroundColor: '#fff',
        }}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: '#fff',
            fillColor: `${classes.sixPalliersColor5}`,
            weight: 0.7,
            fillOpacity: 1,
          })}
          onEachFeature={this.onEachFeature}
        />
      </Map>
    );
  }
}

Carto.propTypes = {
  isoCode: propTypes.string.isRequired,
};
