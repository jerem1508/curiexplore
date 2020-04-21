import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Title.scss';

const Title = props => (
  <div className={`row ${classes.Title}`}>
    <div className="col">
      <i className={props.icon} />
      {
        (props.code) ? (
          <a href={`/Fiche/${props.code}`}>
            {props.label}
          </a>
        )
          : (
            <span>
              {props.label}
            </span>
          )
      }
    </div>
  </div>
);

export default Title;

Title.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  code: PropTypes.bool,
};
