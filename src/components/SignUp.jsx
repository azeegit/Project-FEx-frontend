import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        email: '',
        password: '',
        founder: '',
        industry: '',
        foundingYear: '',
        capital: '',
        equityOffered: '',
        valuation: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-6">Startup Sign Up</h2>

                {/* Iterate over each field */}
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4">
                        <label htmlFor={key} className="block text-gray-700 text-sm font-bold mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <input
                            type={key === 'password' ? 'password' : 'text'}
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
