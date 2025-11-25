import React from 'react';
import Banner from '../HomeLayOut/Banner';
import RecentVehicles from '../HomeLayOut/RecentVehicles';
import AboutUs from '../HomeLayOut/AboutUS';
import TopCategories from '../HomeLayOut/TopCategories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentVehicles></RecentVehicles>
            
            <TopCategories></TopCategories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;