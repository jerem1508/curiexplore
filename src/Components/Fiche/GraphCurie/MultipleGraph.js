import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import propTypes from 'prop-types';
import axios from 'axios';

import HighChartsGraph from './Graphs/HighChartsGraph';

import classes from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');
const configFile = require('../../../config/config.js');

const url = configFile.CURIE_URL;

// TODO : garder les données déjà envoyées

/**
 * GraphCurie -> MultipleGraph
 * Url : <br/>
 * Description : Gestion de plusieurs graphs, appel des différents graphs<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

class MultipleGraph extends Component {
  constructor(props) {
    super(props);
    this.codeArray = [];
    this.indicArray = [];
    this.countryList = [];
    this.state = {
      data: null,
    };
    this.changeIndic = this.changeIndic.bind(this);
    this.getData = this.getData.bind(this);
    this.getGraphs = this.getGraphs.bind(this);
    this.getInputs = this.getInputs.bind(this);
    this.getSource = this.getSource.bind(this);
    this.parseData = this.parseData.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < params[this.props.graphType].length; i += 1) {
      this.codeArray.push(params[this.props.graphType][i].unit[0].code);
    }
    this.getData();
  }

  async getData() {
    this.countryList = this.props.countryList.map(e => `"${e}"`);
    // console.log('codeArray et CountryList');
    // console.log(this.codeArray);
    // console.log(this.countryList);
    const results = [];
    for (let i = 0; i < this.codeArray.length; i += 1) {
      results.push(this.apiRequest(this.codeArray[i]));
    }
    const data = await Promise.all(results);
    // separer les data en fonction catégories
    console.log(data);
    this.setState({ data });
  }

  getGraphs() {
    const graphList = [];
    for (let i = 0; i < this.codeArray.length; i += 1) {
      graphList.push(
        <Col sm={6}>
          <span className={classes.graphTitle}>{params[this.props.graphType][i].label}</span>
          {this.getInputs(i)}
          <HighChartsGraph
            colors={this.props.colors}
            data={this.parseData(i)}
            full={false}
            source={this.getSource(i)}
            type={params[this.props.graphType][i].type}
          />
        </Col>,
      );
    }
    return (
      <Fragment>
        <Row style={{ backgroundColor: 'white' }}>
          {graphList}
        </Row>
      </Fragment>
    );
  }

  getInputs(indic) {
    const radioList = [];
    const id = params[this.props.graphType][indic].unit;
    if (this.indicArray[indic] === undefined) {
      this.indicArray.push(0);
    }
    for (let i = 0; i < id.length; i += 1) {
      // alert(this.indicArray[i]);
      radioList.push(
        <span>
          <input
            type="radio"
            name={params[this.props.graphType][indic].label + id[i].label}
            checked={(i === this.indicArray[indic])}
            value={id[i].label}
            onChange={() => this.changeIndic(indic, i)}
          />
          {id[i].label}
        </span>,
      );
    }
    return (
      <div className={classes.units}>
        <span>Afficher en</span>
        {radioList}
      </div>
    );
  }

  getSource(index) {
    const srcList = [];
    this.data = [this.state.data[index]];
    for (let i = 0; i < this.data.length; i += 1) {
      for (let j = 0; j < this.data[i].data.length; j += 1) {
        if (!srcList.includes(this.data[i].data[j].source)) {
          srcList.push(this.data[i].data[j].source);
        } else if (srcList.length > 1) {
          srcList.push(`, ${this.data[i].data[j].source}`);
        }
      }
    }
    if (srcList.length > 1) {
      return (
        <span>
          Sources :&nbsp;
          {srcList}
        </span>
      );
    }
    return (
      <span>
        Source :&nbsp;
        {srcList}
      </span>
    );
  }

  async apiRequest(code) {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Basic ${configFile.CURIE_AUTH_KEY}`,
      },
      params: {
        where: `{"country_code":{"$in": [${this.countryList}]},"code":"${code}"}`,
        max_results: 3000,
      },
    });
    return (res.data);
  }

  parseData(index) {
    const len = this.props.countryList.length;
    const apiData = this.state.data[index];
    const data = [];
    const tempData = [];

console.log(this.props.countryList);
    for (let i = 0; i < len; i += 1) {
      tempData.push([]);
    }
    for (let i = 0; i < apiData.data.length; i += 1) {
      for (let j = 0; j < len; j += 1) {
        if (apiData.data[i].country_code === this.props.countryList[j]) {
          tempData[j].push(apiData.data[i]);
        }
      }
      // tempData[(i % this.props.countryList.length)].push(apiData.data[i]);
    }
    for (let i = 0; i < len; i += 1) {
      data.push({ data: tempData[i] });
    }
    if (index === 0)
      console.log(data);
    // alert(index % this.props.countryList.length);
    return (data);
    // for (let i = 0; i < index; i += 1) {
    //
    // }
    // faire modulo en fonction size de paysage
    // et reparti dans différents tableaux
  }

  changeIndic(indic, i) {
    // alert(this.codeArray[indic]);
    this.codeArray[indic] = params[this.props.graphType][indic].unit[i].code;
    this.indicArray[indic] = i;
    // alert(this.codeArray[indic]);
    this.getData();
  }

  render() {
    // console.log(this.props.graphType);
    // console.log(this.props.type);
    // console.log(this.props.countryList);
    return (
      <Fragment>
        {this.state.data ? this.getGraphs() : null}
      </Fragment>
    );
  }
}


export default MultipleGraph;

MultipleGraph.propTypes = {
  colors: propTypes.array.isRequired,
  countryList: propTypes.array.isRequired,
  graphType: propTypes.string.isRequired,
};

// const MultipleGraph = () => (
//   <Fragment>
//     <Row style={{ backgroundColor: 'white' }}>
//       <Col>
//         {this.getInputs()}
//         <HighChartsGraph
//           colors={this.props.colors}
//           data={this.props.data}
//           full={false}
//           source={this.getSource()}
//           type={this.props.type}
//         />
//       </Col>
//       <Col>
//         {this.getInputs()}
//         <HighChartsGraph
//           colors={this.props.colors}
//           data={this.props.data}
//           full={false}
//           source={this.getSource()}
//           type={this.props.type}
//         />
//       </Col>
//     </Row>
//   </Fragment>
// );
