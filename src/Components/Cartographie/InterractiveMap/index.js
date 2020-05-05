import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Map,
  GeoJSON,
} from 'react-leaflet';

import worldGeoJSON from '../../../Data/custom.geo.json';

import classes from './InterractiveMap.scss';

class InterractiveMap extends Component {
  state = {
    data: null,
    colorsScale: [],
    sixPalliersColors: [],
    cinqPalliersColors: [],
    quatrePalliersColors: [],
    currentScale: [],
  };

  componentDidMount() {
    // Sélection du jeux de couleurs
    let currentScale = null;
    switch (this.props.nbColors) {
      case 4:
        currentScale = 'quatrePalliersColors';
        break;
      case 5:
        currentScale = 'cinqPalliersColors';
        break;
      case 6:
        currentScale = 'sixPalliersColors';
        break;
      default:
        break;
    }

    this.setState({
      sixPalliersColors: ['#aaaaaa', classes.sixPalliersColor1, classes.sixPalliersColor2, classes.sixPalliersColor3, classes.sixPalliersColor4, classes.sixPalliersColor5, classes.sixPalliersColor6],
      cinqPalliersColors: ['#aaaaaa', classes.cinqPalliersColor1, classes.cinqPalliersColor2, classes.cinqPalliersColor3, classes.cinqPalliersColor4, classes.cinqPalliersColor5],
      quatrePalliersColors: ['#aaaaaa', classes.quatrePalliersColor1, classes.quatrePalliersColor2, classes.quatrePalliersColor3, classes.quatrePalliersColor4],
      currentScale,
      geoJson: worldGeoJSON,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      // Création de l'echelle de couleurs
      this.createColorsScale();

      // Met le code de l'indicateur dans le geoJson
      this.setGeoJson();
    }

    if (this.props.currentYear && this.props.data.length > 0 && prevProps.currentYear !== this.props.currentYear) {
      // Recherche de l'année en cours
      const data = this.props.data.find(dataYear => dataYear.year === this.props.currentYear).data;
      this.setState({ data });
    }
  }

  createColorsScale = () => {
    const colorsScale = [];
    const step = (this.props.valuesBounds[1] - this.props.valuesBounds[0]) / this.props.nbColors;

    colorsScale.push(this.props.valuesBounds[0]);
    for (let i = 1; i < this.props.nbColors; i += 1) {
      colorsScale.push(colorsScale[i - 1] + step);
    }
    this.setState({ colorsScale });
  }

  getIndexColor = (value) => {
    let idx = -1;
    for (let i = 0; i < this.props.nbColors; i += 1) {
      if (value > this.state.colorsScale[i]) {
        idx = i;
      }
    }

    return idx + 1;
  }

  changeLayer = (feature, layer) => {
    if (!this.state.data) { return; }
    // Fonction appelée sur pour chaque pays de la carte
    // Il faut donc retrouver sa valeur dans state.data
    // et définir sa couleur
    const currentISO = layer.feature.properties.iso_a3;
    const data = this.state.data.find(country => country.iso === currentISO);
    let indexColor = 0;
    if (data && data.value) {
      indexColor = this.getIndexColor(data.value);
    }

    // On applique la couleur en fonction de l'index trouvé
    layer.setStyle({ fillColor: this.state[this.state.currentScale][indexColor] });
  }

  changeLayers = (worldGeoJSONToColor) => {
    worldGeoJSONToColor.features.forEach((feature) => {
      // eslint-disable-next-line no-param-reassign
      feature.properties.indicator = this.props.currentIndicator;
    });

    return worldGeoJSONToColor;
  }

  setGeoJson = () => {
    const newGeoJSON = { ...worldGeoJSON };
    this.setState({ geoJson: this.changeLayers(newGeoJSON) });
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
    return (
      <Fragment>
        <section>
          <Map
            center={[50, 10]}
            zoom={2}
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
              height: '750px',
              backgroundColor: '#fff', // #4682B8 (blue)
            }}
          >
            <GeoJSON
              key={`${this.props.currentIndicator}_${this.props.currentYear}_${this.state.data ? this.state.data[0].value : 'z'}`}
              data={this.state.geoJson}
              style={() => ({
                color: '#fff',
                weight: 0.7,
                fillOpacity: 1,
                fillColor: '#aaa',
              })}
              onEachFeature={this.changeLayer}
            />
            {
              /*
              <PrintControl ref={(ref) => { this.printControl = ref; }} {...downloadOptions} />
              */
            }
          </Map>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className={`col-8 col-offset-1 ${classes.exportBtn}`}>
                <span>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button" onClick={this.zoomIn}><i className="fas fa-plus" /></button>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button" onClick={this.zoomOut}><i className="fas fa-minus" /></button>
                </span>
              </div>
              <div className={`col-3 ${classes.exportBtn}`}>
                <span>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button"><i className="fas fa-share-alt" /></button>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button"><i className="fas fa-code" /></button>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button" onClick={this.exportChartPng}><i className="fas fa-image" /></button>
                  <button className={`btn m-1 ${classes.Btn} ${classes.BtnBlue}`} type="button" onClick={this.exportChartCsv}><i className="fas fa-table" /></button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default InterractiveMap;

InterractiveMap.propTypes = {
  currentYear: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  nbColors: PropTypes.number.isRequired,
  valuesBounds: PropTypes.array.isRequired,
  currentIndicator: PropTypes.string.isRequired,
};
