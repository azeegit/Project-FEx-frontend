import React from 'react';
import NavBar from './navbar';
import Hero from './Hero';
import Testimonials from './testimonials';
import Investors from './Investors';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Testimonials />
            <Investors />
            <Footer />
        </div>
    );
};

export default LandingPage;
