import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import propTypes from 'prop-types';
import axios from 'axios';
import Highcharts from 'highcharts';

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
    this.refArray = [];
    this.state = {
      data: null,
    };
    this.changeIndic = this.changeIndic.bind(this);
    this.exportCharts = this.exportCharts.bind(this);
    this.getData = this.getData.bind(this);
    this.getGraphs = this.getGraphs.bind(this);
    this.getInputs = this.getInputs.bind(this);
    this.getSource = this.getSource.bind(this);
    this.parseData = this.parseData.bind(this);
    this.resetRef = this.resetRef.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < params[this.props.graphType].length; i += 1) {
      this.codeArray.push(params[this.props.graphType][i].unit[0].code);
    }
    this.getData();
  }

  async getData() {
    this.countryList = this.props.countryList.map(e => `"${e}"`);
    const results = [];
    for (let i = 0; i < this.codeArray.length; i += 1) {
      results.push(this.apiRequest(this.codeArray[i]));
    }
    const data = await Promise.all(results);
    // separer les data en fonction catégories
    this.setState({ data: null });
    this.setState({ data });
  }

  getGraphs() {
    const graphList = [];
    this.i = 0;
    this.countryList = this.countryList.map(e => e.substring(1, e.length - 1));
    // this.resetRef();
    if (JSON.stringify(this.countryList) !== JSON.stringify(this.props.countryList)) {
      this.getData();
    }
    for (let i = 0; i < this.codeArray.length; i += 1) {
      graphList.push(
        <Col sm={6}>
          <span className={classes.graphTitle}>{params[this.props.graphType][i].label}</span>
          {this.getInputs(i)}
          <HighChartsGraph
            colors={this.props.colors}
            data={this.parseData(i)}
            full={false}
            setRef={this.setRef}
            source={this.getSource(i)}
            type={params[this.props.graphType][i].type}
          />
        </Col>,
      );
    }
    // // alert(this.props.exportType);
    // if (this.props.exportType === 'pdf') {
    //   this.exportChartsPdf();
    // } else if (this.props.exportType === 'csv') {
    //   this.exportChartsCsv();
    // }
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

  setRef(param) {
    this.refArray.push(param);
    if (this.refArray.length === params[this.props.graphType].length) {
      this.exportCharts();
    }
  }

  // eslint-disable-next-line
  getSVG(charts) {
    const svgArr = [];
    let top = 0;
    let width = 0;

    Highcharts.each(charts, (chart) => {
      let svg = chart.getSVG();
      // Get width/height of SVG for export
      const svgWidth = +svg.match(
        /^<svg[^>]*width\s*=\s*?(\d+)?[^>]*>/,
      )[1];
      const svgHeight = +svg.match(
        /^<svg[^>]*height\s*=\s*?(\d+)?[^>]*>/,
      )[1];

      svg = svg.replace(
        '<svg',
        `<g transform="translate(${width}, 0 )" `,
      );
      svg = svg.replace('</svg>', '</g>');

      width += svgWidth;
      top = Math.max(top, svgHeight);

      svgArr.push(svg);
    });

    return `<svg height="${top}" width="${width}" version="1.1" xmlns="http://www.w3.org/2000/svg">${svgArr.join('')}</svg>`;
  }

  exportCharts() {
    // const options = Highcharts.merge(Highcharts.getOptions().exporting, { type: 'application/pdf' });
    // console.log(Highcharts);
    //
    // // Merge the options

    // Post to export server
    // console.log(this.refArray.length);
    // Highcharts.post(options.url, {
    //   filename: options.filename || 'chart',
    //   type: options.type,
    //   width: options.width,
    //   svg: this.getSVG(this.refArray),
    // });

    // console.log(this.refArray);
    // console.log(Object.keys(this.refArray));
    // console.log(this.refArray);
    console.log(this.refArray[0]);
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

  resetRef() {
    // console.log('before :' + this.refArray.length);
    this.refArray = [];
    // console.log('after:' + this.refArray.length);
  }

  parseData(index) {
    const len = this.props.countryList.length;
    const tempData = this.state.data[index];
    const data = [];

    for (let i = 0; i < len; i += 1) {
      data.push([]);
    }
    for (let i = 0; i < tempData.data.length; i += 1) {
      for (let j = 0; j < len; j += 1) {
        if (tempData.data[i].country_code === this.props.countryList[j]) {
          data[j].push(tempData.data[i]);
        }
      }
    }
    return (data.map(x => ({ data: x })));
  }

  changeIndic(indic, i) {
    this.codeArray[indic] = params[this.props.graphType][indic].unit[i].code;
    this.indicArray[indic] = i;
    this.getData();
  }

  render() {
    return (
      <Fragment>
        {this.state.data ? this.getGraphs() : <div>Loading...</div>}
      </Fragment>
    );
  }
}

// Il vaudrait mieux comparer state data avec le state precedent, et re rendre le composant seulement en cas de différence


export default MultipleGraph;

MultipleGraph.propTypes = {
  colors: propTypes.array.isRequired,
  countryList: propTypes.array.isRequired,
  exportType: propTypes.string.isRequired,
  graphType: propTypes.string.isRequired,
};
