import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Map, withLeaflet, GeoJSON,
} from 'react-leaflet';
import PrintControlDefault from 'react-leaflet-easyprint';

import MapMenu from './MapMenu/MapMenu';
import MapSlider from './MapSlider';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Footer from '../Shared/Footer/Footer';

import classes from './Cartographie.scss';
import worldGeoJSON from '../Homepage/Maps/custom.geo.json';

const config = require('./Cartographie-data/indicateurs_carto.json');
const isoList = require('../Homepage/CountriesList/countriesList.json');

const PrintControl = withLeaflet(PrintControlDefault);

/**
 * Cartographie
 * Url : /cartographie<br/>
 * Description : Gestions de la carte<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

export default class Carto extends Component {
  state = {
    data: [],
    zoom: 2,
    layers: [],
    colors: [],
    countryDataIso: [],
    confIndex: 0,
    size: 0,
    yearInterval: [2008, 2017],
    year: 2008,
    btnColor: [classes.blueColor, classes.blueColor + 50],
  };

  componentDidMount() {
    this.setData([], 0, [], 0);
  }

  setData = (data, size, colors, confIndex) => {
    this.data = data;
    this.size = size;
    this.colors = colors;
    this.countryDataIso = [];
    this.confIndex = confIndex;
    this.initYear(confIndex);
    this.changeLayer(null, null, confIndex, size);
    this.changeColorMissingData();
  }

  changeLayer = (feature, layer, confIndex, size) => {
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i += 1) {
        let hasData = false;
        if (this.data[i].year === this.state.year) {
          hasData = true;
          this.countryDataIso.push(this.data[i].country_code);
        }
        for (let j = 0; j < this.layers.length; j += 1) {
          if (hasData === true) {
            if (this.layers[j].feature.properties.adm0_a3 === this.data[i].country_code) {
              let k = 0;
              for (k = 0; k < size; k += 1) {
                if (this.data[i].value >= config[confIndex].steps[0].limits[k][0] && this.data[i].value < config[confIndex].steps[0].limits[k][1]) {
                  break;
                }
              }
              this.layers[j].setStyle({ fillColor: this.colors[k] });
              this.layers[j].bindTooltip(`${this.layers[j].feature.properties.admin}: ${this.data[i].value} ${config[this.confIndex].steps[0].unit}`);
            }
          } else if (this.data[i].length > 0) {
            if (this.data[i].country_code === this.layers[j].feature.properties.adm0_a3) {
              this.layers[j].setStyle({ fillColor: classes.greyAColor + 40 });
              this.layers[j].bindTooltip(`${this.layers[j].feature.properties.admin} : pas de données disponibles.`);
              this.countryDataIso.push(this.data[i].data[0].country_code);
            }
          }
        }
      }
    } else {
      layer.setStyle({ fillColor: `${classes.greyAColor + 40}` });
      layer.bindTooltip(`${layer.feature.properties.admin} : pas de données disponibles.`);
      layer.on({
        click: () => { window.open(`/fiche/${feature.properties.iso_a3}`, '_blank'); },
      });
      this.layers.push(layer);
    }
  }

  initYear = (confIndex) => {
    this.yearInterval = config[confIndex].years;
    this.setState({ year: config[confIndex].years[0] });
  }

  changeYear = (year) => {
    this.setState({ year });
    this.changeLayer(null, null, this.confIndex, this.size);
  }

  changeColorMissingData = () => {
    for (let i = 0; i < isoList.length; i += 1) {
      if (this.countryDataIso.indexOf(isoList[i].ISO_alpha3) === -1) {
        for (let j = 0; j < this.layers.length; j += 1) {
          if (isoList[i].ISO_alpha3 === this.layers[j].feature.properties.adm0_a3) {
            this.layers[j].bindTooltip(`${this.layers[j].feature.properties.admin} : pas de données disponibles.`);
            this.layers[j].setStyle({ fillColor: `${classes.greyAColor + 40}` });
          }
        }
      }
    }
  }

  zoomIn = () => {
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

  zoomOut = () => {
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

  print = () => {
    this.printControl.printMap('A4Landscape', 'test_nom_fichier');
  }

  exportChartPng = () => {
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
        <Header />
        <HeaderTitle
          labelkey="cartographie"
          url1="/"
          url2="/cartographie"
        />
        <div className={classes.Menu}>
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
        </div>
        <div style={{ backgroundColor: 'white' }}>
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
        </div>
        <div className={classes.Slider}>
          { /*
          <MapSlider
            yearInterval={this.yearInterval}
            defaultYear={config[this.confIndex].years[0]}
            changeYear={this.changeYear}
            type={config[this.confIndex].value}
          />
          */ }
        </div>
        <Newsletter />
        <Footer />
      </Fragment>
    );
  }
}
