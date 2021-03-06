import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HCExporting from 'highcharts/modules/exporting';
import HCOfflineExporting from 'highcharts/modules/offline-exporting';

import GraphHeader from './Shared/GraphHeader';
import GraphMenu from './Shared/GraphMenu';
import SimpleGraph from './SimpleGraph';
import MultipleGraph from './MultipleGraph';
import { ODS_API_KEY } from '../../../config/config';

import classes from './GraphCurie.scss';

HCExporting(Highcharts);
HCOfflineExporting(Highcharts);

const params = require('./GraphCurie-data/indicateurs.json');
const isoList = require('../../Homepage/Components/CountriesList/countriesList.json');

// CODE WORDL : WLD
// CODE OCDE : OED
// CODE EUROPE : EUU

// TODO ->
// Ajouter switch bar ou courbe
// Regrouper filterData au meme endroit
// Menu indépendant

/**
 * GraphCurie
 * Url : <br/>
 * Description : Gestions des données (appels API) + tri et appel du graph<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

class GraphCurie extends Component {
  constructor(props) {
    super(props);
    this.country = this.props.countryCode.toUpperCase();
    this.graphFormat = null;
    this.countryList = [this.props.countryCode.toUpperCase()];
    this.graphIndex = 0;
    this.allData = [];
    this.indic = 0;
    this.colors = [];
    this.tempColor = [];
    this.refArray = [];
    this.state = {
      simpleGraph: true,
      isMissing: true,
      filterData: null,
      countryList: [],
      exportType: '',
    };
    this.exportAllGraphs = this.exportAllGraphs.bind(this);
    this.getData = this.getData.bind(this);
    this.getGraphValues = this.getGraphValues.bind(this);
    this.getLegend = this.getLegend.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
    this.handleType = this.handleType.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.getColors();

    // On vérifie si le code iso 3 existe dans la liste des pays disponibles
    let isMissing = true;
    if (isoList.find(el => el.ISO_alpha3 === this.country) !== 'undefined') {
      isMissing = false;
    }
    this.setState({ isMissing });

    // On appelle la fonction qui va récup les données du graph
    this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
  }

  // Cette fonction va chercher les données en fonction de l'indicateur et de l'unité
  // eslint-disable-next-line class-methods-use-this
  async getData(iso, label, indic, index) {
    const code = params[label][indic].unit[index].code;
    const res = await axios.get(`https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?apikey=${ODS_API_KEY}&dataset=curiexplore-donnees-quantitatives&rows=150&sort=country_code&refine.country_code=${iso}&refine.code=${code}`);
    return (res.data.records);
  }

  // On recup les couleurs
  getColors() {
    this.colors.push(classes.firstCountry);
    this.colors.push(classes.secondCountry);
    this.colors.push(classes.thirdCountry);
    this.colors.push(classes.monde);
    this.colors.push(classes.ocde);
    this.colors.push(classes.ue);
    this.tempColor[0] = classes.firstCountry;
  }

  async getGraphValues(label, index, indic) {
    // On vérifie si le label existe pour la récupération des indicateurs et des codes
    if (params[label] == null) {
      this.setState({ isMissing: true });
      return;
    }

    // On créé tempData qui va contenir les différentes données
    let tempData = [];
    for (let i = 0; i < this.countryList.length; i += 1) {
      tempData.push(null);
    }

    // On met à jour l'index (définit quel code choisir pour l'indicateur choisi)
    this.graphIndex = index;

    // On reset les données
    this.setState({ filterData: null });

    // On vérifie si la data est dispo afin d'éviter les requêtes inutiles
    for (let i = 0; i < this.countryList.length; i += 1) {
      for (let j = 0; j < this.allData.length; j += 1) {
        // Si le pays et le code correspondants sont déjà rentrés, on les met dans tempData
        if ((this.allData[j][0] === this.countryList[i]) && (this.allData[j][1] === params[label][indic].unit[index].code)) {
          tempData[i] = this.allData[2];
          break;
        }
      }
    }

    const results = [];
    for (let i = 0; i < tempData.length; i += 1) {
      // Si c'est null, on a pas recup les données via allData
      if (tempData[i] === null) {
        // On met l'appel de fonction à faire dans results (pour await toutes les réponses avant de continuer)
        results.push(this.getData(this.countryList[i], label, indic, index));
      } else {
        // Sinon on fait pas de requete
        results.push('');
      }
    }

    // On effectue toutes les requêtes nécssaires
    tempData = await Promise.all(results);
    for (let i = 0; i < results.length; i += 1) {
      if (tempData[i] === '') {
        for (let j = 0; j < this.allData.length; j += 1) {
          if ((this.allData[j][0] === this.countryList[i]) && (this.allData[j][1] === params[label][indic].unit[index].code)) {
            tempData[i] = this.allData[j][2];
          }
        }
      } else {
        const tmpLbl = [];
        tmpLbl.push(this.countryList[i]);
        tmpLbl.push(params[label][indic].unit[index].code);
        tmpLbl.push(tempData[i]);
        this.allData.push(tmpLbl);
      }
    }
    this.graphFormat = params[label][indic].type;
    this.setState({ countryList: this.countryList, filterData: tempData });
  }

  getLegend() {
    const ctryList = [];
    for (let i = 0; i < this.countryList.length; i += 1) {
      for (let j = 0; j < isoList.length; j += 1) {
        if (this.countryList[i] === isoList[j].ISO_alpha3) {
          ctryList.push(
            <span className={classes.btnDefaultCountry} key={`graphCurie_${j}`}>
              <span className={classes.dot} style={{ backgroundColor: this.tempColor[i] }} />
              {isoList[j].Pays}
            </span>,
          );
        }
      }
    }
    return (ctryList);
  }

  setRef(array) {
    this.refArray = array;
  }

  // eslint-disable-next-line
  getSVG(charts, options) {
    const svgArr = [];
    let top = 0;
    let width = 0;

    Highcharts.each(charts, (chart) => {
      const svgres = chart.getSVG();
      let svg;
      // eslint-disable-next-line
      const svgWidth = +svgres.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
      // eslint-disable-next-line
      const svgHeight = +svgres.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1];

      svg = svgres.replace('<svg', `<g transform="translate(0,${top})" `);
      svg = svg.replace('</svg>', '</g>');

      top += svgHeight;
      width = Math.max(width, svgWidth);

      svgArr.push(svg);
    });
    return (`<svg height="${top}" width="${width}" version="1.1" xmlns="http://www.w3.org/2000/svg">${svgArr.join('')}</svg>`);
  }

  handleType(id) {
    if (id === 0) {
      // alert('graph simple');
      this.setState({ simpleGraph: true });
    } else {
      // alert('graph complexe');
      this.setState({ simpleGraph: false });
    }
  }

  // Cette section doit être appelée direct dans le menu
  toggleCountry(id, colors, countryList) {
    const tempList = [];
    for (let i = 0; i < countryList.length; i += 1) {
      if (countryList[i] !== '') {
        tempList.push(countryList[i]);
      }
    }
    this.countryList = tempList;
    this.tempColor = [this.colors[0]];

    for (let i = 0; i < colors.length; i += 1) {
      if (colors[i] !== '#ccc') {
        this.tempColor.push(colors[i]);
      }
    }

    if (this.state.simpleGraph) {
      this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
    } else {
      this.setState({ countryList: this.countryList });
      this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
    }
  }


  exportPdf() {
    // alert('toto');
    // const options = Highcharts.merge(Highcharts.getOptions().exporting, { type: 'application/pdf' });
    const options = Highcharts.merge(Highcharts.getOptions().exporting, { type: 'application/pdf' });
    // console.log(options);
    // console.log(options.chartOptions);
    // // Merge the options

    // Post to export server
    // this.refArray = [this.refArray[0]];
    // alert(this.props.graphType);
    Highcharts.post(options.url, {
      filename: 'test' || 'chart',
      type: options.type,
      svg: this.getSVG(this.refArray, options),
    });
  }

  exportAllGraphs(val) {
    if (val === 'pdf') {
      this.exportPdf();
    }
  }


  handleIndic(event) {
    let i = 0;
    for (i = 0; i < params[this.props.graphType].length; i += 1) {
      if (params[this.props.graphType][i].name === event.target.value) {
        break;
      }
    }
    this.indic = i;
    this.graphIndex = 0;
    this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
  }

  render() {
    return (
      <div className={classes.GraphCurie}>
        <Row className={classes.Shadow}>
          { this.country === null ? <div>Initializing</div>
            : [this.state.isMissing ? <div>Ce graph est indisponible pour le moment.</div>
              : (
                <Col>
                  <GraphHeader
                    exportAllGraphs={this.exportAllGraphs}
                    graphType={this.props.graphType}
                    handleIndic={this.handleIndic}
                    handleType={this.handleType}
                    indicNb={params[this.props.graphType].length}
                  />
                  <Row>
                    <Col sm={11}>
                      {this.getLegend()}
                    </Col>
                    <Col>
                      <i style={{ marginTop: '15px', paddingLeft: '25%' }} className="fas fa-info-circle" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className={classes.Menu}>
                      <GraphMenu
                        colors={this.colors}
                        countryCode={this.props.countryCode}
                        toggleCountry={this.toggleCountry}
                        indic={this.indic}
                        graphIndex={this.graphIndex}
                        graphType={this.props.graphType}
                      />
                    </Col>
                  </Row>
                  {this.state.filterData
                    ? [this.state.simpleGraph
                      ? (
                        <SimpleGraph
                          colors={this.tempColor}
                          data={this.state.filterData}
                          getGraphValues={this.getGraphValues}
                          graphIndex={this.graphIndex}
                          graphType={this.props.graphType}
                          indic={this.indic}
                          type={this.graphFormat}
                        />
                      )
                      : (
                        <MultipleGraph
                          colors={this.tempColor}
                          countryList={this.state.countryList}
                          // exportTitle={'chart_test'}
                          exportType={this.state.exportType}
                          graphType={this.props.graphType}
                          setRef={this.setRef}
                        />
                      ),
                    ] : <div style={{ backgroundColor: 'white' }}>Loading</div>
                  }
                </Col>
              ),
            ]
          }
        </Row>
      </div>
    );
  }
}

export default GraphCurie;

GraphCurie.propTypes = {
  countryCode: PropTypes.string.isRequired,
  graphType: PropTypes.string.isRequired,
};
