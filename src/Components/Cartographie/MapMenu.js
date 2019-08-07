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

/**
 * Cartographie -> MapMenu
 * Url : /cartographie<br/>
 * Description : Récupération des données en fonction de l'indicateur<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

export default class MapHeader extends Component {
  constructor(props) {
    super(props);
    this.allData = [];
    this.source = 'N.A';
    this.index = 0;
    this.state = {
      btnClass: classes.BtnCountry,
      colors: [],
      // show: true,
      currentIndic: config[0].label,
      indics: config,
      inputValue: '',
      source: this.source,
      vis: { display: 'none' },
      value: '',
    };
    this.filterIndic = this.filterIndic.bind(this);
    this.getIndic = this.getIndic.bind(this);
    this.setIndic = this.setIndic.bind(this);
    this.getLegend = this.getLegend.bind(this);
    this.handleIndic = this.handleIndic.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleVis = this.toggleVis.bind(this);
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
        this.index = index;
        for (let j = 0; i < results.length; j += 1) {
          if (this.allData[i][1][j].data.length > 0) {
            this.setState({ source: this.allData[i][1][j].data[0].source });
            break;
          }
        }
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
    this.index = index;
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

  setIndic() {
    this.setState({ vis: { display: 'none' } });
  }

  getIndic() {
    const indicList = [];

    for (let i = 0; i < this.state.indics.length; i += 1) {
      indicList.push((
        <span
          className={classes.BtnInList}
          id={this.state.indics[i].value}
          onClick={e => this.handleIndic(e)}
          onKeyPress={e => this.handleIndic(e)}
          role="button"
          tabIndex={0}
        >
          {this.state.indics[i].label}
        </span>
      ));
      indicList.push(<br />);
    }
    return (
      <Fragment className={classes.IndicList}>
        {indicList}
      </Fragment>
    );
    // const selectList = [];
    // for (let i = 0; i < config.length; i += 1) {
    //   selectList.push(<option value={config[i].value}>{config[i].label}</option>);
    // }
    // return (
    //   <select onChange={e => this.handleIndic(e)} value={this.state.value} className="form-control">
    //     {selectList}
    //   </select>
    // );
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
    // alert('getValues');
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
    let values = [0, 0];

    for (let i = 0; i < colors.length; i += 1) {
      if (i < colors.length / 2) {
        values = [config[this.index].steps[0].limits[i][0], config[this.index].steps[0].limits[i][1]];
        if (config[this.index].steps[0].unit === 'M') {
          values[0] = (values[0] - (values[0] % 1000000)) / 1000000;
          values[1] = (values[1] - (values[1] % 1000000)) / 1000000;
        }
        firstLine.push(
          <Col sm={4}>
            <span className={classes.legendDot} style={{ backgroundColor: colors[i] }} />
            de&nbsp;
            {values[0]}
            &nbsp;à&nbsp;
            {values[1]}
            {config[this.index].steps[0].unit}
          </Col>,
        );
      } else {
        values = [config[this.index].steps[0].limits[i][0], config[this.index].steps[0].limits[i][1]];
        if (config[this.index].steps[0].unit === 'M') {
          values[0] = (values[0] - (values[0] % 1000000)) / 1000000;
          values[1] = (values[1] - (values[1] % 1000000)) / 1000000;
        }
        secondLine.push(
          <Col sm={4}>
            <span className={classes.legendDot} style={{ backgroundColor: colors[i] }} />
            de&nbsp;
            {values[0]}
            &nbsp;à&nbsp;
            {values[1]}
            {config[this.index].steps[0].unit}
          </Col>,
        );
      }
    }
    return (
      <Container>
        <Row>
          {firstLine}
        </Row>
        <Row>
          {secondLine}
        </Row>
      </Container>
    );
  }

  filterIndic(value) {
    if (value === '') {
      this.setState({ indics: config });
      this.setState({ inputValue: value });
      return;
    }
    // Comparaison sur les strings en minuscules, sans accents
    const newData = config.filter(el => el.label.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().search(value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) !== -1);
    this.setState({ indics: newData });
    this.setState({ inputValue: value });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  toggleVis() {
    if (this.state.vis.display === '') {
      this.setState({ vis: { display: 'none' } });
    } else {
      this.setState({ vis: { display: '' } });
    }
  }

  handleIndic(e) {
    this.setState({
      currentIndic: e.target.childNodes[0].data,
      value: e.target.id,
      vis: { display: 'none' },
    }, () => {
      this.getValues();
    });
  }

  render() {
    return (
      <Container style={{ paddingTop: '10px' }}>
        <Row>
          <Col sm={1} />
          <Col sm={5}>
            Sélectionner un indicateur
            <div className={classes.Selector}>
              <button
                type="button"
                className={this.state.btnClass}
                onClick={() => this.toggleVis()}
              >
                <span>{this.state.currentIndic}</span>
                <i style={{ float: 'right' }} className="fas fa-sort-down" />
              </button>
              <div style={this.state.vis}>
                <div className={classes.ListSearch}>
                  <br />
                  <span>Chercher un pays</span>
                  <br />
                  <span>
                    <input
                      type="text"
                      name="fname"
                      value={this.state.inputValue}
                      onChange={e => this.filterIndic(e.target.value)}
                      placeholder="Ex: Produit intérieur brut en $PPA"
                    />
                    <i className={`fas fa-search ${classes.Search}`} />
                  </span>
                  <br />
                  <hr />
                  {this.getIndic()}
                </div>
              </div>
            </div>
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
