import React from 'react';
import { Link } from 'react-router-dom';

const SignUpModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <button onClick={onClose} className="float-right font-bold">X</button>
                <div>
                    <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
                    <div className="text-center">
                        <p className="mb-4">Choose your role:</p>
                        <Link to="/signup/startup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block my-2">Sign Up as Startup</Link>
                        <Link to="/signup/investor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block my-2">Sign Up as Investor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
