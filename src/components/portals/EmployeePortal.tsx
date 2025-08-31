import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Upload, 
  Clock, 
  User, 
  Menu, 
  X,
  Plus,
  Eye,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import PortalLayout from '../shared/PortalLayout';

const EmployeeDashboard = () => {
  const [claims] = useState([
    { id: 'CL001', type: 'Outpatient', amount: '$1,250', status: 'approved', date: '2025-01-15' },
    { id: 'CL002', type: 'Prescription', amount: '$85', status: 'pending', date: '2025-01-10' },
    { id: 'CL003', type: 'Emergency', amount: '$3,500', status: 'under_review', date: '2025-01-08' }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'under_review': return <AlertCircle className="w-5 h-5 text-blue-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
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
              <p className="text-sm text-gray-600">Total Claims</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-green-600">8</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">$15,420</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/employee/submit"
            className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
          >
            <Plus className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-blue-600 group-hover:text-blue-700">Submit New Claim</span>
          </Link>
          <Link
            to="/employee/claims"
            className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
          >
            <Eye className="w-6 h-6 text-teal-600" />
            <span className="font-medium text-teal-600 group-hover:text-teal-700">View All Claims</span>
          </Link>
          <Link
            to="/employee/documents"
            className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
          >
            <Upload className="w-6 h-6 text-green-600" />
            <span className="font-medium text-green-600 group-hover:text-green-700">Upload Documents</span>
          </Link>
        </div>
      </div>

      {/* Recent Claims */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Claims</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {claims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(claim.status)}
                  <div>
                    <p className="font-semibold text-gray-900">{claim.id}</p>
                    <p className="text-sm text-gray-600">{claim.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{claim.amount}</p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(claim.status)}`}>
                    {claim.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitClaim = () => {
  const [formData, setFormData] = useState({
    claimType: '',
    treatmentDate: '',
    amount: '',
    description: '',
    documents: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Claim submitted successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="max-w-3xl">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Claim</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Claim Type
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.claimType}
                onChange={(e) => setFormData({...formData, claimType: e.target.value})}
                required
              >
                <option value="">Select claim type</option>
                <option value="outpatient">Outpatient Treatment</option>
                <option value="inpatient">Inpatient Treatment</option>
                <option value="prescription">Prescription Drugs</option>
                <option value="emergency">Emergency Care</option>
                <option value="dental">Dental Care</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Date
              </label>
              <input 
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.treatmentDate}
                onChange={(e) => setFormData({...formData, treatmentDate: e.target.value})}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Claim Amount ($)
            </label>
            <input 
              type="number"
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea 
              rows={4}
              placeholder="Describe your treatment and reason for claim"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Drop files here or click to browse</p>
              <p className="text-sm text-gray-500 mt-1">Supported: PDF, JPG, PNG (Max 10MB)</p>
              <input type="file" multiple className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button 
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button 
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ViewClaims = () => {
  const [claims] = useState([
    { 
      id: 'CL001', 
      type: 'Outpatient Treatment', 
      amount: '$1,250', 
      status: 'approved', 
      date: '2025-01-15',
      doctor: 'Dr. Smith',
      hospital: 'City General Hospital'
    },
    { 
      id: 'CL002', 
      type: 'Prescription Drugs', 
      amount: '$85', 
      status: 'pending', 
      date: '2025-01-10',
      doctor: 'Dr. Johnson',
      hospital: 'Metro Pharmacy'
    },
    { 
      id: 'CL003', 
      type: 'Emergency Care', 
      amount: '$3,500', 
      status: 'under_review', 
      date: '2025-01-08',
      doctor: 'Dr. Wilson',
      hospital: 'Emergency Medical Center'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Claims</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {claims.map((claim) => (
              <div key={claim.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{claim.id}</h3>
                    <p className="text-gray-600">{claim.type}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(claim.status)}`}>
                    {claim.status.replace('_', ' ')}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><span className="font-medium">Amount:</span> {claim.amount}</p>
                    <p><span className="font-medium">Date:</span> {claim.date}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Doctor:</span> {claim.doctor}</p>
                    <p><span className="font-medium">Hospital:</span> {claim.hospital}</p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadDocuments = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'medical_report.pdf', size: '2.4 MB', date: '2025-01-15' },
    { name: 'prescription.jpg', size: '1.1 MB', date: '2025-01-10' }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Drop files here</h3>
          <p className="text-gray-600 mb-4">or click to browse from your device</p>
          <p className="text-sm text-gray-500">Supported formats: PDF, JPG, PNG (Max 10MB each)</p>
          <input type="file" multiple className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Uploaded Documents</h3>
        </div>
        <div className="p-6">
          {uploadedFiles.length > 0 ? (
            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-600">{file.size} • Uploaded on {file.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No documents uploaded yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

const EmployeePortal = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/employee' },
    { icon: <Plus className="w-5 h-5" />, label: 'Submit Claim', path: '/employee/submit' },
    { icon: <FileText className="w-5 h-5" />, label: 'My Claims', path: '/employee/claims' },
    { icon: <Upload className="w-5 h-5" />, label: 'Documents', path: '/employee/documents' }
  ];

  return (
    <PortalLayout 
      title="Employee Portal" 
      menuItems={menuItems}
      currentPath={location.pathname}
      headerColor="bg-blue-600"
    >
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
        <Route path="/submit" element={<SubmitClaim />} />
        <Route path="/claims" element={<ViewClaims />} />
        <Route path="/documents" element={<UploadDocuments />} />
      </Routes>
    </PortalLayout>
  );
};

export default EmployeePortal;