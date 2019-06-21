import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './SubTitleActors.scss';

const SubTitleActors = props => (
  <div className={`row ${classes.SubTitleActors}`}>
    <div className="col">
      <i className={props.icon} />
      &nbsp;&nbsp;
      {props.label}
    </div>
  </div>
);

export default SubTitleActors;

SubTitleActors.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};
