import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from '../Fiche.scss';

/**
 * CounterCard
 * Url : .
 * Description : .
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/

const CounterCard = (props) => {
  const data = props.data.find(item => item.id === props.id);
  const count = (data) ? data.data.length : 0;
  return (
    <div className={`col-lg-4 ${classes.col}`}>
      <div className={(count === 0) ? classes.CounterCardEmpty : classes.CounterCard}>
        <i className={props.icon} />
        <div>
          {
            (count !== 0)
              ? (
                <div>
                  <span>{count}</span>
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
        <div className={classes.Buttons} style={(count === 0) ? { display: 'none' } : null}>
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
  data: PropTypes.array,
  id: PropTypes.string,
};
