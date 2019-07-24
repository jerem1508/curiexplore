import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import classes from './GraphHeader.scss';

const params = require('../GraphCurie-data/indicateurs.json');

class GraphHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'chevron-down',
      radioValue: '',
      label: '',
    };
    this.getIndic = this.getIndic.bind(this);
    this.getRadio = this.getRadio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showDiv = this.showDiv.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    this.setState({ radioValue: params[this.props.graphType][0].name, label: params[this.props.graphType][0].label });
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

  getRadio() {
    // On génère la liste en fonction du fichier de conf
    const radioList = [];
    for (let i = 0; i < params[this.props.graphType].length; i += 1) {
      radioList.push(
        <input
          type="radio"
          name={params[this.props.graphType][i].label}
          checked={(params[this.props.graphType][i].name === this.state.radioValue)}
          value={params[this.props.graphType][i].name}
          onChange={e => this.handleChange(e)}
        />,
        <span
          style={(params[this.props.graphType][i].name === this.state.radioValue) ? { color: 'white' } : null}
        >
          {params[this.props.graphType][i].label}
        </span>,
        <br />,
      );
    }
    return (
      <div className={classes.Radio}>
        { radioList }
      </div>
    );
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({ class: 'chevron-down', radioValue: e.target.value, label: e.target.name });
    this.props.handleIndic(e);
  }

  showDiv() {
    return (
      <Fragment>
        <div className={classes.Selector} />
        <div className={classes.RadioContainer}>
          <Container>
            <Row>
              <Col>
                <span style={{ color: 'white' }}>
                  <i className="fas fa-square fa-2x" />
                  <span>Afficher uniquement un graphique</span>
                </span>
              </Col>
              <Col>
                <span style={{ color: classes.lightBlueColor }}>
                  <i className="fas fa-th-large fa-2x" />
                  <span>Afficher tous les graphiques</span>
                </span>
              </Col>
            </Row>
          </Container>
          <hr className={classes.Hr} />
          {this.getRadio()}
        </div>
      </Fragment>
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
            <span className={classes.IndicName}>
              {this.state.label}
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
  graphType: PropTypes.string.isRequired,
  // language: PropTypes.string.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};
