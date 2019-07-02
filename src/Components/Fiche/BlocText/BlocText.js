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
const BlocText = props => (
  <div className={classes.BlocText}>
    <div className={classes.Text}>
      {Parser(props.data)}
    </div>
  </div>
);

export default BlocText;

BlocText.propTypes = {
  data: PropTypes.string.isRequired,
};
