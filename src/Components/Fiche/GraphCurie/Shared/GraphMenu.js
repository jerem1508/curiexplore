import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './GraphMenu.scss';

// TODO : ADD REMOVE FUNCTION HERE

export default class GraphMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidMount() {
    const tempColor = [];

    for (let i = 0; i < this.props.colors.length; i += 1) {
      tempColor.push('#ccc');
    }
    this.setState({ colors: tempColor });
  }

  changeStyle(e, id) {
    // alert(this.state.colors.length);
    const colors = this.state.colors;
    if (this.state.colors[id] === '#ccc') {
      colors[id] = this.props.colors[id];
    } else {
      colors[id] = '#ccc';
    }
    this.setState({ colors });
    this.props.toggleCountry(e.target.id, this.state.colors);
  }

  render() {
    return (
      <span>
        <span className={classes.BtnCountry}>
          <span className={classes.Dot} style={{ backgroundColor: this.state.colors[1] }} />
          Choisir un pays
          <i className={`fas fa-sort-down ${classes.Arrow}`} />
        </span>
        <span className={classes.Text}> et </span>
        <span className={classes.BtnCountry}>
          <span className={classes.Dot} style={{ backgroundColor: this.state.colors[2] }} />
          Choisir un pays
          <i className={`fas fa-sort-down ${classes.Arrow}`} />
        </span>
        <span className={classes.Text}> et avec </span>
        <span>
          <button type="button" id="WLD" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 3)}>
            <span id="WLD" className={classes.Dot} style={{ backgroundColor: this.state.colors[3] }} />
              Monde
          </button>
        </span>
        <span>
          <button type="button" id="OED" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 4)}>
            <span id="OED" className={classes.Dot} style={{ backgroundColor: this.state.colors[4] }} />
              OCDE
          </button>
        </span>
        <span>
          <button type="button" id="EUU" className={classes.BtnDefaultCountry} onClick={e => this.changeStyle(e, 5)}>
            <span id="EUU" className={classes.Dot} style={{ backgroundColor: this.state.colors[5] }} />
              UE
          </button>
        </span>
      </span>
    )
  }
}


GraphMenu.propTypes = {
  toggleCountry: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
};
