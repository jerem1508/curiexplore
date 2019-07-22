import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'react-bootstrap';
import classes from './GraphHeader.scss';

const params = require('../GraphCurie-data/indicateurs.json');

class GraphHeader extends Component {
  constructor(props) {
    super(props);
    this.indic = 'Je suis un indicateur test';
    this.state = {
      class: 'chevron-down',
    };
    this.getIndic = this.getIndic.bind(this);
    this.getSelect = this.getSelect.bind(this);
    this.showDiv = this.showDiv.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  getIndic() {
    let str1 = 'indicateurs';
    let str2 = 'disponibles';

    if (this.props.indicNb <= 1) {
      str1 = 'indicateur';
      str2 = 'disponible';
    }
    return (
      <Fragment>
        {this.props.indicNb}
        &nbsp;
        {str1}
        <br />
        {str2}
      </Fragment>
    );
  }

  getSelect() {
    // On génère la liste en fonction du fichier de conf
    const selectList = [];
    for (let i = 0; i < params[this.props.graphType].length; i += 1) {
      selectList.push(<option value={params[this.props.graphType][i].name}>{params[this.props.graphType][i].label}</option>);
    }
    return (
      <select onChange={this.props.handleIndic} value={this.props.value} className="form-control">
        {selectList}
      </select>
    );
  }

  showDiv() {
    return (
      <div className={classes.Selector}>
        {this.getSelect()}
      </div>
    );
  }

  toggleList() {
    const val = this.state.class;

    if (val === 'times') {
      this.setState({ class: 'chevron-down' });
    } else {
      this.setState({ class: 'times' });
    }
  }

  // getSelect() {
  //   // On génère la liste en fonction du fichier de conf
  //   const selectList = [];
  //   for (let i = 0; i < params[this.props.graphType].length; i += 1) {
  //     selectList.push(<option value={params[this.props.graphType][i].name}>{params[this.props.graphType][i].label}</option>);
  //   }
  //   return (
  //     <select onChange={this.props.handleIndic} value={this.props.value} className="form-control">
  //       {selectList}
  //     </select>
  //   );
  // }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm={6} className={classes.LeftCol}>
            <Row>
              <Col sm={5}>
                <span>Connaître le pays</span>
                <span>Graphiques</span>
              </Col>
              <Col />
              <Col sm={3} className={`${classes.IndicPart} text-right`}>
                {this.getIndic()}
              </Col>
            </Row>
          </Col>
          <Col
            style={{ backgroundColor: '#ffb200' }}
            className={`d-flex align-items-center ${classes.ArrowRight}`}
            onClick={this.toggleList}
            onKeyPress={this.toggleList}
            role="button"
            tabIndex={0}
          >
            <span style={{ width: '90%' }}>
              {this.indic}
            </span>
            <span>
              <i className={`fas fa-${this.state.class}`} />
            </span>
            {
              // getSelect(props)
            }
          </Col>
        </Row>
        <Row>
          <Col sm={6} />
          <Col>
            {(this.state.class === 'times') ? this.showDiv() : null}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default GraphHeader;

GraphHeader.propTypes = {
  indicNb: PropTypes.number.isRequired,
  handleIndic: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  graphType: PropTypes.string.isRequired,
  // language: PropTypes.string.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};
