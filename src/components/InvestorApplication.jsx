import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const InvestorApplication = () => {
    
    const [formData, setFormData] = useState({
        investorRequest: '',
        investorGivingAmount: '',
        investorDetailsToContact: '',
        businessPlan: '',
        pitchVideo: '',
        additionalComments: '',
    });

    const navigate = useNavigate();
    const location = useLocation(); // Use location to access the passed state
    const { investorId, campaignId } = useParams();
     // Retrieve the campaignId from state if passed

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the server
        const dataToSend = {
            investorId: investorId,
            campaignId: campaignId, // You need to replace this with the actual campaign ID
            ...formData,
        };

        try {
            const response = await fetch(`http://localhost:8080/investors/${investorId}/campaigns/${campaignId}/apply`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            // Redirect to a success or confirmation page
            alert('Application submitted successfully!');

        // Redirect to the investor dashboard after a delay
        setTimeout(() => navigate('/investors/apply'), 2000);
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Investor Application</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Loop through formData keys to generate form elements */}
                    {Object.keys(formData).map(key => (
                        <div key={key} className="mb-4">
                            <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()} {/* Converts camelCase to normal text */}
                            </label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    ))}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InvestorApplication;
