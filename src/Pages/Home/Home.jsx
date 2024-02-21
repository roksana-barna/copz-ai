import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Trusted from '../../Components/Trusted/Trusted';
import Material from '../../Components/Material/Material';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dashboard></Dashboard>
            <Trusted></Trusted>
            <Material></Material>
        </div>
    );
};

export default Home;