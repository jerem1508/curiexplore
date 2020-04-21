import React from 'react';
import PropTypes from 'prop-types';

import classes from './MapMenu.scss';

const MapMenu = props => (
  <section className={classes.MapMenu}>
    <div className="container">
      <div className="row">
        <div className="col">
          <span className={classes.SubTitle}>
            Sélectionner un indicateur
          </span>
          <select
            className="form-control"
            onChange={props.onIndicateurChangeHandler}
          >
            <option selected disabled>-</option>
            {
              props.indicateursListe.map(indicateur => (
                <option
                  value={indicateur.code}
                  key={indicateur.code}
                >
                  {indicateur.name}
                </option>
              ))
            }
          </select>
        </div>
        <div className="col">
          <span className={classes.SubTitle}>
            Complément de légende
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default MapMenu;

MapMenu.propTypes = {
  indicateursListe: PropTypes.array.isRequired,
  onIndicateurChangeHandler: PropTypes.func.isRequired,
  legende: PropTypes.array,
};
