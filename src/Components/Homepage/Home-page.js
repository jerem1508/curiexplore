import React from 'react';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

import HomepageMaps from './Components/Maps/Maps';
import CountriesList from './Components/CountriesList/CountriesList';
import BannerCartographie from '../Shared/BannerCartographie/BannerCartographie';
import Updates from './Components/Updates/Updates';
import BannerOpendata from '../Shared/BannerOpendata/BannerOpendata';


import classes from './Home-page.scss';

const HomePage = () => (
  <main className={`container-fluid ${classes.HomePage}`}>
    <Header />

    <HomepageMaps />

    <CountriesList />

    <BannerCartographie />

    <Updates />

    <BannerOpendata />

    <Footer />
  </main>
);

export default HomePage;
