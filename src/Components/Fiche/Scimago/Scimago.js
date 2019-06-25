import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Scimago.scss';

/**
 * Scimago
 * Url : Fiche/ISO_Pays
 * Description : Classement Scimago
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
class Scimago extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    return (
      <div className={classes.Scimago}>
        Scimago
      </div>
    );
  }
}

export default Scimago;

Scimago.propTypes = {
  language: PropTypes.string.isRequired,
};
