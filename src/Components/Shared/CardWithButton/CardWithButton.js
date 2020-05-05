import React from 'react';
import PropTypes from 'prop-types';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './CardWithButton.scss';

const CardWithButton = (props) => {
  let bgColor = '';
  let position = '';
  if (props.schema) {
    bgColor = classes[`${props.schema}`];
  }
  if (props.position) {
    position = classes[`${props.position}`];
  }
  return (
    <div className="col-lg" style={{ padding: '0px' }}>
      <div className={`${classes.CardWithButton} ${bgColor} ${position}`}>
        <div className={classes.Title}>
          {props.title}
        </div>
        <div>
          <ButtonToPage
            className={classes.Button}
            url={props.url}
          >
            {props.lib_button}
          </ButtonToPage>
        </div>
      </div>
    </div>
  );
};


export default CardWithButton;

CardWithButton.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lib_button: PropTypes.string.isRequired,
  position: PropTypes.string,
};
