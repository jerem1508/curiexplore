import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import propTypes from 'prop-types';
import axios from 'axios';
import Highcharts from 'highcharts';
import HCExporting from 'highcharts/modules/exporting';
import HCOfflineExporting from 'highcharts/modules/offline-exporting';

import HighChartsGraph from './Graphs/HighChartsGraph';

import classes from './GraphCurie.scss';

HCExporting(Highcharts);
HCOfflineExporting(Highcharts);

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
            sourceStr={this.getSource(i, true)}
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

  getSource(index, str = false) {
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
    if (str) {
      if (srcList.length > 1) {
        return `Sources: ${srcList.toString()}`;
      }
      return `Source: ${srcList.toString()}`;
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

  exportCharts() {
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
      filename: this.props.exportTitle || 'chart',
      type: options.type,
      svg: this.getSVG(this.refArray, options),
    });

    const svg = this.getSVG(this.refArray, options);
    // Highcharts.downloadSVGLocal(this.getSVG(this.refArray), options, () => {
    //   console.log("Failed to export on client side");
    // });
    console.log(svg);

    // console.log(this.refArray);
    // console.log(Object.keys(this.refArray));
    // console.log(this.refArray);
    // console.log(this.refArray[0]);
  }

  // eslint-disable-next-line
  // getSVG(charts, options, callback) {
  //   const svgArr = [];
  //   let top = 0;
  //   let width = 0;
  //   const addSVG = function (svgres) {
  //     // eslint-disable-next-line
  //     const svgWidth = +svgres.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
  //     // eslint-disable-next-line
  //     const svgHeight = +svgres.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
  //
  //     let svg = svgres.replace('<svg', `<g transform="translate(0,'${top}')" `);
  //     svg = svg.replace('</svg>', '</g>');
  //     top += svgHeight;
  //     width = Math.max(width, svgWidth);
  //     svgArr.push(svg);
  //   };
  //   const exportChart = function (i, svg) {
  //     if (i === charts.length) {
  //       return callback(`<svg height="${top}" width="${width}" version="1.1" xmlns="http://www.w3.org/2000/svg">${svgArr.join('')}</svg>`);
  //     }
  //     addSVG(svg);
  //     return exportChart(i + 1); // Export next only when this SVG is received
  //   };
  //   exportChart(0);
  // }
  //
  // exportCharts() {
  //   const options = Highcharts.merge(Highcharts.getOptions().exporting, { type: 'application/pdf' });
  //   Highcharts.setOptions({
  //     exporting: {
  //       fallbackToExportServer: false, // Ensure the export happens on the client side or not at all
  //     },
  //   });
  //
  //   // Get SVG asynchronously and then download the resulting SVG
  //   this.getSVG(this.refArray, options, (svg) => {
  //     Highcharts.downloadSVGLocal(svg, options, () => {
  //       console.log('Failed to export on client side');
  //     });
  //   });
  // }

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
  exportTitle: propTypes.string.isRequired,
  exportType: propTypes.string.isRequired,
  graphType: propTypes.string.isRequired,
};
