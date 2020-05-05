import React from 'react';
import PropTypes from 'prop-types';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './Banner.scss';

const Banner = props => (
  <section className={`${classes.Banner} ${classes[props.cssClass]}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          titre
        </div>
        <div className={`col-lg-3 ${classes.ContainerButton}`}>
          <div className={classes.Button}>
            <ButtonToPage
              url={props.url}
              target={props.target}
            >
              bt
            </ButtonToPage>
          </div>
        </div>
      </div>

    </div>
  </section>
);


export default Banner;

Banner.propTypes = {
  cssClass: PropTypes.string,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
};
