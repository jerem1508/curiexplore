import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'react-bootstrap';
import classes from './GraphHeader.scss';

const params = require('../GraphCurie-data/indicateurs.json');

function getSelect(props) {
  // On génère la liste en fonction du fichier de conf
  const selectList = [];
  for (let i = 0; i < params[props.graphType].length; i += 1) {
    selectList.push(<option value={params[props.graphType][i].name}>{params[props.graphType][i].label}</option>);
  }
  return (
    <select onChange={props.handleIndic} value={props.value} className="form-control">
      {selectList}
    </select>
  );
}

const GraphHeader = props => (
  <Row>
    <Col sm={6} className={classes.LeftCol}>
      <Row>
        <Col sm={5}>
          <span>Connaître le pays</span>
          <span>Graphiques</span>
        </Col>
        <Col />
        <Col sm={3} className={`${classes.IndicPart} text-right`}>
          {props.indicNb}
          &nbsp;indicateurs
          <br />
          disponibes
        </Col>
      </Row>
    </Col>
    <Col style={{ backgroundColor: '#ffb200' }} className={classes.ArrowRight}>
      {getSelect(props)}
    </Col>
  </Row>
);

export default GraphHeader;

getSelect.propTypes = {
  handleIndic: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  graphType: PropTypes.string.isRequired,
};

GraphHeader.propTypes = {
  indicNb: PropTypes.number.isRequired,
  // language: PropTypes.string.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};
