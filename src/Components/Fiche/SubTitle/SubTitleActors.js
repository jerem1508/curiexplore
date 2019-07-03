import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './SubTitleActors.scss';

const SubTitleActors = props => (
  <div className={`row ${classes.SubTitleActors}`}>
    <div className="col">
      <i className={props.icon} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      {
        (props.count === 0)
          ? (
            <span>Non renseigné -</span>
          ) : (<span>{props.count}</span>)
      }

      &nbsp;
      {props.label}
    </div>
  </div>
);

export default SubTitleActors;

SubTitleActors.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  label: PropTypes.string,
};
