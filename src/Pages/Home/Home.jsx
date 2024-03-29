import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Trusted from '../../Components/Trusted/Trusted';
import Material from '../../Components/Material/Material';
import Accordian from '../../Components/Accordian/Accordian';
import Genius from '../../Components/Genious work/Genius';
import Pricing from '../../Components/Pricing/Pricing';
import Content from '../../Components/Content/Content';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dashboard></Dashboard>
            <Trusted></Trusted>
            <Material></Material>
            <Content></Content>
            <Pricing></Pricing>
            <Genius></Genius>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;