import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import classes from './GraphMenu.scss';

/**
 * GraphCurie -> GraphMenu
 * Url : <br/>
 * Description : Gestions ajouts/suppression de pays dans le/les graphs<br/>
 * Responsive : . <br/>
 * Accessible : . <br/>
 * Tests unitaires : . <br/>.
*/

const isoList = require('../../../Homepage/CountriesList/countriesList.json');

export default class GraphMenu extends Component {
  constructor(props) {
    super(props);
    this.countryList = [this.props.countryCode, '', '', '', '', ''];
    this.state = {
      colors: [],
      countries: isoList,
      errorMsg: '',
      show: false,
      firstValue: '',
      secondValue: '',
      firstBtnclass: classes.BtnCountry,
      secondBtnclass: classes.BtnCountry,
      firstVis: { display: 'none' },
      secondVis: { display: 'none' },
      firstCountry: 'Choisir un pays',
      secondCountry: 'Choisir un pays',
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.resetCountry = this.resetCountry.bind(this);
    this.getCountryList = this.getCountryList.bind(this);
    this.filterCountries = this.filterCountries.bind(this);
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

    for (let i = 0; i < this.state.countries.length; i += 1) {
      ctryList.push((
        <span
          className={classes.BtnInList}
          id={this.state.countries[i].ISO_alpha3}
          value={this.state.countries.Pays}
          onClick={e => this.setCountry(e, id, this.state.countries[i].Pays)}
          onKeyPress={e => this.setCountry(e, id, this.state.countries[i].Pays)}
          role="button"
          tabIndex={0}
        >
          {this.state.countries[i].Pays}
        </span>
      ));
      ctryList.push(<br />);
    }
    return (
      <div className={classes.CtryList}>
        {ctryList}
      </div>
    );
  }

  setCountry(e, id, country) {
    if (id === 0) {
      // this.setState({ firstVis: { display: 'none' }, firstBtnclass: classes.BtnCountryOn });
      this.setState({ firstVis: { display: 'none' }, firstBtnclass: classes.BtnCountry });
    } else {
      // this.setState({ secondVis: { display: 'none' }, secondBtnclass: classes.BtnCountryOn });
      this.setState({ secondVis: { display: 'none' }, secondBtnclass: classes.BtnCountry });
    }
    this.changeStyle(e, id + 1, country);
  }

  filterCountries(value, id) {
    if (value === '') {
      this.setState({ countries: isoList });
      if (id === 0) {
        this.setState({ firstValue: value });
      } else {
        this.setState({ secondValue: value });
      }
      return;
    }
    const newData = isoList.filter(el => el.Pays.toLowerCase().search(value.toLowerCase()) !== -1);
    this.setState({ countries: newData });
    if (id === 0) {
      this.setState({ firstValue: value });
    } else {
      this.setState({ secondValue: value });
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true, errorMsg: 'Erreur: ce pays est déjà utilisé' });
  }

  resetCountry() {
    this.countryList = [this.props.countryCode, '', '', '', '', ''];
    const tempColor = [];

    for (let i = 0; i < this.props.colors.length; i += 1) {
      tempColor.push('#ccc');
    }
    this.setState({
      countries: isoList,
      colors: tempColor,
      firstValue: '',
      secondValue: '',
      firstBtnclass: classes.BtnCountry,
      secondBtnclass: classes.BtnCountry,
      firstVis: { display: 'none' },
      secondVis: { display: 'none' },
      firstCountry: 'Choisir un pays',
      secondCountry: 'Choisir un pays',
    });
    this.props.toggleCountry(0, this.state.colors, this.countryList);
  }

  changeStyle(e, id, country) {
    // eslint-disable-next-line
    const colors = this.state.colors;
    if (this.countryList.includes(e.target.id)) {
      const index = this.countryList.indexOf(e.target.id);
      if (index < 2) {
        this.handleShow();
        return;
      }
    }
    if (id < 3) {
      if (this.countryList.includes(e.target.id)) {
        this.handleShow();
        return;
      }
      this.countryList[id] = e.target.id;
      colors[id] = this.props.colors[id];
    } else if (id >= 3) {
      if (this.countryList[id] === '') {
        this.countryList[id] = e.target.id;
        colors[id] = this.props.colors[id];
      } else {
        this.countryList[id] = '';
        colors[id] = '#ccc';
      }
    }
    if (id === 1) {
      this.setState({ firstCountry: country, firstValue: '' });
    } else if (id === 2) {
      this.setState({ secondCountry: country, secondValue: '' });
    }
    this.setState({ colors, countries: isoList });
    this.props.toggleCountry(e.target.id, this.state.colors, this.countryList);
  }

