import React, { Component, Fragment } from 'react';
import {
  Row, Col, Container, Modal,
} from 'react-bootstrap';
import axios from 'axios';
import propTypes from 'prop-types';

import classes from './Cartographie.scss';

const config = require('./Cartographie-data/indicateurs_carto.json');
const configFile = require('../../config/config.js');

const url = configFile.CURIE_URL;

export default class MapHeader extends Component {
  constructor(props) {
    super(props);
    this.allData = [];
    this.source = 'N.A';
    this.state = {
      colors: [],
      show: true,
      value: '',
    };
    this.getSelect = this.getSelect.bind(this);
    this.getLegend = this.getLegend.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({ value: config[0].value }, () => {
      this.getValues();
    });
  }

  async getData(code, size, index) {
    const requests = [];
    let results = [];
    this.handleShow();

    for (let i = 0; i < this.allData.length; i += 1) {
      if (this.allData[i][0] === code) {
        this.handleClose();
        // alert(this.allData[i][1].data[0].source);
        this.setState({ source: this.allData[i][1][0].source });
        this.getColors(this.allData[i][1], size, index);
        return;
      }
    }
    requests.push(this.fetchData(code));
    this.handleClose();
    results = await Promise.all(requests);
    for (let i = 0; i < results.length; i += 1) {
      if (results[i].data.length > 0) {
        this.setState({ source: results[i].data[0].source });
        break;
      }
    }
    this.allData.push([code, results[0].data]);
    this.getColors(results[0].data, size, index);
  }

  getColors(data, size, index) {
    const colors = [];
    if (size === 4) {
      colors.push(classes.quatrePalliersColor1);
      colors.push(classes.quatrePalliersColor2);
      colors.push(classes.quatrePalliersColor3);
      colors.push(classes.quatrePalliersColor4);
    } else if (size === 5) {
      colors.push(classes.cinqPalliersColor1);
      colors.push(classes.cinqPalliersColor2);
      colors.push(classes.cinqPalliersColor3);
      colors.push(classes.cinqPalliersColor4);
      colors.push(classes.cinqPalliersColor5);
    } else {
      colors.push(classes.sixPalliersColor1);
      colors.push(classes.sixPalliersColor2);
      colors.push(classes.sixPalliersColor3);
      colors.push(classes.sixPalliersColor4);
      colors.push(classes.sixPalliersColor5);
      colors.push(classes.sixPalliersColor6);
    }
    this.setState({ colors }, () => {
      this.props.setData(data, size, this.state.colors, index);
    });
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
    this.getData(config[i].code, config[i].steps[0].limits.length, i);
  }

  // eslint-disable-next-line
  async fetchData(code) {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Basic ${configFile.CURIE_AUTH_KEY}`,
      },
      params: {
        where: `{"code":"${code}"}`,
        max_results: '3000',
      },
    });
    return (res.data);
  }

  getLegend() {
    const colors = this.state.colors;
    const firstLine = [];
    const secondLine = [];

    for (let i = 0; i < colors.length; i += 1) {
      if (i < colors.length / 2) {
        firstLine.push(<span style={{ backgroundColor: colors[i] }}>Ligne 1</span>);
      } else {
        secondLine.push(<span style={{ backgroundColor: colors[i] }}>Ligne 1</span>);
      }
    }
    return (
      <Fragment>
        <p>
          {firstLine}
        </p>
        <p>
          {secondLine}
        </p>
      </Fragment>
    );
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
          <Col sm={5} className={classes.Title}>
            <span>Sélectionner un indicateur</span>
            <p>{this.getSelect()}</p>
            <span>
              Source:&nbsp;
              {this.state.source}
            </span>
          </Col>
          <Col sm={5} className={classes.Title}>
            <span>Complément de légende</span>
            {this.getLegend()}
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>Chargement en cours...</Modal.Body>
        </Modal>
      </Container>
    );
  }
}

MapHeader.propTypes = {
  setData: propTypes.func.isRequired,
  // language: PropTypes.string.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};
