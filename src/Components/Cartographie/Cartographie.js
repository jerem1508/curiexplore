/* eslint-disable import/no-useless-path-segments */
import React, { Component } from 'react';
import Axios from 'axios';

import Menu from './MapMenu/';
import InterractiveMap from './InterractiveMap/';
import MapSlider from './MapSlider';

import Header from '../Shared/Header/Header';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import Footer from '../Shared/Footer/Footer';

import { API_ODS_ENDPOINT, ODS_API_KEY } from '../../config/config';

// import classes from './Cartographie.scss';

const indicateursListe = require('./Cartographie-data/indicateurs_carto.json');

class Cartographie extends Component {
  state = {
    selectedIndicator: null,
    APIdata: [],
    yearsBounds: [],
    valuesBounds: [],
    source: null,
    readyData: [],
    currentYear: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedIndicator !== this.state.selectedIndicator) {
      this.getData();
    }
  }

  getMinValue = data => (data.reduce((min, p) => (p.value < min ? p.value : min), data[0].value))

  getMaxValue = data => (data.reduce((max, p) => (p.value > max ? p.value : max), data[0].value))

  arrangeData = () => {
    const readyData = [];

    const arrOfMin = [];
    const arrOfMax = [];

    // Parcours des années du range
    for (let y = this.state.yearsBounds[0]; y <= this.state.yearsBounds[1]; y += 1) {
      const obj = {};
      obj.year = y;

      // Récupération des données de chaque pays pour l'année en cours
      const dataForThisYear = this.state.APIdata.records.filter(item => (item.fields.year === y.toString() && item.fields.country_code.length === 3));
      obj.data = [];

      let min = dataForThisYear[0].fields.value;
      let max = dataForThisYear[0].fields.value;

      // eslint-disable-next-line no-loop-func
      dataForThisYear.forEach((country) => {
        obj.data.push({ iso: country.fields.country_code, value: country.fields.value });

        if (country.fields.value < min) { min = country.fields.value; }
        if (country.fields.value > max) { max = country.fields.value; }
      });

      arrOfMin.push(min);
      arrOfMax.push(max);
      readyData.push(obj);
    }

    // Math.min ne fonctionne pas ...
    // Recherche de la plus petite valeur
    let minValue = arrOfMin[0];
    arrOfMin.forEach((el) => {
      if (el < minValue) { minValue = el; }
    });

    // Recherche de la plus grande valeur
    let maxValue = arrOfMax[0];
    arrOfMin.forEach((el) => {
      if (el > maxValue) { maxValue = el; }
    });

    this.setState({ readyData, valuesBounds: [minValue, maxValue] });
  }

  getData = () => {
    // Premiere requete pour récupérer le nombre d'enregistrements
    let url = `${API_ODS_ENDPOINT}/?apikey=${ODS_API_KEY}&dataset=curiexplore-donnees-quantitatives&rows=0&sort=country_code&refine.code=${this.state.selectedIndicator}`;
    Axios.get(url)
      .then((responseNHits) => {
        // Récupération des données
        url = `${API_ODS_ENDPOINT}/?apikey=${ODS_API_KEY}&dataset=curiexplore-donnees-quantitatives&rows=${responseNHits.data.nhits}&sort=year&refine.code=${this.state.selectedIndicator}&facet=year&facet=source`;
        Axios.get(url)
          .then((response) => {
            const years = response.data.facet_groups.find(fg => fg.name === 'year').facets.map(y => y.name);
            const minYear = Math.min(...years);
            const maxYear = Math.max(...years);

            this.setState({
              APIdata: response.data,
              yearsBounds: [minYear, maxYear],
              currentYear: minYear,
              source: response.data.facet_groups.find(fg => fg.name === 'source').facets[0].name,
            });

            this.arrangeData();
          })
          .catch();
      })
      .catch();
  }

  changeYear = (year) => {
    this.setState({ currentYear: year });
    // this.changeLayer(null, null, this.confIndex, this.size);
  }

  render() {
    return (
      <main>
        <Header />

        <HeaderTitle
          labelkey="cartographie"
          url1="/"
          url2="/cartographie"
        />

        <Menu
          indicateursListe={indicateursListe}
          onIndicateurChangeHandler={selectEvent => this.setState({ selectedIndicator: selectEvent.target.value })}
          legende={[]}
          source={this.state.source}
        />

        <InterractiveMap
          data={this.state.readyData || []}
          currentYear={this.state.currentYear}
          currentIndicator={this.state.selectedIndicator}
          valuesBounds={this.state.valuesBounds}
          nbColors={6}
        />

        <MapSlider
          yearInterval={this.state.yearsBounds}
          defaultYear={this.state.currentYear}
          changeYear={this.changeYear}
          type={this.state.selectedIndicator}
        />

        <Footer />
      </main>
    );
  }
}

export default Cartographie;
