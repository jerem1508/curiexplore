import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Map, withLeaflet, GeoJSON,
} from 'react-leaflet';
import PrintControlDefault from 'react-leaflet-easyprint';

import MapMenu from './MapMenu';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Footer from '../Shared/Footer/Footer';

import classes from './Cartographie.scss';
import worldGeoJSON from '../Homepage/Maps/custom.geo.json';

const config = require('./Cartographie-data/indicateurs_carto.json');
const isoList = require('../Homepage/CountriesList/countriesList.json');

const PrintControl = withLeaflet(PrintControlDefault);

export default class Carto extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.zoom = 2;
    this.layers = [];
    this.colors = [];
    this.countryDataIso = [];
    this.year = 2009;
    this.state = {
      zoom: 2,
      year: 0,
      btnColor: [classes.blueColor, classes.blueColor + 50],
    };
    this.changeLayer = this.changeLayer.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.exportChartPng = this.exportChartPng.bind(this);
    this.setData = this.setData.bind(this);
  }

  setData(data, size, confIndex) {
    if (size === 4) {
      this.colors.push(classes.quatrePalliersColor1);
      this.colors.push(classes.quatrePalliersColor2);
      this.colors.push(classes.quatrePalliersColor3);
      this.colors.push(classes.quatrePalliersColor4);
    } else if (size === 5) {
      this.colors.push(classes.cinqPalliersColor1);
      this.colors.push(classes.cinqPalliersColor2);
      this.colors.push(classes.cinqPalliersColor3);
      this.colors.push(classes.cinqPalliersColor4);
      this.colors.push(classes.cinqPalliersColor5);
    } else {
      this.colors.push(classes.sixPalliersColor1);
      this.colors.push(classes.sixPalliersColor2);
      this.colors.push(classes.sixPalliersColor3);
      this.colors.push(classes.sixPalliersColor4);
      this.colors.push(classes.sixPalliersColor5);
      this.colors.push(classes.sixPalliersColor6);
    }
    this.data = data;
    this.size = size;
    // alert(this.data[0]);
    // alert(this.data[0].data[0].country_code);
    // alert(this.data[0].data[0].year);
    this.countryDataIso = [];
    this.changeLayer(null, null, confIndex, size);
    this.setState({ year: this.year });
    // console.log(this.countryDataIso);
    this.changeColorMissingData();
  }

  changeLayer(feature, layer, confIndex, size) {
    if (this.data.length > 0) {
      // alert('year : ' + this.data[0].data[0].year);
      // alert('code : ' + this.data[0].data[0].country_code);
      // alert(size);
      for (let i = 0; i < this.data.length; i += 1) {
        let hasData = false;
        let l = 0;
        // alert(this.data[i].data.length);
        for (l = 0; l < this.data[i].data.length; l += 1) {
          if (this.data[i].data[l].year === this.year) {
            hasData = true;
            this.countryDataIso.push(this.data[i].data[l].country_code);
            break;
          }
        }
        for (let j = 0; j < this.layers.length; j += 1) {
          if (hasData === true) {
            if (this.layers[j].feature.properties.adm0_a3 === this.data[i].data[l].country_code) {
              let k = 0;
              // alert(this.data[i].data[0].value);
              for (k = 0; k < size; k += 1) {
                if (this.data[i].data[l].value >= config[confIndex].steps[0].limits[k][0] && this.data[i].data[l].value < config[confIndex].steps[0].limits[k][1]) {
                  break;
                }
              }
              // alert(this.data[i].data[0].year);
              // alert(this.data[i].data[0].value);
              // alert(config[confIndex].steps[0].limits[0][1]);
              this.layers[j].setStyle({ fillColor: this.colors[k] });
              this.layers[j].bindTooltip(this.layers[j].feature.properties.admin);
            }
          } else if (this.data[i].data.length > 0) {
            if (this.data[i].data[0].country_code === this.layers[j].feature.properties.adm0_a3) {
              this.layers[j].setStyle({ fillColor: classes.greyAColor + 40 });
              this.layers[j].bindTooltip(`${this.layers[j].feature.properties.admin} : pas de données disponibles.`);
              this.countryDataIso.push(this.data[i].data[0].country_code);
            }
            // alert('hasData: ' + hasData);
            // alert('data length: ' + this.data[i].data.length);
            // alert('toto');
          }
          // else if (this.data[i].length > 0) {
          //   alert('test');
          //   if (this.data[i].data[0].country_code === this.layers[j].feature.properties.adm0_a3) {
          //     this.layers[j].setStyle({ fillColor: `${classes.greyAColor + 40}` });
          //   }
          // }
        }
      }
    } else {
      layer.setStyle({ fillColor: `${classes.greyAColor + 40}` });
      layer.bindTooltip(`${layer.feature.properties.admin} : pas de données disponibles.`);
      this.layers.push(layer);
    }
    // ajouter les pays check dans tableau et comparer avec countryList et set les layers
  }

  changeColorMissingData() {
    for (let i = 0; i < isoList.length; i += 1) {
      if (this.countryDataIso.indexOf(isoList[i].ISO_alpha3) === -1) {
        for (let j = 0; j < this.layers.length; j += 1) {
          if (isoList[i].ISO_alpha3 === this.layers[j].feature.properties.adm0_a3) {
            this.layers[j].setStyle({ fillColor: `${classes.greyAColor + 40}` });
          }
        }
      }
    }
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

  print() {
    this.printControl.printMap('A4Landscape', 'test_nom_fichier');
  }

  exportChartPng() {
    this.printControl.printMap('A4Landscape', 'test_nom_fichier');
  }

  render() {
    const downloadOptions = {
      position: 'bottomright',
      filename: 'test_nom_fichier',
      sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
      title: 'Télécharger au format PNG',
      hideControlContainer: false,
      exportOnly: true,
    };
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
          <MapMenu setData={this.setData} />
          <Map
            // className={classes.Map}
            center={[50, 10]}
            zoom={this.state.zoom}
            minZoom={2}
            zoomControl={false}
            maxZoom={7}
            attributionControl
            doubleClickZoom={false}
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
                weight: 0.7,
                fillOpacity: 1,
              })}
              onEachFeature={this.changeLayer}
            />
            <PrintControl ref={(ref) => { this.printControl = ref; }} {...downloadOptions} />
          </Map>
          <Container>
            <Row>
              <Col sm={1} />
              <Col sm={8} className={classes.exportBtn}>
                <span>
                  <button className={classes.dot} style={{ backgroundColor: this.state.btnColor[0] }} type="button" onClick={this.zoomIn}><i className="fas fa-plus" /></button>
                  <button className={classes.dot} style={{ backgroundColor: this.state.btnColor[1] }} type="button" onClick={this.zoomOut}><i className="fas fa-minus" /></button>
                </span>
              </Col>
              <Col sm={3} className={classes.exportBtn}>
                <span>
                  <button className={classes.dot} type="button"><i className="fas fa-share-alt" /></button>
                  <button className={classes.dot} type="button"><i className="fas fa-code" /></button>
                  <button className={classes.dot} type="button" onClick={this.exportChartPng}><i className="fas fa-image" /></button>
                  <button className={classes.dot} type="button" onClick={this.exportChartCsv}><i className="fas fa-table" /></button>
                </span>
              </Col>
            </Row>
          </Container>
          <div>{this.state.year}</div>
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