  toggleList(id) {
    const colors = this.state.colors;

    if (id === 0) {
      if (this.state.firstVis.display === 'none') {
        if (colors[2] === '#fff') {
          colors[2] = '#ccc';
        }
        if (colors[1] === '#ccc') {
          colors[1] = '#fff';
        }
        this.setState({
          firstVis: { display: '' },
          firstBtnclass: classes.BtnCountryListDown,
          secondVis: { display: 'none' },
          secondBtnclass: classes.BtnCountry,
          colors,
        });
        this.setState();
      } else {
        if (colors[1] === '#fff') {
          colors[1] = '#ccc';
        }
        this.setState({ firstVis: { display: 'none' }, firstBtnclass: classes.BtnCountry, colors });
      }
      return;
    }
    if (this.state.secondVis.display === 'none' && this.countryList[1] !== '') {
      if (colors[1] === '#fff') {
        colors[1] = '#ccc';
      }
      if (colors[2] === '#ccc') {
        colors[2] = '#fff';
      }
      this.setState({
        secondVis: { display: '' },
        secondBtnclass: classes.BtnCountryListDown,
        firstVis: { display: 'none' },
        firstBtnclass: classes.BtnCountry,
        colors,
      });
    } else if (this.countryList[1] !== '') {
      if (colors[2] === '#fff') {
        colors[2] = '#ccc';
      }
      this.setState({ secondVis: { display: 'none' }, secondBtnclass: classes.BtnCountry, colors });
    } else {
      this.setState({ show: true, errorMsg: "Veuillez d'abord sélectionner un premier pays" });
    }
  }

  render() {
    return (
      <span>
        <div className={classes.Selector}>
          <button type="button" className={this.state.firstBtnclass} onClick={() => this.toggleList(0)}>
            <span className={classes.Dot} style={{ backgroundColor: this.state.colors[1] }} />
            <span>{this.state.firstCountry}</span>
            <i className={`fas fa-sort-down ${classes.Arrow}`} />
          </button>
          <div style={this.state.firstVis}>
            <div className={classes.ListSearch}>
              <br />
              <span>Chercher un pays</span>
              <br />
              <span>
                <input
                  type="text"
                  // A changer -> passer type graph en props + id ?
                  name="fname"
                  value={this.state.firstValue}
                  onChange={e => this.filterCountries(e.target.value, 0)}
                  placeholder="Ex: France"
                />
                <i className={`fas fa-search ${classes.Search}`} />
              </span>
              <br />
              <div
                id="FRA"
                value="France"
                onClick={e => this.setCountry(e, 0, 'France')}
                onKeyPress={e => this.setCountry(e, 0, 'France')}
                role="button"
                tabIndex={0}
              >
              France
              </div>
              <hr />
              {this.getCountryList(0)}
            </div>
          </div>
        </div>
        <span className={classes.Text}> et </span>
        <div className={classes.Selector}>
          <button type="button" className={this.state.secondBtnclass} onClick={() => this.toggleList(1)}>
            <span className={classes.Dot} style={{ backgroundColor: this.state.colors[2] }} />
            <span>{this.state.secondCountry}</span>
            <i className={`fas fa-sort-down ${classes.Arrow}`} />
          </button>
          <div style={this.state.secondVis}>
            <div className={classes.ListSearch}>
              <br />
              <span>Chercher un pays</span>
              <br />
              <span>
                <input
                  type="text"
                  // A changer -> passer type graph en props + id ?
                  name="fname"
                  value={this.state.secondValue}
                  onChange={e => this.filterCountries(e.target.value, 1)}
                  placeholder="Ex: France"
                />
                <i className={`fas fa-search ${classes.Search}`} />
              </span>
              <br />
              <div
                id="FRA"
                value="France"
                onClick={e => this.setCountry(e, 1, 'France')}
                onKeyPress={e => this.setCountry(e, 1, 'France')}
                role="button"
                tabIndex={0}
              >
              France
              </div>
              <hr />
              {this.getCountryList(1)}
            </div>
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
        {((this.countryList[1] !== '')
          || (this.countryList[3] !== '')
          || (this.countryList[4] !== '')
          || (this.countryList[5] !== ''))
          ? (
            <span
              className={classes.BtnCancel}
              onClick={this.resetCountry}
              onKeyPress={this.resetCountry}
              role="button"
              tabIndex={0}
            >
              annuler
              <span className="fa-stack">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-times fa-stack-1x" />
              </span>
            </span>
          ) : null}
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
  colors: PropTypes.array.isRequired,
  countryCode: PropTypes.string.isRequired,
};
