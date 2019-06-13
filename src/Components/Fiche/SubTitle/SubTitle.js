import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './SubTitle.scss';

const SubTitle = props => (
  <div className={`row ${classes.SubTitle}`}>
    <div className="col">
      <div>
        {props.callbackLabel}
      </div>
      <div>
        {props.label}
      </div>
    </div>
  </div>
);

export default SubTitle;

SubTitle.propTypes = {
  callbackLabel: PropTypes.string,
  label: PropTypes.string,
};
