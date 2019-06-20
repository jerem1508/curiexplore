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
    <select onChange={props.handleIndic} value={props.value}>
      {selectList}
    </select>
  );
}

// const GraphHeader = props => (
//   <Row>
//     <Col style={{ backgroundColor: '#093e6c' }}>
//       <div style={{ float: 'left' }}>
//         <p style={{ color: '#6d99c0' }}>Connaître le pays</p>
//         <p style={{ fontSize: '1.7em', color: 'white' }}>Graphiques</p>
//       </div>
//       <div style={{ float: 'right', color: 'white' }}>
//         <p>{`${props.indicNb}  indicateurs`}</p>
//         <p>Disponibes</p>
//       </div>
//     </Col>
//     <Col style={{ backgroundColor: '#ffb200' }} className={classes.arrowRight}>
//       {getSelect(props)}
//     </Col>
//   </Row>
// );

const GraphHeader = props => (
  <Row>
    <Col sm={6} className={classes.LeftCol}>
      <Row>
        <Col sm={9}>
          <Row>
            <p style={{ color: '#6d99c0' }}>Connaître le pays</p>
          </Row>
          <Row>
            <p style={{ fontSize: '1.7em', color: 'white' }}>Graphiques</p>
          </Row>
        </Col>
        <Col className={classes.IndicPart}>
          <Row>
            <p>{`${props.indicNb}  indicateurs`}</p>
          </Row>
          <Row>
            <p>disponibes</p>
          </Row>
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
