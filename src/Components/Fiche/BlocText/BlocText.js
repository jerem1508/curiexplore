import React from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

import classes from './BlocText.scss';

/**
 * BlocText
 * Url : .
 * Description : .
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/
const BlocText = (props) => {
  if (!props.data) { return null; }

  return (
    <div className={`${classes.BlocText} ${(props.hasDarkShadow) ? classes.ShadowDark : classes.ShadowLight}`}>
      <div className={classes.Text}>
        {Parser(props.data)}
      </div>
    </div>
  );
};

export default BlocText;

BlocText.defaultProps = {
  hasDarkShadow: false,
};

BlocText.propTypes = {
  data: PropTypes.string.isRequired,
  hasDarkShadow: PropTypes.bool,
};
