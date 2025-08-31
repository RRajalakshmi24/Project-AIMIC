import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Building2,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';
import PortalLayout from '../shared/PortalLayout';

const InsuranceDashboard = () => {
  const [pendingClaims] = useState([
    { 
      id: 'CL001', 
      employee: 'John Doe', 
      type: 'Outpatient', 
      amount: '$1,250', 
      priority: 'high',
      submittedDate: '2025-01-15'
    },
    { 
      id: 'CL002', 
      employee: 'Jane Smith', 
      type: 'Prescription', 
      amount: '$85', 
      priority: 'low',
      submittedDate: '2025-01-10'
    },
    { 
      id: 'CL003', 
      employee: 'Mike Johnson', 
      type: 'Emergency', 
      amount: '$3,500', 
      priority: 'urgent',
      submittedDate: '2025-01-08'
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Claims</p>
              <p className="text-2xl font-bold text-orange-600">23</p>
            </div>
            <AlertCircle className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Approved Today</p>
              <p className="text-2xl font-bold text-green-600">15</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Processed</p>
              <p className="text-2xl font-bold text-blue-600">1,247</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Amount Processed</p>
              <p className="text-2xl font-bold text-gray-900">$124K</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Pending Claims Review */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Claims Requiring Review</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {pendingClaims.map((claim) => (
              <div key={claim.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{claim.id}</h3>
                    <p className="text-gray-600">{claim.employee} • {claim.type}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(claim.priority)}`}>
                      {claim.priority}
                    </span>
                    <span className="text-lg font-bold text-gray-900">{claim.amount}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">Submitted: {claim.submittedDate}</p>
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Review Details
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                      Approve
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ClaimReview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Claim Details - CL001</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Patient Information</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-700">Name:</span> John Doe</p>
                <p><span className="font-medium text-gray-700">Employee ID:</span> EMP001</p>
                <p><span className="font-medium text-gray-700">Insurance ID:</span> INS123456</p>
                <p><span className="font-medium text-gray-700">Policy Type:</span> Premium Health</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Claim Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-700">Claim Type:</span> Outpatient Treatment</p>
                <p><span className="font-medium text-gray-700">Treatment Date:</span> 2025-01-15</p>
                <p><span className="font-medium text-gray-700">Hospital:</span> City General Hospital</p>
                <p><span className="font-medium text-gray-700">Doctor:</span> Dr. Smith</p>
                <p><span className="font-medium text-gray-700">Amount:</span> $1,250</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Verification Status</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Document authenticity verified</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Policy coverage confirmed</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Treatment code validated</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Manual review recommended</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Documents</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Medical Report.pdf</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Invoice.pdf</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-8">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Request More Info
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Reject Claim
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Approve Claim
          </button>
        </div>
      </div>
    </div>
  );
};

const InsurancePortal = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/insurance' },
    { icon: <FileText className="w-5 h-5" />, label: 'Review Claims', path: '/insurance/review' },
    { icon: <CheckCircle className="w-5 h-5" />, label: 'Approved Claims', path: '/insurance/approved' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Analytics', path: '/insurance/analytics' }
  ];

  return (
    <PortalLayout 
      title="Insurance Portal" 
      menuItems={menuItems}
      currentPath={location.pathname}
      headerColor="bg-green-600"
    >
      <Routes>
        <Route path="/" element={<InsuranceDashboard />} />
        <Route path="/review" element={<ClaimReview />} />
        <Route path="/approved" element={<InsuranceDashboard />} />
        <Route path="/analytics" element={<InsuranceDashboard />} />
      </Routes>
    </PortalLayout>
  );
};

export default InsurancePortal;