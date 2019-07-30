import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import GraphHeader from './Shared/GraphHeader';
import GraphMenu from './Shared/GraphMenu';
import SimpleGraph from './SimpleGraph';
import MultipleGraph from './MultipleGraph';

import classes from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');
const isoList = require('../../Homepage/CountriesList/countriesList.json');
const configFile = require('../../../config/config.js');

const url = configFile.CURIE_URL;

// const url = 'http://185.161.45.213/datastore/curie';


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
    this.country = null;
    this.graphFormat = null;
    this.countryList = [this.props.countryCode.toUpperCase()];
    this.graphIndex = 0;
    this.allData = [];
    this.indic = 0;
    this.colors = [];
    this.tempColor = [];
    this.state = {
      simpleGraph: true,
      isMissing: true,
      filterData: null,
      countryList: [],
    };
    this.getGraphValues = this.getGraphValues.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.getData = this.getData.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
    this.handleType = this.handleType.bind(this);
    this.getLegend = this.getLegend.bind(this);
  }

  componentDidMount() {
    let i = 0;

    this.getColors();

    // On vérifie si le code iso 3 est valide
    this.country = this.props.countryCode.toUpperCase();
    for (i = 0; i < isoList.length; i += 1) {
      if (isoList[i].ISO_alpha3 === this.country) {
        this.setState({ isMissing: false });
        break;
      }
    } // Si on arrive a la fin on a pas trouvé le pay
    if (i === isoList.length - 1) {
      this.setState({ isMissing: true });
      return;
    }
    // On appelle la fonction qui va récup les données du graph
    this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
  }

  // Cette fonction va chercher les données en fonction de l'inciateur et de l'unité
  async getData(i, label, indic, index) {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Basic ${configFile.CURIE_AUTH_KEY}`,
      },
      params: {
        where: `{"country_code":"${this.countryList[i]}","code":"${params[label][indic].unit[index].code}"}`,
      },
    });
    return (res.data);
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
        }
      }
    }

    const results = [];
    for (let i = 0; i < tempData.length; i += 1) {
      // Si c'est null, on a pas recup les données via allData
      if (tempData[i] === null) {
        // On met l'appel de fonction à faire dans results (pour await toutes les réponses avant de continuer)
        results.push(this.getData(i, label, indic, index));
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
            <span className={classes.btnDefaultCountry}>
              <span className={classes.dot} style={{ backgroundColor: this.tempColor[i] }} />
              {isoList[j].Pays}
            </span>,
          );
        }
      }
      if (this.countryList[i] === 'WLD' || this.countryList[i] === 'OED' || this.countryList[i] === 'EUU') {
        ctryList.push(
          <span className={classes.btnDefaultCountry}>
            <span className={classes.dot} style={{ backgroundColor: this.tempColor[i] }} />
            {this.countryList[i]}
          </span>,
        );
      }
    }
    return (ctryList);
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
    }
  }

  render() {
    return (
      <Row>
        { this.country === null ? <div>Initializing</div>
          : [this.state.isMissing ? <div>Ce graph est indisponible pour le moment.</div>
            : (
              <Col className={classes.GraphCurie}>
                <GraphHeader
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
                        graphType={this.props.graphType}
                      />
                    ),
                  ] : <div style={{ backgroundColor: 'white' }}>Loading</div>
                }
              </Col>
            ),
          ]
        }
      </Row>
    );
  }
}

export default GraphCurie;

GraphCurie.propTypes = {
  countryCode: PropTypes.string.isRequired,
  graphType: PropTypes.string.isRequired,
  // language: PropTypes.string.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};
