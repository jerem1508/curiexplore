import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LastFocus from '../Shared/LastFocus/LastFocus';
import LexiconPanel from '../Shared/Lexicon/LexiconPanel';
import Newsletter from '../Shared/Newsletter/Newsletter';
import Banner from '../Shared/Banner/Banner';

import HomepageMaps from './Maps/Maps';
import CountriesList from './CountriesList/CountriesList';
import Updates from './Updates/Updates';
import BannerOpendata from '../Shared/BannerOpendata/BannerOpendata';


import classes from './Home-page.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lexiconTarget: null,
      isSearchFull: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSearchFull !== this.state.isSearchFull) {
      return true;
    }
    return false;
  }

  handleScroll = () => {
    if (window.scrollY) {
      if (this.state.isSearchFull) { this.setState({ isSearchFull: false }); }
    } else {
      /* eslint-disable */
      if (!this.state.isSearchFull && window.scrollY === 0) { this.setState({ isSearchFull: true }); }
      /* eslint-enable */
    }
  }

  lexiconHandler = (lexiconTarget) => {
    this.setState({ lexiconTarget });
  }

  render() {
    return (
      <div className={`container-fluid ${classes.HomePage}`} onScroll={this.handleScroll}>
        <Header
          language={this.props.language}
          switchLanguage={this.props.switchLanguage}
        />

        <HomepageMaps />

        <CountriesList />

        <Banner
          language={this.props.language}
          labelKey="WhatAreOurSources"
          cssClass="BannerLight"
          url="/ressources"
        />

        <Updates />

        <Banner
          language={this.props.language}
          labelKey="Appear"
          cssClass="BannerLight"
          url=""
        />

        <LastFocus language={this.props.language} />

        <BannerOpendata
          language={this.props.language}
        />

        <Newsletter language={this.props.language} />

        <Footer language={this.props.language} />

        <LexiconPanel
          language={this.props.language}
          target={this.state.lexiconTarget}
          lexiconHandler={this.lexiconHandler}
        />

      </div>
    );
  }
}

export default HomePage;

HomePage.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};
