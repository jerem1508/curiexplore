import React from 'react';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './DiscoverDataEsr.scss';

const DiscoverDataEsr = () => (
  <section className={classes.DiscoverDataEsr}>
    <div className="container">
      <div className="row">
        <div className="col-lg">
          text
        </div>
        <div className="col-lg-2 text-right">
          <ButtonToPage
            className={classes.Button}
            url=""
          >
            BT
          </ButtonToPage>
        </div>
      </div>
    </div>
  </section>
);

export default DiscoverDataEsr;
