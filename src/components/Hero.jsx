import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import backgroundImage from '../assets/jan-antonin-kolar-vLxXvapupqI-unsplash.jpg';

const Hero = () => {
    const navigate = useNavigate(); // Create a navigate function

    // Function to handle navigation
    const navigateToSignup = () => {
        navigate('/signup'); // Replace '/signupselection' with the correct path
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex flex-col justify-center items-center h-full bg-[#847e70] bg-opacity-60">
                <h1 className="text-6xl font-bold text-yellow-200 mb-4">Empowering Startups and Investors</h1>
                <p className="text-xl text-yellow-300">Building the Future Together</p>
                <button 
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-6 rounded mt-6 transition duration-300 ease-in-out"
                    onClick={navigateToSignup}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
