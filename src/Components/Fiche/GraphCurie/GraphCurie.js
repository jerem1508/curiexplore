import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import HighChartsBar from './Graphs/HighChartsBar';
import GraphHeader from './Shared/GraphHeader';

import classes from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');
const isoList = require('../../Homepage/CountriesList/countriesList.json');

const url = 'http://10.243.98.74/datastore/curie';

class GraphCurie extends Component {
  constructor(props) {
    super(props);
    this.country = null;
    this.countryList = [this.props.countryCode.toUpperCase()];
    this.graphIndex = 0;
    this.allData = [];
    this.indic = 0;
    this.colors = [];
    this.state = {
      isMissing: true,
      filterData: null,
    };
    this.getGraphValues = this.getGraphValues.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.getData = this.getData.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
    this.getInputs = this.getInputs.bind(this);
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
    if (i === 249) {
      this.setState({ isMissing: true });
      return;
    }
    // On appelle la fonction qui va récup les données du graph
    this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
  }

  // Cette fonction va chercher les données en fonction de l'inciateur et de l'unité
  async getData(i, label, indic, index) {
    const res = await axios.get(url, {
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
    this.colors.push(classes.mondeCountry);
    this.colors.push(classes.ocdeCountry);
    this.colors.push(classes.ueCountry);
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
    this.setState({ filterData: tempData });
  }

  getLegend() {
    const ctryList = [];
    for (let i = 0; i < this.countryList.length; i += 1) {
      for (let j = 0; j < isoList.length; j += 1) {
        if (this.countryList[i] === isoList[j].ISO_alpha3) {
          if (i === 0) {
            ctryList.push(
              <span className={classes.btnDefaultCountry}>
                <span className={classes.dot} style={{ backgroundColor: this.colors[i] }} />
                {isoList[j].Pays}
              </span>,
            );
          } else {
            ctryList.push(
              <span className={classes.btnCountry} onClick={() => this.toggleCountry(this.countryList[i])}>
                <span className={classes.dot} style={{ backgroundColor: this.colors[i] }} />
                {isoList[j].Pays}
              </span>
            );
          }
        }
      }
    }
    return (ctryList);
  }

  getInputs() {
    const radioList = [];
    for (let i = 0; i < params[this.props.graphType][this.indic].unit.length; i += 1) {
      if (i === this.graphIndex) {
        radioList.push(
          <div>
            <input type="radio" name="test" checked value={params[this.props.graphType][this.indic].unit[i].label} onChange={() => this.getGraphValues(this.props.graphType, i, this.indic)} />
            {params[this.props.graphType][this.indic].unit[i].label}
          </div>,
        );
      } else {
        radioList.push(
          <div>
            <input type="radio" name="test" value={params[this.props.graphType][this.indic].unit[i].label} onChange={() => this.getGraphValues(this.props.graphType, i, this.indic)} />
            {params[this.props.graphType][this.indic].unit[i].label}
          </div>,
        );
      }
    }
    return (<div>Afficher en : {radioList}</div>);
  }

  getSource() {
    const srcList = [];
    for (let i = 0; i < this.state.filterData.length; i += 1) {
      for (let j = 0; j < this.state.filterData[i].data.length; j += 1) {
        if (!srcList.includes(this.state.filterData[i].data[j].source)) {
          srcList.push(this.state.filterData[i].data[j].source);
        } else if (srcList.length > 1) {
          srcList.push(`, ${this.state.filterData[i].data[j].source}`);
        }
      }
    }
    if (srcList.length > 1) {
      return(<div>Sources : {srcList}</div>);
    }
    return(<div>Source : {srcList}</div>);
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

  toggleCountry(id) {
    if (!this.countryList.includes(id)) {
      this.countryList.push(id);
    } else {
      const index = this.countryList.indexOf(id);
      if (index > -1) {
        this.countryList.splice(index, 1);
      }
    }
    this.getGraphValues(this.props.graphType, this.graphIndex, this.indic);
  }

  render() {
    return (
      <div style={{ marginLeft: '31px', marginTop: '16px', height: 'auto', minHeight: '650px' }} className={classes.GraphCurie}>
        { this.country === null ? <div>Initializing</div>
          : [this.state.isMissing ? <div>Ce graph est indisponible pour le moment.</div>
            : (
              <div style={{ width: 'auto' }}>
                <GraphHeader handleIndic={this.handleIndic} value={this.state.label} indicNb={params[this.props.graphType].length} graphType={this.props.graphType} />
                <Row>
                  <Col sm={11} className="pl-0 pr-0" style={{ display: 'inline' }}>
                    {this.getLegend()}
                  </Col>
                  <Col sm={1} className="pl-0 pr-0">
                    <i className="fas fa-info-circle" />
                  </Col>
                </Row>
                <Row>
                  <Col className={classes.Menu}>
                    menu
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-0 pr-0">
                    {this.state.filterData ? <HighChartsBar style={{ backgroundColor: 'white' }} colors={this.colors} data={this.state.filterData} /> : <div style={{ backgroundColor: 'white' }}>Loading</div>}
                    {this.getInputs()}
                    <input type="checkbox" name="love" value="love" id="FRA" onChange={e => this.toggleCountry(e.target.id)} />
                      FRA
                    <input type="checkbox" name="love" value="love" id="CAN" onChange={e => this.toggleCountry(e.target.id)} />
                      CAN
                    {this.state.filterData ? this.getSource() : null}
                  </Col>
                </Row>
              </div>
            ),
          ]
        }
      </div>
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
