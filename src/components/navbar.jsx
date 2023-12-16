import React from 'react';

import { Link } from 'react-router-dom';
// ... other imports and code

<Link to="/signup" className="hover:bg-gray-700 px-3 py-2 rounded">Sign Up</Link>




const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
            <div className="font-bold text-xl">YourCompany</div>
            <div className="flex space-x-4">
                <button className="hover:bg-gray-700 px-3 py-2 rounded">Home</button>
                <button className="hover:bg-gray-700 px-3 py-2 rounded">Sign Up</button>
                <Link to="/signup" className="hover:bg-gray-700 px-3 py-2 rounded">Sign Up</Link>
                <button className="hover:bg-gray-700 px-3 py-2 rounded">Login</button>
                <button className="hover:bg-gray-700 px-3 py-2 rounded">Contact Us</button>
            </div>
        </nav>
    );
};

export default NavBar;
