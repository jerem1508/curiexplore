import React, { Component } from 'react';
import { Map, GeoJSON } from 'react-leaflet';

import getFrenchNameFromIso from '../../../Utils/getFrenchNameFromIso';

import Button from '../../../Shared/Ui/Buttons/Button';

import worldGeoJSON from '../../../../Data/custom.geo.json';

/* SCSS */
import variables from '../../../../style.scss';
import classes from './Maps.scss';

class Maps extends Component {
  state = {
    selected: 'world',
  };

  onClickHandler = (selected) => {
    this.setState({ selected });
  }

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: () => { layer.setStyle({ fillColor: `${variables.mapCountryHighlightColor}` }); },
      mouseout: () => { layer.setStyle({ fillColor: `${variables.mapCountryColor}` }); },
      click: () => { window.location.href = `/fiche/${feature.properties.iso_a3}`; },
    });

    layer.bindTooltip(getFrenchNameFromIso(feature.properties.iso_a3));
  }

  render() {
    return (
      <section className={`container-fluid ${classes.Maps}`}>
        <div className="container">
          <h1>
            CurieXplore
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
          {
            /*
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
            */
          }

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
              Afrique du Nord / Moyen Orient
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
          <div className={classes.MapContainer}>
            <Map
              className={classes.Map}
              center={[50, 10]}
              zoom={2}
              maxZoom={10}
              maxBounds={[[85, -180], [-85, 180]]}
              attributionControl
              zoomControl
              doubleClickZoom
              scrollWheelZoom={false}
              dragging
              animate
              easeLinearity={0.35}
              style={{
                backgroundColor: `${variables.mapBgColor}`,
              }}
            >
              <GeoJSON
                data={worldGeoJSON}
                style={() => ({
                  color: `${variables.mapBgColor}`,
                  fillColor: `${variables.mapCountryColor}`,
                  weight: 0.7,
                  fillOpacity: 1,
                })}
                onEachFeature={this.onEachFeature}
              />
            </Map>
          </div>
        </div>
      </section>
    );
  }
}

export default Maps;
