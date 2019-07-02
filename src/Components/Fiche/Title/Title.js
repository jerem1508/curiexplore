import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Title.scss';

const Title = props => (
  <div className={`row ${classes.Title}`} style={props.cssStyle}>
    <div className="col">
      <i className={props.icon} />
      <span>
        {props.label}
      </span>
    </div>
  </div>
);

export default Title;

Title.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  cssStyle: PropTypes.string,
};
