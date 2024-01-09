import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/jan-antonin-kolar-vLxXvapupqI-unsplash.jpg';
import NavBar from './navbar';

const SignUpSelection = () => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <NavBar />
            <div className="flex justify-around items-center min-h-screen pt-16 px-4 md:px-12">
                <div className="bg-gray-400 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Are you a Startup?</h2>
                    <p>Describe what a startup is...</p>
                    <Link to="/signup/startup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Startup</Link>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Are you an Investor?</h2>
                    <p>Describe what an investor is...</p>
                    <Link to="/signup/investor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Investor</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpSelection;
