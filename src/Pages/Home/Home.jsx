import React from 'react';
import Banner from './Assets/Banner';
import WhyChoose from './Assets/WhyChoose';
import RecentListing from './RecentListing';
import SpecialOffers from './SpecialOffers';

const Home = () => {
    return (
        <div>
            <section><Banner></Banner></section>
            <section><WhyChoose></WhyChoose></section>
            <section><RecentListing></RecentListing></section>
            <section><SpecialOffers></SpecialOffers></section>
        </div>
    );
};

export default Home;