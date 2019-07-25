import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

import HighChartsGraph from './Graphs/HighChartsGraph';

import classes from './GraphCurie.scss';

const params = require('./GraphCurie-data/indicateurs.json');

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
            name={id[i].label + i}
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

  getSource() {
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
              type={this.props.type}
              source={this.getSource()}
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
  data: propTypes.object.isRequired,
  getGraphValues: propTypes.func.isRequired,
  graphIndex: propTypes.number.isRequired,
  graphType: propTypes.string.isRequired,
  indic: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};
