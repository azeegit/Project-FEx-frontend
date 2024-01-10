import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCampaign from './CreateCampaign';
import NavBar from './navbar';

const CampaignCard = ({ campaign, onDelete }) => {
    if (!campaign) {
        return <div className="text-center">No campaign data available.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5">
            <div className="p-8">
                <h3 className="text-xl leading-tight font-semibold text-black text-center">
                    {campaign.name || 'No Title'}
                </h3>
                <p className="mt-2 text-gray-500">
                    {campaign.description || 'No Description'}
                </p>
                <div className="flex justify-center items-center mt-4">
                    <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete Campaign
                    </button>
                </div>
            </div>
        </div>
    );
};
  

const ApplicationCard = ({ application, onAccept, onReject }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <p><strong>Investor:</strong> {application.investorName}</p>
            <p><strong>Amount:</strong> {application.investedAmount}</p>
            {/* Other application details */}
            <div className="flex justify-end space-x-2 mt-4">
                {application.status === 'ACCEPTED' ? (
                    <span className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        Accepted
                    </span>
                ) : (
                    <>
                        <button onClick={() => onAccept(application.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Accept
                        </button>
                        <button onClick={() => onReject(application.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Reject
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};


const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const [applications, setApplications] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [isLoadingApplications, setIsLoadingApplications] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const fetchCampaignAndApplications = async () => {
        const startupId = localStorage.getItem('Sid');
        const token = localStorage.getItem('jwtToken');
    
        // First, try to fetch the campaign.
        try {
            const campaignResponse = await fetch(`http://localhost:8080/startups/${startupId}/campaigns`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!campaignResponse.ok) throw new Error('Failed to fetch campaign data');
    
            const campaignData = await campaignResponse.json();
    
            // Assuming the API returns an array and we're interested in the first campaign
            const activeCampaign = campaignData.length > 0 ? campaignData[0] : null;
            setCampaign(activeCampaign);
    
            // If there's an active campaign, fetch its applications
            if (activeCampaign) {
                const appsResponse = await fetch(`http://localhost:8080/startups/${startupId}/campaigns/${activeCampaign.id}/applications`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
    
                if (!appsResponse.ok) throw new Error('Failed to fetch applications');
    
                const appsData = await appsResponse.json();
                setApplications(appsData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    
        setIsLoadingApplications(false);
    };
    

    useEffect(() => {
        fetchCampaignAndApplications(); // Fetches when component mounts or updates
    }, []);

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
    

    const handleDeleteCampaign = async () => {
        // Confirm before deletion
        if (!window.confirm('Are you sure you want to delete this campaign?')) {
            return;
        }
    
        try {
            const startupId = localStorage.getItem('Sid'); // Assuming you store startupId in localStorage
            const token = localStorage.getItem('jwtToken');
            const response = await fetch(`http://localhost:8080/startups/${startupId}/campaigns/${campaign.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete campaign');
            }
    
            // Assuming your backend sends a success response
            console.log('Campaign deleted successfully');
            // Clear the deleted campaign from state
            handleCampaignDeleted();
    
        } catch (error) {
            console.error('Delete campaign failed:', error);
        }
    };
    const handleCampaignDeleted = () => {
        setCampaign(null); // Remove the campaign from state
        setApplications([]); // Clear applications since they belong to the campaign
        setShowCreateForm(true); // Show the create campaign form again
    };
    const handleAcceptApplication = async (applicationId) => {
        const token = localStorage.getItem('jwtToken');
        const startupId = localStorage.getItem('Sid');
        try {
            const response = await fetch(`http://localhost:8080/startups/${startupId}/applications/${applicationId}/accept`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to accept application');
            }
            if (response.ok) {
                // Update the state to reflect the change
                setApplications(prevApplications =>
                    prevApplications.map(app =>
                        app.id === applicationId ? { ...app, status: 'ACCEPTED' } : app
                    )
                );
            }
            // Optionally, refresh the applications list or update UI
        } catch (error) {
            console.error('Error accepting application:', error);
        }
    };

    const handleRejectApplication = async (applicationId) => {
        const token = localStorage.getItem('jwtToken');
        const startupId = localStorage.getItem('Sid');
        const numericStartupId = Number(startupId);
    const numericApplicationId = Number(applicationId);

    try {
        const response = await fetch(`http://localhost:8080/startups/${numericStartupId}/applications/${numericApplicationId}/accept`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

            if (!response.ok) {
                throw new Error('Failed to reject application');
            }
            // Optionally, refresh the applications list or update UI
        } catch (error) {
            console.error('Error rejecting application:', error);
        }
    };
    

    return (
        <div className="dashboard">
            <NavBar fixed /> {/* NavBar is assumed to be styled appropriately */}
            
            <div className="pt-16 px-5">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Logout
                    </button>
                </div>

                {!campaign && !showCreateForm && (
                    <div className="text-center">
                        <button onClick={handleCreateCampaignClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                            Create Campaign
                        </button>
                    </div>
                )}

                {campaign && (
                    <>
                        <h2 className="text-xl font-bold text-center mb-3">Your Campaign</h2>
                        <CampaignCard campaign={campaign} onDelete={handleDeleteCampaign} />
                    </>
                )}

                {!campaign && showCreateForm && (
                    <CreateCampaign onCampaignCreated={handleCampaignCreated} />
                )}

                <div className="applications mt-5">
                    <h2 className="text-xl font-bold text-center mb-3">Applications to Your Campaign</h2>
                    {applications.length > 0 ? (
                        applications.map(app => (
                            <ApplicationCard 
                                key={app.id} 
                                application={app}
                                onAccept={handleAcceptApplication}
                                onReject={handleRejectApplication}
                            />
                        ))
                    ) : (
                        <p className="text-center">No applications yet!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;