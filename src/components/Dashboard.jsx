import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCampaign from './CreateCampaign';

const CampaignCard = ({ campaign }) => {
    if (!campaign) {
      // If no campaign data is present, return null or some placeholder
      return <div>No campaign data available.</div>;
    }
  
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
              {campaign.name || 'No Title'} {/* Fallback if name is undefined */}
            </h3>
            <p className="mt-2 text-gray-500">
              {campaign.description || 'No Description'} {/* Fallback if description is undefined */}
            </p>
            {/* Other campaign details */}
          </div>
        </div>
      </div>
    );
  };
  

const ApplicationCard = ({ application }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <p><strong>Investor:</strong> {application.investorName}</p>
            <p><strong>Amount:</strong> {application.investedAmount}</p>
            {/* Other application details */}
        </div>
    );
};

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const [applications, setApplications] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const navigate = useNavigate();

    const fetchCampaignAndApplications = async () => {
        const startupId = localStorage.getItem('Sid');
        const token = localStorage.getItem('jwtToken');

        try {
            const response = await fetch(`http://localhost:8080/startups/${startupId}/campaign`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch campaign data');
            const data = await response.json();
            
            setCampaign(data.campaign || null); // Set to null if no campaign data is present
  setApplications(data.applications || []);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchCampaignAndApplications(); // Fetches when component mounts or updates
    }, [campaign]);

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/login');
    };

    const handleCreateCampaignClick = () => {
        setShowCreateForm(true);
    };

    const handleCampaignCreated = async (newCampaignData) => {
        console.log('New Campaign Data:', newCampaignData); // Check the new campaign data
        setShowCreateForm(false);
        setCampaign(newCampaignData);
        await fetchCampaignAndApplications();
    };
    

    return (
        <div className="dashboard p-5">
            <div className="user-details mb-5">
                <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
            </div>

            {showCreateForm ? (
                <CreateCampaign onCampaignCreated={handleCampaignCreated} />
            ) : (
                <button onClick={handleCreateCampaignClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">Create Campaign</button>
            )}

            {campaign && (
                <div>
                    <h2 className="text-xl font-bold mb-3">Your Campaign</h2>
                    <CampaignCard campaign={campaign} />
                </div>
            )}

            <div className="applications mt-5">
                <h2 className="text-xl font-bold mb-3">Applications to Your Campaign</h2>
                {applications.map(app => <ApplicationCard key={app.id} application={app} />)}
            </div>
        </div>
    );
};

export default Dashboard;
