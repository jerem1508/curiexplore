import React from 'react';
import PropTypes from 'prop-types';

import classes from './Contacts.scss';

const Card = props => (
  <div
    className={`col-lg-4 ${classes.Card}`}
    onClick={() => props.onClickHandler(props.type)}
    onKeyPress={() => props.onClickHandler(props.type)}
    role="button"
    tabIndex={0}
  >
    <div className={`d-flex flex-column ${classes.Container}`}>
      <div className={(props.selected) ? classes.TopBannerSelected : classes.TopBanner} />
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
      <div className={classes.SocialNetworks}>
        {
          (props.twitter) ? (
            <a href={props.twitter}>
              <i className="fab fa-twitter" />
            </a>
          ) : null
        }
        {
          (props.instagram) ? (
            <a href={props.instagram}>
              <i className="fab fa-instagram" />
            </a>
          ) : null
        }
        {
          (props.facebook) ? (
            <a href={props.facebook}>
              <i className="fab fa-facebook" />
            </a>
          ) : null
        }
        {
          (props.otherSocialNetwork) ? (
            <a href={props.otherSocialNetwork}>
              ?
            </a>
          ) : null
        }
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

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  ville: PropTypes.string,
  webSite: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  otherSocialNetwork: PropTypes.string,
  onClickHandler: PropTypes.func,
  type: PropTypes.string,
  selected: PropTypes.bool,
};
