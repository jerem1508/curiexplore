import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import classes from './HeaderTitle.scss';

const HeaderTitle = props => (
  <section className={classes.HeaderTitle}>
    <div className="container">
      <div className={`row ${classes.Content}`}>
        <div className="col">
          <nav className={classes.BreadCrumb} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  Accueil
                </a>
              </li>
              {
                (props.countryName)
                  ? (
                    <li className={`breadcrumb-item ${classes.itemActive}`} aria-current="page">
                      {`Fiche Curie - ${props.countryName}`}
                    </li>
                  ) : null
              }
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className={classes.Title}>
          {props.countryName}
        </div>
      </div>
    </div>
  </section>
);

export default HeaderTitle;

HeaderTitle.propTypes = {
  countryName: PropTypes.string.isRequired,
};
