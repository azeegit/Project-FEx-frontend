import React from 'react';

import { Link } from 'react-router-dom';
// ... other imports and code

const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-100 bg-gray-800 text-white">
            <div className="font-bold text-xl text-yellow-200">Project
                <div className="font-bold text-xl">FEx</div>
                </div>
            <div className="flex space-x-4">
                <Link to="/" className="hover:bg-gray-700 text-yellow-400 px-3 py-2 rounded">Home</Link>
                <Link to="/signup" className="hover:bg-gray-700 text-yellow-400 px-3 py-2 rounded">Sign Up</Link>
                <button className="hover:bg-gray-700 px-3 py-2 rounded text-yellow-400">Login</button>
                <button className="hover:bg-gray-700 px-3 py-2 rounded text-yellow-400">Contact Us</button>
            </div>
        </nav>
    );
};

export default NavBar;
