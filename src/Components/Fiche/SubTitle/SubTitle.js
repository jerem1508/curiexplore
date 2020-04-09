import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './SubTitle.scss';

const SubTitle = props => (
  <div className={`row ${classes.SubTitle} ${(props.hasDarkShadow) ? classes.ShadowDark : classes.ShadowLight}`}>
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

SubTitle.defaultProps = {
  hasDarkShadow: false,
};

SubTitle.propTypes = {
  callbackLabel: PropTypes.string,
  label: PropTypes.string,
  hasDarkShadow: PropTypes.bool,
};
