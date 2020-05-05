import React from 'react';
import PropTypes from 'prop-types';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './ComponentToPage.scss';

const ComponentToPage = props => (
/*  <IntlProvider locale={props.language} messages={messages[props.language]}> */
  <section className={`${classes.ComponentToPage} ${classes[props.cssClass]}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          {props.labelKey}
        </div>
        <div className="col-lg-2 text-right">
          <ButtonToPage
            className={`${classes.MarginTop} ${classes.Button}`}
            url={props.url}
          >
            {props.btnText}
          </ButtonToPage>

        </div>
      </div>
    </div>
  </section>
/*  </IntlProvider> */
);

export default ComponentToPage;

ComponentToPage.propTypes = {
  cssClass: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
