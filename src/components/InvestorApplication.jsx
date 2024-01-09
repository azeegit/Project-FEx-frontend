import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestorApplicatiom = () => {
    const [formData, setFormData] = useState({
        investorRequest: '',
        investorGivingAmount: '',
        investorDetailsToContact: '',
        businessPlan: '',
        pitchVideo: '',
        additionalComments: '',
    });

    const navigate = useNavigate();
    const investorId = localStorage.getItem('Iid'); // Retrieve the investor ID

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the server
        const dataToSend = {
            investorId: investorId,
            campaignId: 'replace_with_campaign_id', // You need to replace this with the actual campaign ID
            ...formData,
        };

        try {
            const response = await fetch('http://localhost:8080/investors/campaigns/apply', {
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
            navigate('/application-success');
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-semibold mb-4">Investor Application</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="investorRequest" className="block text-sm font-medium text-gray-700">
                            Requested Amount
                        </label>
                        <input
                            type="text"
                            id="investorRequest"
                            name="investorRequest"
                            value={formData.investorRequest}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="investorGivingAmount" className="block text-sm font-medium text-gray-700">
                            Giving Amount
                        </label>
                        <input
                            type="text"
                            id="investorGivingAmount"
                            name="investorGivingAmount"
                            value={formData.investorGivingAmount}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="investorDetailsToContact" className="block text-sm font-medium text-gray-700">
                            Contact Details
                        </label>
                        <textarea
                            id="investorDetailsToContact"
                            name="investorDetailsToContact"
                            rows="3"
                            value={formData.investorDetailsToContact}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="businessPlan" className="block text-sm font-medium text-gray-700">
                            Business Plan (Link or Path)
                        </label>
                        <input
                            type="text"
                            id="businessPlan"
                            name="businessPlan"
                            value={formData.businessPlan}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pitchVideo" className="block text-sm font-medium text-gray-700">
                            Pitch Video (Link or Path)
                        </label>
                        <input
                            type="text"
                            id="pitchVideo"
                            name="pitchVideo"
                            value={formData.pitchVideo}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700">
                            Additional Comments
                        </label>
                        <textarea
                            id="additionalComments"
                            name="additionalComments"
                            rows="3"
                            value={formData.additionalComments}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CampaignApplication;
