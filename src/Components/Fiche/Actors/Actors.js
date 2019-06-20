import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterCard from './CounterCard';

/* SCSS */
import classes from './Actors.scss';

/**
 * Actors
 * Url : /fiche/code ISO
 * Description : Acteurs d'un pays
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/

class Actors extends Component {
  state = {
  };

  render() {
    return (
      <div className={classes.Actors}>
        <div className="row">
          <div className={`col ${classes.Map}`}>
            map
          </div>
        </div>
        <div className="row">
          <CounterCard
            icon="fas fa-thumbtack fa-2x"
            label="acteurs stratégiques"
            href="#example"
          />
          <CounterCard
            icon="fas fa-money-bill-wave fa-2x"
            label="acteurs de financement"
          />
        </div>
      </div>
    );
  }
}

export default Actors;
