import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userType, setUserType] = useState('startup'); // Default user type
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let url = 'http://localhost:8080/';
            url += (userType === 'startup') ? 'startups/login' : 'investors/login';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: userName, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('jwtToken', data.token);
             // Assuming the ID is returned here
            if (userType === 'investor') {
                localStorage.setItem('Iid', data.id);
                navigate(`/investors/${data.id}`);
            } else {
                localStorage.setItem('Sid', data.id);
                navigate(`/startups/${data.id}`);
            }
            
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-10">
                <h2 className="text-center text-3xl font-bold mb-6">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User Type
                    </label>
                    <select 
                        className="shadow border rounded w-full py-2 px-3 text-gray-700"
                        value={userType} 
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="startup">startup</option>
                        <option value="investor">investor</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User Name
                    </label>
                    <input 
                        type="userName" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
