import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HighlightsGrid from '../components/HighlightsGrid';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <HighlightsGrid />
        </>
    );
};

export default Home;