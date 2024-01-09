import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-bold text-xl text-yellow-200">Project</span>
                            <span className="font-bold text-xl">FEx</span>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/" className="hover:bg-gray-700 text-yellow-400 px-3 py-2 rounded">Home</Link>
                                <Link to="/signup" className="hover:bg-gray-700 text-yellow-400 px-3 py-2 rounded">Sign Up</Link>
                                <Link to="/login" className="hover:bg-gray-700 text-yellow-400 px-3 py-2 rounded">Login</Link>
                                <button className="hover:bg-gray-700 px-3 py-2 rounded text-yellow-400">Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isSidebarOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:bg-gray-700">Home</Link>
                    <Link to="/signup" onClick={() => setIsSidebarOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:bg-gray-700">Sign Up</Link>
                    <Link to="/login" onClick={() => setIsSidebarOpen(false)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:bg-gray-700">Login</Link>
                    <button onClick={() => setIsSidebarOpen(false)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:bg-gray-700">Contact Us</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
