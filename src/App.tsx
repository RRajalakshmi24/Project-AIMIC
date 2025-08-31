import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EmployeePortal from './components/portals/EmployeePortal';
import InsurancePortal from './components/portals/InsurancePortal';
import DoctorPortal from './components/portals/DoctorPortal';
import ChatBot from './components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employee/*" element={<EmployeePortal />} />
          <Route path="/insurance/*" element={<InsurancePortal />} />
          <Route path="/doctor/*" element={<DoctorPortal />} />
        </Routes>
        
        <ChatBot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      </div>
    </Router>
  );
}

export default App;