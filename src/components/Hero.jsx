import React from 'react';

const Hero = () => {
    return (
        <div className="text-center bg-cover h-screen" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
            <div className="flex flex-col justify-center items-center h-full bg-gray-900 bg-opacity-50">
                <h1 className="text-6xl font-bold text-white">Welcome to YourCompany</h1>
                <p className="text-xl text-gray-300 mt-4">Empowering Startups and Investors</p>
            </div>
        </div>
    );
};

export default Hero;
