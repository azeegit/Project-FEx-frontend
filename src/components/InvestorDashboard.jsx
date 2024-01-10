import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar';

const InvestorDashboard = () => {
    const [investor, setInvestor] = useState(null);
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();
    const investorId = localStorage.getItem('Iid');
    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchInvestorDetailsAndApplications = async () => {
            try {
                // Fetch investor details
                const investorResponse = await fetch(`http://localhost:8080/investors/${investorId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const investorData = await investorResponse.json();
                setInvestor(investorData);

                // Fetch investor's applications
                const applicationsResponse = await fetch(`http://localhost:8080/investors/${investorId}/applications`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const applicationsData = await applicationsResponse.json();
                setApplications(applicationsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchInvestorDetailsAndApplications();
    }, [investorId, token]);

    const navigateToCampaignList = () => {
        navigate('/investors/campaigns/all'); // Adjust this to your route for listing all campaigns
    };

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('Iid');
        navigate('/login');
    };

    if (!investor) {
        return <div className="flex justify-center items-center h-screen">
            <div className="text-xl font-semibold">Loading...</div>
        </div>;
    }

    return (
        <div className="investor-dashboard min-h-screen bg-gray-100">
            <NavBar fixed />
            <div className="pt-20 container mx-auto px-4">
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {investor.name}</h1>
                    <button onClick={navigateToCampaignList} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        View All Campaigns
                    </button>
                </div>

                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Your Applications:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {applications.map(application => (
                            <div key={application.id} className="bg-gray-200 rounded-lg p-4 mb-4">
                                <div>
                                    <p className="font-bold text-gray-700">{application.campaignName}</p>
                                    <p>{application.campaignDescription}</p>
                                    {/* Display investor form details */}
                                    <div className="mt-4">
                                        <p><strong>Investor Request:</strong> {application.investorRequest}</p>
                                        <p><strong>Giving Amount:</strong> {application.investorGivingAmount}</p>
                                        <p><strong>Contact Details:</strong> {application.investorDetailsToContact}</p>
                                        {/* Include other details as required */}
                                    </div>
                                </div>
                                <span className={application.status === 'ACCEPTED' ? "text-green-500 font-bold" : "text-gray-500"}>
                                    {application.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestorDashboard;
