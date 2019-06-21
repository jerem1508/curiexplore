import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Fiche.scss';

const CounterCard = (props) => {
  return (
    <div className={`col-lg-4 ${classes.col}`}>
      <div className={classes.CounterCard}>
        <i className={props.icon} />
        <div>
          <span>8</span>
          &nbsp;
          {props.label}
        </div>
        <div className={classes.Buttons}>
          <a
            href={props.anchor}
            className={classes.Button}
            rel="noopener noreferrer"
          >
            Découvrir
          </a>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;

CounterCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  anchor: PropTypes.string,
};
