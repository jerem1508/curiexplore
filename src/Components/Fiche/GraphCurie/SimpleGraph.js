import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

import HighChartsGraph from './Graphs/HighChartsGraph';

import classes from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');

/**
 * GraphCurie -> SimpleGraph
 * Url : <br/>
 * Description : Gestions inputs + source, appel au graph<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

class SimpleGraph extends Component {
  constructor(props) {
    super(props);
    this.getInputs = this.getInputs.bind(this);
    this.getSource = this.getSource.bind(this);
  }

  getInputs() {
    const radioList = [];
    const id = params[this.props.graphType][this.props.indic].unit;
    for (let i = 0; i < params[this.props.graphType][this.props.indic].unit.length; i += 1) {
      radioList.push(
        <span>
          <input
            type="radio"
            name={params[this.props.graphType][this.props.indic].label + id[i].label}
            checked={(i === this.props.graphIndex)}
            value={params[this.props.graphType][this.props.indic].unit[i].label}
            onChange={() => this.props.getGraphValues(this.props.graphType, i, this.props.indic)}
          />
          {params[this.props.graphType][this.props.indic].unit[i].label}
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

  getSource(str = false) {
    const srcList = [];
    for (let i = 0; i < this.props.data.length; i += 1) {
      for (let j = 0; j < this.props.data[i].data.length; j += 1) {
        if (!srcList.includes(this.props.data[i].data[j].source)) {
          srcList.push(this.props.data[i].data[j].source);
        } else if (srcList.length > 1) {
          srcList.push(`, ${this.props.data[i].data[j].source}`);
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

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            {this.getInputs()}
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'white' }}>
          <Col>
            <HighChartsGraph
              colors={this.props.colors}
              data={this.props.data}
              full
              source={this.getSource()}
              sourceStr={this.getSource(true)}
              type={this.props.type}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default SimpleGraph;

SimpleGraph.propTypes = {
  colors: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
  getGraphValues: propTypes.func.isRequired,
  graphIndex: propTypes.number.isRequired,
  graphType: propTypes.string.isRequired,
  indic: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};
