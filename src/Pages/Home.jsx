import React from 'react';
import Banner from '../HomeLayOut/Banner';
import RecentVehicles from '../HomeLayOut/RecentVehicles';
import AboutUs from '../HomeLayOut/AboutUS';
import TopCategories from '../HomeLayOut/TopCategories';
import Newsletter from './Newsletter';
import Services from './Service';
import FaqHome from './FaqHome';
import BlogHome from './BlogHome';
import CustomerReview from './CustomerReview'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentVehicles></RecentVehicles>
            <TopCategories></TopCategories>
            <Services></Services>  
            <CustomerReview></CustomerReview>
            <AboutUs></AboutUs>
            <BlogHome></BlogHome>
            <FaqHome></FaqHome>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;