import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import EmployeePortal from './components/portals/EmployeePortal';
import InsurancePortal from './components/portals/InsurancePortal';
import DoctorPortal from './components/portals/DoctorPortal';
import ChatBot from './components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/employee/*" 
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <EmployeePortal />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/insurance/*" 
              element={
                <ProtectedRoute allowedRoles={['insurance']}>
                  <InsurancePortal />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/doctor/*" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <DoctorPortal />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/unauthorized" 
              element={
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Unauthorized Access</h1>
                    <p className="text-gray-600 mb-6">You don't have permission to access this portal.</p>
                    <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Go to Login
                    </a>
                  </div>
                </div>
              } 
            />
          </Routes>
          
          <ChatBot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;