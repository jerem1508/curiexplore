import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../SubTitle/SubTitle';

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
            anchor="#example" // link to anchor

          />
          <CounterCard
            icon="fas fa-money-bill-wave fa-2x"
            label="acteurs de financement"
            anchor="#example"
          />
          <CounterCard
            icon="fas fa-star fa-2x"
            label="acteurs évaluations"
            anchor="#example"
          />
        </div>
        <div className="row">
          <CounterCard
            icon="fas fa-exchange-alt fa-2x"
            label="acteurs mobilités"
            anchor="#example" // link to anchor
          />
          <CounterCard
            icon="fas fa-microscope fa-2x"
            label="acteurs ES"
            anchor="#example"
          />
          <CounterCard
            icon="fas fa-lightbulb fa-2x"
            label="acteurs RI"
            anchor="#example"
          />
        </div>
        <div className="row">
          <CounterCard
            icon="fas fa-square-root-alt fa-2x"
            label="acteurs analyses"
            anchor="#example" // link to anchor
          />
          <CounterCard
            icon="fas fa-money-bill-wave fa-2x"
            label="acteurs de financement"
            anchor="#example"
          />
          <CounterCard
            icon="fas fa-star fa-2x"
            label="acteurs évaluations"
            anchor="#example"
          />
        </div>
        <SubTitle
          callbackLabel=""
          label="8 acteurs stratégiques"
        />
      </div>
    );
  }
}

export default Actors;
