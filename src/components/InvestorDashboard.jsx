import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestorDashboard = () => {
    const [investor, setInvestor] = useState(null);
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const investorId = localStorage.getItem('Iid'); // Retrieve the investor ID

        const fetchInvestorDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/investors/${investorId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch investor details');
                }
                const investorData = await response.json();
                setInvestor(investorData);
            } catch (error) {
                console.error('Error fetching investor details:', error);
            }
        };
        

        // Fetch investor details
        // Fetch investor applications
        const fetchInvestorApplications = async () => {
            try {
                const response = await fetch(`http://localhost:8080/investors/${investorId}/applications`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const appsData = await response.json();
                setApplications(appsData);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchInvestorApplications();
        fetchInvestorDetails();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('jwtToken'); // Logout handling
        navigate('/login');
    };

    const handleApplyClick = () => {
        // Define the logic or navigation for applying
        navigate('/investors/campaigns/all'); // Example navigation to an apply page
    };

    if (!investor) {
        return <div>Loading...</div>;
    }

    return (
        <div className="investor-dashboard">
            {/* Investor details */}
            <div>Welcome, {investor.name}</div>

            {/* Applications display */}
            <div>
                <h2>Applications:</h2>
                {applications.length > 0 ? (
                    applications.map(app => (
                        <div key={app.id}>
                            Campaign: {app.campaignName}
                            {/* Display other application details */}
                        </div>
                    ))
                ) : (
                    <div>
                        <p>No applications</p>
                        <button onClick={handleApplyClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Apply
                        </button>
                    </div>
                )}
            </div>

            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
            
        </div>
    );
};

export default InvestorDashboard;