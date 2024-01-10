import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();
    const investorId = localStorage.getItem('Iid'); // Assuming this is stored

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        console.log('JWT Token:', token); // Add this line to log the token
    
        fetch('http://localhost:8080/investors/campaigns/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data); // Add this line for debugging
            if (Array.isArray(data)) {
                setCampaigns(data);
            } else {
                console.error('API response is not an array:', data);
            }
        })
        .catch(error => console.error('Error fetching campaigns:', error));
    }, []);
    
    

    const handleApply = (campaignId) => {
        // Pass the campaign ID to the application form via state or URL param
        navigate(`/investors/${investorId}/campaigns/${campaignId}/apply`); // Adjust the URL to your application's route
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {campaigns.map(campaign => (
                    <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.name}</h3>
                            <p className="text-gray-600 mb-4">{campaign.description}</p>
                            {/* Display other campaign details in a structured format */}
                            <div className="mb-4">
                                {/* Example of additional campaign details */}
                                <p><strong>Industry:</strong> {campaign.industry}</p>
                                <p><strong>Target:</strong> ${campaign.targetAmount}</p>
                                <p><strong>Equity:</strong> {campaign.equityPercentage}%</p>
                            </div>
                            <button 
                                onClick={() => handleApply(campaign.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition duration-300"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignList;
