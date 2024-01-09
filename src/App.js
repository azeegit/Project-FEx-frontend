import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import SignUpSelection from './components/SignUpSelection';
import SignUpStartup from './components/SignUpStartup';
import SignUpInvestor from './components/SignUpInvestor';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InvestorDashboard from './components/InvestorDashboard';
import CampaignList from './components/CampaignList';
import ApplyToCampaign from './components/ApplyToCampaign';
import CreateCampaign from './components/CreateCampaign';

const App = () => {
  return (
    <Router>
      <div className='font-Poppins'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/startups/:id" element={<Dashboard />} />
          <Route path="/investors/:id" element={<InvestorDashboard />} />
          <Route path="/signup/startup" element={<SignUpStartup />} />
          <Route path="/signup/investor" element={<SignUpInvestor />} />
          
          <Route path="/investors/campaigns/all" element={<CampaignList />} />
          <Route path="/investors/:investorId/campaigns/:campaignId/apply" element={<ApplyToCampaign />} />
          <Route path="/startups/:startupId/campaigns" element={<CreateCampaign />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
