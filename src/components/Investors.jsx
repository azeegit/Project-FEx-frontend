import React from 'react';

const Investors = () => {
    const investmentOpportunities = [
        {
            title: "Tech Startups",
            description: "Dive into the world of technology startups, with innovative solutions in AI, IoT, and SaaS. High growth potential with scalable models.",
            bgColor: "bg-blue-100" // Subtle background color
        },
        {
            title: "Green Energy Projects",
            description: "Invest in the future with green energy projects focusing on sustainability and eco-friendly solutions. A step towards a greener planet.",
            bgColor: "bg-green-100" // Subtle background color
        },
        {
            title: "Fintech Innovations",
            description: "Join the fintech revolution with cutting-edge financial technology ventures. Transforming the finance industry with secure, efficient, and accessible solutions.",
            bgColor: "bg-yellow-100" // Subtle background color
        }
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800">Investor Opportunities</h2>
                <div className="flex justify-center items-center flex-wrap -mx-4 mt-8">
                    {investmentOpportunities.map((opportunity, index) => (
                        <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                            <div className={`p-6 rounded-lg shadow-md ${opportunity.bgColor}`}>
                                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                                <p>{opportunity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Investors;
