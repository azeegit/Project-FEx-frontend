import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        organization: '',
        investmentInterests: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/investors', { // Adjust URL as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            console.log('Investor Signup successful');
            setIsSubmitted(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-center">Successfully signed up as an Investor!</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-lg">
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out mt-4">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default InvestorForm;
