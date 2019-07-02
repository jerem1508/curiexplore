import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Fiche.scss';

/**
 * CounterCard
 * Url : .
 * Description : .
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/

const CounterCard = props => (
  <div className={`col-lg-4 ${classes.col}`}>
    <div className={(props.count === 0) ? classes.CounterCardEmpty : classes.CounterCard}>
      <i className={props.icon} />
      <div>
        {
          (props.count !== 0)
            ? (
              <div>
                <span>{props.count}</span>
                &nbsp;
                {props.label}
              </div>
            ) : (
              <div>
                Non renseigné
                <div className={classes.label}>
                  {props.label}
                </div>
              </div>
            )
        }
      </div>
      <div className={classes.Buttons} style={(props.count === 0) ? { display: 'none' } : null}>
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

export default CounterCard;

CounterCard.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  label: PropTypes.string,
  anchor: PropTypes.string,
};
