import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './Button.scss';

const ButtonToPage = props => (
  <span
    onClick={() => props.onClickHandler(props.keyToSelect)}
    className={`btn ${classes.Button} text-center ${props.className}`}
    onKeyPress={() => props.onClickHandler(props.keyToSelect)}
    tabIndex={0}
    role="button"
  >
    {props.children}
  </span>
);

export default ButtonToPage;

ButtonToPage.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  keyToSelect: PropTypes.string,
  onClickHandler: PropTypes.func,
};
