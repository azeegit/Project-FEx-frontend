import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCampaign = ({ onCampaignCreated }) => {
    const [campaignData, setCampaignData] = useState({
        amountSought: '',
        amountRaised: '',
        equityOffered: '',
        valuation: '',
        description: ''
    });
    const navigate = useNavigate();
    const token = localStorage.getItem('jwtToken');
    const startupId = localStorage.getItem('Sid'); // Assuming startup ID is stored in localStorage

    const handleChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/startups/${startupId}/campaigns`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' },
                body: JSON.stringify(campaignData)
            });

            if (response.ok) {
                const newCampaign = await response.json();
                console.log('Created Campaign:', newCampaign); // Check the created campaign data
                onCampaignCreated(newCampaign);
                navigate(`/startups/${startupId}`);
            } else {
                // Handle errors
                console.error('Failed to create campaign');
            }
        } catch (error) {
            console.error('Error creating campaign:', error);
        }
    };

    return (
        <div className="create-campaign-form max-w-xl mx-auto mt-10 p-8 bg-white shadow-lg rounded">
            <h2 className="text-2xl font-bold text-center mb-6">Create a New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount Sought</label>
                    <input 
                        type="number"
                        name="amountSought"
                        value={campaignData.amountSought}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount Raised</label>
                    <input 
                        type="number"
                        name="amountRaised"
                        value={campaignData.amountRaised}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Equity Offered (%)</label>
                    <input 
                        type="number"
                        name="equityOffered"
                        value={campaignData.equityOffered}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Valuation</label>
                    <input 
                        type="number"
                        name="valuation"
                        value={campaignData.valuation}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        name="description"
                        value={campaignData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Campaign
                </button>
            </form>
        </div>
    );
};

export default CreateCampaign;
