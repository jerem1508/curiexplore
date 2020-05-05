import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Parser from 'html-react-parser';
// import { Map, TileLayer, Marker } from 'react-leaflet';

import LeafletMap from '../../Shared/Map/LeafletMap';

import Source from '../../Shared/Ui/Source/Source';

/* SCSS */
import classes from './ActorsMenuCard.scss';

/**
 * ActorsMenuCard
 * Url : .
 * Description : .
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
*/

class ActorsMenuCard extends Component {
  state = {
    show: false,
  };

  showModal = (show) => {
    this.setState({ show });
  }

  render() {
    const maxHeight = `${window.innerHeight - 250}px`;

    const count = (this.props.data) ? this.props.data.data.length : 0;

    let modalContent = null;
    if (this.state.show) {
      modalContent = (
        <div className="row">
          <div className="col">
            <LeafletMap
              height={maxHeight}
              show={this.state.show}
            />
          </div>
          <div className={`col ${classes.ColRight}`}>
            <div className={classes.SubTitle}>
              <i className={`${this.props.icon} ${classes.Icon}`} />
              <span className={`mr-2 ${classes.Counter}`}>{count}</span>
              <span className={classes.Label}>{this.props.label}</span>
            </div>
            <ul className={classes.List} style={{ maxHeight }}>
              {
                this.props.data.data.map((actor) => {
                  const sigleFr = actor.sigleinstitutionfr ? `(${actor.sigleinstitutionfr})` : '';
                  const sigle = actor.sigleinstitution ? `(${actor.sigleinstitution})` : '';
  
                  const institutionName1 = (actor.nominstitutionfr) ? actor.nominstitutionfr : actor.nominstitution;
                  const institutionName2 = (actor.nominstitutionfr && actor.nominstitution) ? actor.nominstitution : null;
                  return (
                    <li key={actor.tokenalt}>
                      <div className={classes.InstitutionName1}>
                        {`${institutionName1} ${sigleFr}`}
                      </div>
                      {
                        (institutionName1 !== institutionName2 && institutionName2)
                          ? (
                            <div className={classes.InstitutionName2}>
                              {`${institutionName2} ${sigle}`}
                            </div>
                          ) : null
                      }
                      {
                        actor.villeinstitution
                          ? (
                            <div>
                              <i className="fas fa-map-marker pr-2" />
                              {actor.villeinstitution}
                            </div>
                          ) : null
                      }
                      {
                        (actor.descriptioninstitutionclean)
                          ? (
                            <div>
                              <Source />
                              <div className={classes.Description}>
                                {Parser(actor.descriptioninstitutionclean || '')}
                              </div>
                            </div>
                          ) : null
                      }
                      <div className={classes.WebSite}>
                        <a
                          href={actor.siteinstitution}
                          target="_blank"
                          className={classes.LinkToWebsite}
                          rel="noopener noreferrer"
                        >
                          <span>Voir le siteweb</span>
                          <i className="fas fa-external-link-square-alt ml-2" />
                        </a>
                      </div>
                    </li>
                  );
                })
              }
              coordonneesinstitution
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="col-lg-4 pl-0 pr-0">
        <div className={(count === 0) ? classes.CounterCardEmpty : classes.CounterCard}>
          <i className={`${classes.Icon} ${this.props.icon}`} />
          <div>
            {
              (count !== 0)
                ? (
                  <div>
                    <span className="mr-1">{count}</span>
                    {this.props.label}
                  </div>
                ) : (
                  <div>
                    Non renseigné
                    <div className={classes.label}>
                      {this.props.label}
                    </div>
                  </div>
                )
            }
          </div>
          <div className={classes.Buttons} style={(count === 0) ? { display: 'none' } : null}>
            <button
              className={`btn mt-3 p-0 pl-2 pr-2 ${classes.Button}`}
              onClick={() => this.showModal(true)}
              onKeypress={() => this.showModal(true)}
              type="button"
              tabIndex={0}
              style={{ backgroundColor: this.props.bgColor }}
            >
              Découvrir
              <i className="fas fa-expand ml-2" />
            </button>
          </div>
        </div>
        <Modal
          show={this.state.show}
          onHide={() => this.showModal(false)}
          dialogClassName={classes.Modal80w}
          scrollable
          centered
        >
          <Modal.Header closeButton>
            <div className={classes.ModalTitle}>
              Liste des acteurs
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className={`container-fluid ${classes.Content}`}>
              {modalContent}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ActorsMenuCard;

ActorsMenuCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.array,
  bgColor: PropTypes.string,
};
