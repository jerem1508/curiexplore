import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
// import { Row, Col } from 'react-bootstrap';
import {
  Map, Marker, TileLayer, GeoJSON
} from 'react-leaflet';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Footer from '../Shared/Footer/Footer';

import classes from './Cartographie.scss';
import worldGeoJSON from '../Homepage/Maps/custom.geo.json';

export default class Carto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // classes.blueColor+50
      zoom: 2,
      btnColor: [classes.blueColor, classes.blueColor + 50]
    };
    this.zoom = 2;
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  onEachFeature = (feature, layer) => {
    console.log('layer : ' + layer);
    console.log('feature :' + feature);
    layer.on({
      click: () => { window.open(`/fiche/${feature.properties.iso_a3}`, '_blank'); },
      // click: () => { window.location.href = `/fiche/${feature.properties.iso_a3}`; },
    });

    layer.bindTooltip(feature.properties.name);
  }

  zoomIn() {
    let zoom = this.state.zoom;
    const colors = this.state.btnColor;

    if (zoom < 7) {
      colors[1] = classes.blueColor;
      this.setState({ zoom: zoom + 1, btnColor: colors });
    }
    zoom += 1;
    if (zoom === 7) {
      colors[0] = classes.blueColor + 50;
      this.setState({ btnColor: colors });
    }
  }

  zoomOut() {
    let zoom = this.state.zoom;
    const colors = this.state.btnColor;

    if (zoom > 2) {
      colors[0] = classes.blueColor;
      this.setState({ zoom: zoom - 1, btnColor: colors });
    }
    zoom -= 1;
    if (zoom === 2) {
      colors[1] = classes.blueColor + 50;
      this.setState({ btnColor: colors });
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          language={this.props.language}
          switchLanguage={this.props.switchLanguage}
        />
        <HeaderTitle
          language={this.props.language}
          labelkey="cartographie"
          url1="/"
          url2="/cartographie"
        />
        <div>
          {
          // <Map center={position} zoom={13} style={{ height: '200px' }}>
          //   <TileLayer
          //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          //   />
          // </Map>
        }
          <Map
            // className={classes.Map}
            center={[50, 10]}
            zoom={this.state.zoom}
            minZoom={1}
            zoomControl={false}
            maxZoom={7}
            attributionControl
            doubleClickZoom
            scrollWheelZoom={false}
            dragging
            animate
            maxBounds={[[85, -180], [-85, 180]]}
            easeLinearity={0.35}
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
          <div className={classes.exportBtn}>
            <span style={{ float: 'left' }}>
              <button className={classes.dot} style={{ backgroundColor: this.state.btnColor[0] }} type="button" onClick={this.zoomIn}><i className="fas fa-plus" /></button>
              <button className={classes.dot} style={{ backgroundColor: this.state.btnColor[1] }} type="button" onClick={this.zoomOut}><i className="fas fa-minus" /></button>
            </span>
            <span style={{ float: 'right' }}>
              <button className={classes.dot} type="button"><i className="fas fa-share-alt" /></button>
              <button className={classes.dot} type="button"><i className="fas fa-code" /></button>
              <button className={classes.dot} type="button" onClick={this.exportChartPng}><i className="fas fa-image" /></button>
              <button className={classes.dot} type="button" onClick={this.exportChartCsv}><i className="fas fa-table" /></button>
            </span>
          </div>
        </div>
        <Newsletter language={this.props.language} />
        <Footer language={this.props.language} />
      </Fragment>
    );
  }
}

Carto.propTypes = {
  language: propTypes.string.isRequired,
  switchLanguage: propTypes.func.isRequired,
};
