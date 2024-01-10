import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/raul-varzar-s-EkKaf208w-unsplash.jpg';
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
            <div className="flex flex-wrap justify-around items-center min-h-screen pt-16 px-4 md:px-12">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg text-center shadow-lg max-w-sm mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Are you a Startup?</h2>
                    <p className="text-gray-600 mb-6">Join our platform to connect with investors, access resources, and grow your business.</p>
                    <Link to="/signup/startup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mt-4 transition duration-300 ease-in-out">Sign Up as Startup</Link>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg max-w-sm">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Are you an Investor?</h2>
                    <p className="text-gray-300 mb-6">Discover innovative startups and opportunities to invest in the next big thing.</p>
                    <Link to="/signup/investor" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded block mt-4 transition duration-300 ease-in-out">Sign Up as Investor</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpSelection;
