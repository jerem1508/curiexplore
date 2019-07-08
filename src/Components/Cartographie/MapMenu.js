import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const config = require('./Cartographie-data/indicateurs_carto.json');
const isoList = require('../Homepage/CountriesList/countriesList.json');

// aller chercher les données comme dans graphCurie

export default class MapHeader extends Component {
  constructor(props) {
    super(props);
    this.source = 'Unesco';
    this.state = {
      value: '',
    };
    this.getValues = this.getValues.bind(this);
    this.getSelect = this.getSelect.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
  }

  componentDidMount() {
    this.setState({ value: config[0].value }, () => {
      this.getValues();
    });
  }

  // async getData(i, label, indic, index) {
  //   const res = await axios.get(url, {
  //     // headers: {
  //     //   Authorization: `Basic ${configFile.CURIE_AUTH_KEY}`,
  //     // },
  //     params: {
  //       where: `{"country_code":"${this.countryList[i]}","code":"${params[label][indic].unit[index].code}"}`,
  //     },
  //   });
  //   return (res.data);
  // }
  //
  // async getGraphValues(label, index, indic) {
  //   // On vérifie si le label existe pour la récupération des indicateurs et des codes
  //   if (params[label] == null) {
  //     this.setState({ isMissing: true });
  //     return;
  //   }
  //
  //   // On créé tempData qui va contenir les différentes données
  //   let tempData = [];
  //   for (let i = 0; i < this.countryList.length; i += 1) {
  //     tempData.push(null);
  //   }
  //
  //   // On met à jour l'index (définit quel code choisir pour l'indicateur choisi)
  //   this.graphIndex = index;
  //
  //   // On reset les données
  //   this.setState({ filterData: null });
  //
  //   // On vérifie si la data est dispo afin d'éviter les requêtes inutiles
  //   for (let i = 0; i < this.countryList.length; i += 1) {
  //     for (let j = 0; j < this.allData.length; j += 1) {
  //       // Si le pays et le code correspondants sont déjà rentrés, on les met dans tempData
  //       if ((this.allData[j][0] === this.countryList[i]) && (this.allData[j][1] === params[label][indic].unit[index].code)) {
  //         tempData[i] = this.allData[2];
  //       }
  //     }
  //   }
  //
  //   const results = [];
  //   for (let i = 0; i < tempData.length; i += 1) {
  //     // Si c'est null, on a pas recup les données via allData
  //     if (tempData[i] === null) {
  //       // On met l'appel de fonction à faire dans results (pour await toutes les réponses avant de continuer)
  //       results.push(this.getData(i, label, indic, index));
  //     } else {
  //       // Sinon on fait pas de requete
  //       results.push('');
  //     }
  //   }
  //   // On effectue toutes les requêtes nécssaires
  //   tempData = await Promise.all(results);
  //   for (let i = 0; i < results.length; i += 1) {
  //     if (tempData[i] === '') {
  //       for (let j = 0; j < this.allData.length; j += 1) {
  //         if ((this.allData[j][0] === this.countryList[i]) && (this.allData[j][1] === params[label][indic].unit[index].code)) {
  //           tempData[i] = this.allData[j][2];
  //         }
  //       }
  //     } else {
  //       const tmpLbl = [];
  //       tmpLbl.push(this.countryList[i]);
  //       tmpLbl.push(params[label][indic].unit[index].code);
  //       tmpLbl.push(tempData[i]);
  //       this.allData.push(tmpLbl);
  //     }
  //   }
  //   this.graphFormat = params[label][indic].type;
  //   this.setState({ filterData: tempData });
  // }

  getValues() {
    let i = 0;
    for (i = 0; i < config.length; i += 1) {
      if (config[i].value === this.state.value) {
        break;
      }
    }
    if (i === config.length) {
      return;
    }
    // alert(config[i].code);
    // alert(config[i].steps[0].limits.length);
  }

  getSelect() {
    const selectList = [];
    for (let i = 0; i < config.length; i += 1) {
      selectList.push(<option value={config[i].value}>{config[i].label}</option>);
    }
    return (
      <select onChange={e => this.handleIndic(e)} value={this.state.value} className="form-control">
        {selectList}
      </select>
    );
  }

  handleIndic(e) {
    this.setState({ value: e.target.value }, () => {
      this.getValues();
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={1} />
          <Col sm={5}>
            <span>Sélectionner un indicateur</span>
            <p>{this.getSelect()}</p>
            <span>
              Source:&nbsp;
              {this.source}
            </span>
          </Col>
          <Col sm={5}>
            <p>Complément de légende</p>
            <p>ligne1</p>
            <p>ligne2</p>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
