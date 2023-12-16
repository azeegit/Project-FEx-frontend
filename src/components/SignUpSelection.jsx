import React from 'react';
import { Link } from 'react-router-dom';

const SignUpSelection = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Are you a Startup?</h2>
                <p>Describe what a startup is...</p>
                <Link to="/signup/startup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Startup</Link>
            </div>
            <div className="mx-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Are you an Investor?</h2>
                <p>Describe what an investor is...</p>
                <Link to="/signup/investor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block mt-4">Sign Up as Investor</Link>
            </div>
        </div>
    );
};

export default SignUpSelection;
