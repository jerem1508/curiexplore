import React from 'react';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

import HomepageMaps from './Maps/Maps';
import CountriesList from './CountriesList/CountriesList';
// import Updates from './Updates/Updates';
import BannerOpendata from '../Shared/BannerOpendata/BannerOpendata';


import classes from './Home-page.scss';

const HomePage = () => (
  <main className={`container-fluid ${classes.HomePage}`}>
    <Header />

    <HomepageMaps />

    <CountriesList />

    <BannerOpendata />

    <Footer />
  </main>
);

export default HomePage;
