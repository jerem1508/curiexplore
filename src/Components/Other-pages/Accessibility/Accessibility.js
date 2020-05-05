import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';

/* SCSS */
import classes from './Accessibility.scss';

const Accessibility = props => (
  <div className={`container-fluid ${classes.Accessibility}`}>
    <Header
      language={props.language}
      switchLanguage={props.switchLanguage}
    />
    <section>
      <HeaderTitle
        language={props.language}
        label="accessibility"
      />
    </section>
    <Footer language={props.language} />
  </div>
);

export default Accessibility;

Accessibility.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};
