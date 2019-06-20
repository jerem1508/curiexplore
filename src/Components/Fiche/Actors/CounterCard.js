import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Actors.scss';

const CounterCard = (props) => {
  return (
      <div className={`col-lg-4 ${classes.CounterCard}`}>
        <i className={props.icon} />
        <div>
          {props.label}
        </div>
        <div className={classes.Buttons}>
          <a
            href={props.href}
          >
            <span>Découvrir</span>
          </a>
        </div>
      </div>
  )
};

export default CounterCard;

CounterCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
};
