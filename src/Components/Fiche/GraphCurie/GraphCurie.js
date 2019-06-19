import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import HighChartsBar from './Graphs/HighChartsBar';
import GraphHeader from './Shared/GraphHeader';

import colorsVar from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');
const isoList = require('./GraphCurie-data/iso3.json');

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
      if (isoList[i]['alpha-3'] === this.country) {
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
    this.colors.push(colorsVar.firstCountry);
    this.colors.push(colorsVar.secondCountry);
    this.colors.push(colorsVar.thirdCountry);
    this.colors.push(colorsVar.mondeCountry);
    this.colors.push(colorsVar.ocdeCountry);
    this.colors.push(colorsVar.ueCountry);
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
      ctryList.push(<p style={{ display: 'inline' }}>{this.countryList[i]}</p>);
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
      <div style={{ marginLeft: '31px', marginTop: '16px', height: 'auto', minHeight: '650px' }}>
        { this.country === null ? <div>Initializing</div>
          : [this.state.isMissing ? <div>Ce graph est indisponible pour le moment.</div>
            : (
              <div>
                <GraphHeader handleIndic={this.handleIndic} value={this.state.label} indicNb={params[this.props.graphType].length} graphType={this.props.graphType} />
                <Row>
                  <Col sm={11} style={{ display: 'inline' }}>
                    {this.getLegend()}
                  </Col>
                  <Col sm={1}>
                    <i className="fas fa-info-circle" />
                  </Col>
                </Row>
                {this.state.filterData ? <HighChartsBar style={{ backgroundColor: 'white' }} colors={this.colors} data={this.state.filterData} /> : <div style={{ backgroundColor: 'white' }}>Loading</div>}
                {this.getInputs()}
                <input type="checkbox" name="love" value="love" id="FRA" onChange={e => this.toggleCountry(e.target.id)} />
                  FRA
                <input type="checkbox" name="love" value="love" id="CAN" onChange={e => this.toggleCountry(e.target.id)} />
                  CAN
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
