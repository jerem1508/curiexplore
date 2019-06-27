import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './GraphMenu.scss';

// TODO : ADD REMOVE FUNCTION HERE

const isoList = require('../../../Homepage/CountriesList/countriesList.json');

export default class GraphMenu extends Component {
  constructor(props) {
    super(props);
    this.countryList = [];
    this.state = {
      colors: [],
      vis: ['hidden', 'hidden'],
      firstCountry: 'Choisir un pays',
      secondCountry: 'Choisir un pays',
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.getCountryList = this.getCountryList.bind(this);
    this.setCountry = this.setCountry.bind(this);
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
      ctryList.push(<button type="button" id={isoList[i].ISO_alpha3} value={isoList[i].Pays} style={{ border: '0' }} onClick={e => this.setCountry(e, id)}>{isoList[i].Pays}</button>);
      ctryList.push(<br />);
    }
    return (
      <div style={{ overflowY: 'auto', height: '280px' }}>
        {ctryList}
      </div>
    );
  }

  setCountry(e, id) {
    // eslint-disable-next-line
    const vis = this.state.vis;

    if (id === 0) {
      vis[0] = 'hidden';
      this.setState({ firstCountry: e.target.value });
    } else {
      vis[1] = 'hidden';
      this.setState({ secondCountry: e.target.value });
    }
    this.setState({ vis });
    this.changeStyle(e, id + 1);
  }

  changeStyle(e, id) {
    // eslint-disable-next-line
    const colors = this.state.colors;
    if (this.state.colors[id] === '#ccc') {
      colors[id] = this.props.colors[id];
    } else {
      colors[id] = '#ccc';
    }
    this.setState({ colors });
    this.props.toggleCountry(e.target.id, this.state.colors);
  }

  toggleList(id) {
    // eslint-disable-next-line
    let vis = this.state.vis;
    if (vis[id] === 'hidden') {
      vis[id] = 'visible';
    } else {
      vis[id] = 'hidden';
    }
    this.setState({ vis });
  }

  render() {
    const CountryList = props => (
      <div>
        <br />
        Chercher un pays
        <br />
        <input type="text" name="fname" placeholder="Ex: France" />
        <br />
        France
        <br />
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
          <div style={{ visibility: this.state.vis[0] }}>
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
          <div style={{ visibility: this.state.vis[1] }}>
            <CountryList id={1}/>
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
      </span>
    );
  }
}


GraphMenu.propTypes = {
  toggleCountry: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
};
