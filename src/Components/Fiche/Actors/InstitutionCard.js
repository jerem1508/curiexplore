import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

/* SCSS */
import classes from './InstitutionCard.scss';

const InstitutionCard = (props) => {
  /* eslint-disable-next-line */
  const description = props.description.replace(/style=\"[^\"]*\"/g, '');
  return (
    <div className={`col-lg-4 ${classes.col}`}>
      <div className={classes.InstitutionCard}>

        <div className={`h5 ${classes.title}`}>
          {props.nomFr}
        </div>

        <div className={classes.subtitle}>
          {props.nom}
        </div>

        <div className={classes.sigle}>
          <div>
            {props.sigleFr}
          </div>
          <div>
            {props.sigle}
          </div>
        </div>

        <div className={`overflow-auto ${classes.description}`}>

          <div className={classes.descriptionTitle}>
            <i className="fas fa-file-alt" />
            &nbsp;
            Description
          </div>

          <div className={classes.descriptionText}>
            {Parser(description)}
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

      </div>
    </div>
  );
};

export default InstitutionCard;

InstitutionCard.propTypes = {
  // language: PropTypes.string.isRequired,
  nomFr: PropTypes.string,
  nom: PropTypes.string,
  sigleFr: PropTypes.string,
  sigle: PropTypes.string,
  description: PropTypes.string,
  webSite: PropTypes.string,
};
