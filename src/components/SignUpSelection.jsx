import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/domenico-gentile-8QK6sAe-46Y-unsplash.jpg';
import NavBar from './navbar';

const SignUpSelection = () => {
    return (
        <div className="flex justify-center items-center h-screen" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // Ensure the image covers the area
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Do not tile the image
        }}>
            <div className="mx-4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Are you a Startup?</h2>
                <p>Describe what a startup is...</p>
                <Link to="/signup/startup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Startup</Link>
            </div>
            <NavBar />
            <div className="flex justify-center items-center h-full">
                <div className="mx-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Are you an Investor?</h2>
                    <p>Describe what an investor is...</p>
                    <Link to="/signup/investor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Investor</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpSelection;
