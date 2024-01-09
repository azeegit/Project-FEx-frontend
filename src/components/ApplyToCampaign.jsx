import React, { useState } from 'react';

const ApplyToCampaign = ({ investorId, campaignId }) => {
    const [application, setApplication] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Post the application to the backend
        fetch(`http://localhost:8080/investors/${investorId}/campaigns/${campaignId}/apply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(application)
        })
        .then(response => response.json())
        .then(data => console.log('Application submitted:', data))
        .catch(error => console.error('Error submitting application:', error));
    };

    // Form to submit the application
    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for application details */}
            <button type="submit">Submit Application</button>
        </form>
    );
};

export default ApplyToCampaign;
