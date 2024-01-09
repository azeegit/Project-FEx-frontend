const CampaignCard = ({ campaign, onApply }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-2">
            <div className="font-bold text-xl mb-2">{campaign.name}</div>
            <p className="text-gray-700 text-base">{campaign.description}</p>
            <div className="mt-4">
                <button 
                    onClick={() => onApply(campaign.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default CampaignCard;
