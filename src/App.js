import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import SignUpSelection from './components/SignUpSelection';
import SignUpStartup from './components/SignUpStartup';
import SignUpInvestor from './components/SignUpInvestor';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpSelection />} />
          <Route path="/signup/startup" element={<SignUpStartup />} />
          <Route path="/signup/investor" element={<SignUpInvestor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
