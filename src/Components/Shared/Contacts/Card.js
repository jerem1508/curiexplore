import React from 'react';

import classes from './Contacts.scss';

const Card = (props) => {

  return (
    <div className={`col-lg-4 ${classes.Card}`}>
      <div className={`d-flex flex-column ${classes.Container}`}>
        <div className={classes.TopBanner} />

        <div className={classes.Title}>
          {props.title}
        </div>
        <div className={classes.SubTitle}>
          <span>
            <i className="fas fa-map-marker" />
          </span>
          Localisation
        </div>
        <div className={classes.Address}>
          <div>
            {props.address}
          </div>
          <div>
            {props.ville}
          </div>
        </div>
        <div className={classes.Buttons}>
          <a
            href={props.webSite}
            target="_blank"
            className={classes.Button}
            rel="noopener noreferrer"
          >
            <span>Voir le siteweb</span>
            <span>
              <i className="fas fa-external-link-square-alt" />
            </span>
          </a>
        </div>
        <div className={classes.SubTitle}>
          <span>
            <i className="fas fa-share-alt" />
          </span>
          Réseaux sociaux
        </div>
        <div className="mt-auto">
          <hr />
          <div className={classes.Error}>
            <span>
              <i className="fas fa-flag" />
            </span>
            <span>
              Signaler une erreur
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
