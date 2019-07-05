import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import classes from './GraphMenu.scss';

// TODO : ADD REMOVE FUNCTION HERE

const isoList = require('../../../Homepage/CountriesList/countriesList.json');

export default class GraphMenu extends Component {
  constructor(props) {
    super(props);
    this.countryList = [this.props.countryCode, '', '', '', '', ''];
    this.state = {
      colors: [],
      errorMsg: '',
      show: false,
      firstVis: { display: 'none' },
      secondVis: { display: 'none' },
      firstCountry: 'Choisir un pays',
      secondCountry: 'Choisir un pays',
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.getCountryList = this.getCountryList.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const tempColor = [];

    for (let i = 0; i < this.props.colors.length; i += 1) {
      tempColor.push('#ccc');
    }
    this.setState({ colors: tempColor });
  }

  getCountryList(id) {
    const ctryList = [];

    for (let i = 0; i < isoList.length; i += 1) {
      ctryList.push((
        <span
          className={classes.BtnInList}
          id={isoList[i].ISO_alpha3}
          value={isoList[i].Pays}
          onClick={e => this.setCountry(e, id, isoList[i].Pays)}
          onKeyPress={e => this.setCountry(e, id, isoList[i].Pays)}
          role="button"
          tabIndex={0}
        >
          {isoList[i].Pays}
        </span>
      ));
      ctryList.push(<br />);
    }
    return (
      <div style={{ overflowY: 'auto', height: '280px' }}>
        {ctryList}
      </div>
    );
  }

  setCountry(e, id, country) {
    if (id === 0) {
      this.setState({ firstVis: { display: 'none' } });
    } else {
      this.setState({ secondVis: { display: 'none' } });
    }
    this.changeStyle(e, id + 1, country);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true, errorMsg: 'Erreur: ce pays est déjà utilisé' });
  }

  changeStyle(e, id, country) {
    // eslint-disable-next-line
    const colors = this.state.colors;
    // if (this.state.colors[id] === '#ccc') {
    //   colors[id] = this.props.colors[id];
    //   this.countryList[id - 1] = e.target.id;
    // } else {
    //   colors[id] = '#ccc';
    //   this.countryList[id] = '';
    // }
    // alert(this.countryList);
    if (this.countryList.includes(e.target.id)) {
      this.handleShow();
      return;
    }
    if (id === 1) {
      this.setState({ firstCountry: country });
    } else if (id === 2) {
      this.setState({ secondCountry: country });
    }
    colors[id] = this.props.colors[id];
    if (this.countryList[id] !== '') {
      this.props.toggleCountry(this.countryList[id], this.state.colors);
    }
    this.countryList[id] = e.target.id;
    this.setState({ colors });
    this.props.toggleCountry(e.target.id, this.state.colors);
  }

  toggleList(id) {
    if (id === 0) {
      if (this.state.firstVis.display === 'none') {
        this.setState({ firstVis: { display: '' } });
      } else {
        this.setState({ firstVis: { display: 'none' } });
      }
      return;
    }
    if (this.state.secondVis.display === 'none' && this.countryList[1] !== '') {
      this.setState({ secondVis: { display: '' } });
    } else if (this.countryList[1] !== '') {
      this.setState({ secondVis: { display: 'none' } });
    } else {
      this.setState({ show: true, errorMsg: "Veuillez d'abord sélectionner un premier pays" });
    }
  }

  render() {
    const CountryList = props => (
      <div className={classes.ListSearch}>
        <br />
        Chercher un pays
        <br />
        <input type="text" name="fname" placeholder="Ex: France" />
        <br />
        <div
          id="FRA"
          value="France"
          onClick={e => this.setCountry(e, props.id, 'France')}
          onKeyPress={e => this.setCountry(e, props.id, 'France')}
          role="button"
          tabIndex={0}
        >
        France
        </div>
        <hr style={{ size: 15 }} />
        {this.getCountryList(props.id)}
      </div>
    );
    return (
      <span>
        <div className={classes.Selector}>
          <button type="button" className={classes.BtnCountry} onClick={() => this.toggleList(0)}>
            <span className={classes.Dot} style={{ backgroundColor: this.state.colors[1] }} />
            {this.state.firstCountry}
            <i className={`fas fa-sort-down ${classes.Arrow}`} />
          </button>
          <div style={this.state.firstVis}>
            <CountryList id={0} />
          </div>
        </div>
        <span className={classes.Text}> et </span>
        <div className={classes.Selector}>
          <button type="button" className={classes.BtnCountry} onClick={() => this.toggleList(1)}>
            <span className={classes.Dot} style={{ backgroundColor: this.state.colors[2] }} />
            {this.state.secondCountry}
            <i className={`fas fa-sort-down ${classes.Arrow}`} />
          </button>
          <div style={this.state.secondVis}>
            <CountryList id={1} />
          </div>
        </div>
        <span className={classes.Text}> et avec </span>
        <button type="button" id="WLD" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 3)}>
          <span id="WLD" className={classes.Dot} style={{ backgroundColor: this.state.colors[3] }} />
            Monde
        </button>
        <button type="button" id="OED" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 4)}>
          <span id="OED" className={classes.Dot} style={{ backgroundColor: this.state.colors[4] }} />
            OCDE
        </button>
        <button type="button" id="EUU" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 5)}>
          <span id="EUU" className={classes.Dot} style={{ backgroundColor: this.state.colors[5] }} />
            UE
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>{this.state.errorMsg}</Modal.Body>
          <Modal.Footer>
            <Button variant="error" onClick={this.handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}


GraphMenu.propTypes = {
  toggleCountry: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
  countryCode: PropTypes.string.isRequired,
};
