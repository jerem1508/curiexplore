import React from 'react';
import PropTypes from 'prop-types';

import classes from './Source.scss';

const Source = props => (
  <div className={classes.Source}>
    {props.source || 'Analyse du réseau diplomatique français :'}
  </div>
);

export default Source;

Source.propTypes = {
  source: PropTypes.string,
};
