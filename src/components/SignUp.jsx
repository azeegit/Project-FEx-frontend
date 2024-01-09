import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/startups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            const data = await response.json();
            console.log('Signup successful:', data);
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
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold">Successfully signed up!</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 grid grid-cols-2 gap-4">
                
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4 w-full">
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
                <div className="mb-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={isTermsAccepted}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          />
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">
            I accept the terms and conditions
          </label>
        </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
