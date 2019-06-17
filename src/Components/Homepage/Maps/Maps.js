import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Map, Marker, TileLayer, GeoJSON
} from 'react-leaflet';

import Button from '../../Shared/Ui/Buttons/Button';
// import MapSVG from './mapSVG';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

import worldGeoJSON from './custom.geo.json';

/* SCSS */
import classes from './Maps.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

class Maps extends Component {
  state = {
    selected: 'world',
  };

  onClickHandler = (selected) => {
    this.setState({ selected });
  }

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: () => { layer.setStyle({ fillColor: '#fff' }); },
      mouseout: () => { layer.setStyle({ fillColor: '#ffeec9' }); },
      click: () => { window.location.href = `/fiche/${feature.properties.iso_a3}`; },
    });
  }

  render() {
    return (
      <IntlProvider locale={this.props.language} messages={messages[this.props.language]}>
        <section className={`container-fluid ${classes.Maps}`}>
          <div className="container">
            <h1>
              Curie
              <strong>Discover</strong>
            </h1>
            <h2>
              La plateforme d&#39;exploration des&nbsp;
              <span className={classes.HighLight}>
                systèmes d&#39;enseignement supérieur,
                <br />
                de recherche et d&#39;innovation
              </span>
              &nbsp;des pays étrangers
            </h2>
            <hr />
            <div className="row">
              <div className={`col ${classes.Label1}`}>
                <div>Explorez un pays</div>
                <div>Cliquez sur un pays pour accéder à sa fiche Curie</div>
              </div>
              <div className="col">
                <select className="form-control">
                  <option>Sélectionner un groupe de pays</option>
                </select>
              </div>
            </div>
            <hr />
            <div>
              <span className={classes.Label2}>zoom sur...</span>
              <Button
                className={(this.state.selected === 'world') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="world"
              >
                Monde
              </Button>
              <Button
                className={(this.state.selected === 'africa') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="africa"
              >
                Afrique
              </Button>
              <Button
                className={(this.state.selected === 'america') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="america"
              >
                Amérique
              </Button>
              <Button
                className={(this.state.selected === 'northAfrica') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="northAfrica"
              >
                Afrique du Nord / Mot. Orient
              </Button>
              <Button
                className={(this.state.selected === 'asia') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="asia"
              >
                Asie
              </Button>
              <Button
                className={(this.state.selected === 'europa') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="europa"
              >
                Europe
              </Button>
              <Button
                className={(this.state.selected === 'oceania') ? classes.BtnBlueSelected : classes.BtnBlue}
                onClickHandler={this.onClickHandler}
                keyToSelect="oceania"
              >
                Océanie
              </Button>
            </div>
          </div>
          <div className={classes.Map}>
            {
              /*
              <MapSVG
                fill="#ffeec9"
                height="550"
                width=""
                className={classes.MapSVG}
              />
              */
            }
            <div className={classes.MapContainer}>
              <Map
                className={classes.Map}
                center={[50, 10]}
                zoom={2}
                maxZoom={10}
                attributionControl
                zoomControl
                doubleClickZoom
                scrollWheelZoom={false}
                dragging
                animate
                easeLinearity={0.35}
                style={{
                  backgroundColor: '#FFB200',
                }}
              >
                <GeoJSON
                  data={worldGeoJSON}
                  style={() => ({
                    color: '#777',
                    fillColor: '#ffeec9',
                    weight: 0.5,
                    fillOpacity: 1,
                  })}
                  onEachFeature={this.onEachFeature}
                />
              </Map>
            </div>
          </div>
        </section>
      </IntlProvider>
    );
  }
}

export default Maps;

Maps.propTypes = {
  language: PropTypes.string.isRequired,
};
