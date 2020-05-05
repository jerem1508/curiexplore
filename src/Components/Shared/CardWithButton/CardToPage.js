
import React from 'react';
import PropTypes from 'prop-types';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './CardToPage.scss';

const CardToPage = props => (
  <div className={`card text-center mb-1 ${classes.CardToPage} ${classes[props.cssClass]}`}>
    <div className={classes.Title}>
      {props.labelKey}
    </div>
    <div className={classes.Button}>
      <ButtonToPage
        className={`${classes.MarginTop} ${classes.Button}`}
        url={props.url}
        target={props.target}
      >
        {props.btnText}
      </ButtonToPage>
    </div>
  </div>
);


export default CardToPage;

CardToPage.propTypes = {
  cssClass: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
