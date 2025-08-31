import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  Upload, 
  Stethoscope,
  Calendar,
  Activity,
  UserPlus
} from 'lucide-react';
import PortalLayout from '../shared/PortalLayout';

const DoctorDashboard = () => {
  const [patients] = useState([
    { id: 'P001', name: 'John Doe', lastVisit: '2025-01-15', status: 'Active Treatment' },
    { id: 'P002', name: 'Jane Smith', lastVisit: '2025-01-12', status: 'Follow-up Required' },
    { id: 'P003', name: 'Mike Johnson', lastVisit: '2025-01-10', status: 'Completed' }
  ]);

  const [reports] = useState([
    { id: 'R001', patient: 'John Doe', type: 'Lab Results', date: '2025-01-15', status: 'pending' },
    { id: 'R002', patient: 'Jane Smith', type: 'X-Ray Report', date: '2025-01-12', status: 'submitted' },
    { id: 'R003', patient: 'Mike Johnson', type: 'Treatment Summary', date: '2025-01-10', status: 'approved' }
  ]);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <Users className="w-8 h-8 text-teal-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reports Submitted</p>
              <p className="text-2xl font-bold text-teal-600">15</p>
            </div>
            <FileText className="w-8 h-8 text-teal-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Claims</p>
              <p className="text-2xl font-bold text-orange-600">8</p>
            </div>
            <Activity className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Appointments Today</p>
              <p className="text-2xl font-bold text-blue-600">6</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Recent Patients */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Patients</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {patients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-600">ID: {patient.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</p>
                  <p className="text-sm font-medium text-teal-600">{patient.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{report.type}</p>
                  <p className="text-sm text-gray-600">Patient: {report.patient} • {report.date}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  report.status === 'approved' ? 'bg-green-100 text-green-800' :
                  report.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PatientManagement = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
            <UserPlus className="w-5 h-5" />
            <span>Add Patient</span>
          </button>
        </div>
        
        <div className="grid gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Patient ID: P001 • Age: 35</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-medium rounded-full">
                Active Treatment
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-medium text-gray-700">Insurance ID:</span> INS123456</p>
                <p><span className="font-medium text-gray-700">Last Visit:</span> 2025-01-15</p>
              </div>
              <div>
                <p><span className="font-medium text-gray-700">Condition:</span> Hypertension</p>
                <p><span className="font-medium text-gray-700">Next Appointment:</span> 2025-01-22</p>
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-3">
              <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">View History</button>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Submit Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitReport = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    reportType: '',
    diagnosis: '',
    treatment: '',
    recommendations: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Medical report submitted successfully!');
  };

  return (
    <div className="max-w-3xl">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Medical Report</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient ID
              </label>
              <input 
                type="text"
                placeholder="Enter patient ID"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={formData.patientId}
                onChange={(e) => setFormData({...formData, patientId: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={formData.reportType}
                onChange={(e) => setFormData({...formData, reportType: e.target.value})}
                required
              >
                <option value="">Select report type</option>
                <option value="consultation">Consultation Report</option>
                <option value="lab">Laboratory Results</option>
                <option value="xray">X-Ray Report</option>
                <option value="surgery">Surgery Report</option>
                <option value="discharge">Discharge Summary</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Diagnosis
            </label>
            <textarea 
              rows={3}
              placeholder="Enter primary diagnosis and ICD codes"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={formData.diagnosis}
              onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Treatment Provided
            </label>
            <textarea 
              rows={4}
              placeholder="Describe the treatment provided"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={formData.treatment}
              onChange={(e) => setFormData({...formData, treatment: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recommendations
            </label>
            <textarea 
              rows={3}
              placeholder="Follow-up recommendations and medications"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={formData.recommendations}
              onChange={(e) => setFormData({...formData, recommendations: e.target.value})}
            />
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
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DoctorPortal = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/doctor' },
    { icon: <Users className="w-5 h-5" />, label: 'Patients', path: '/doctor/patients' },
    { icon: <FileText className="w-5 h-5" />, label: 'Submit Report', path: '/doctor/submit' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', path: '/doctor/appointments' }
  ];

  return (
    <PortalLayout 
      title="Doctor Portal" 
      menuItems={menuItems}
      currentPath={location.pathname}
      headerColor="bg-teal-600"
    >
      <Routes>
        <Route path="/" element={<DoctorDashboard />} />
        <Route path="/patients" element={<PatientManagement />} />
        <Route path="/submit" element={<SubmitReport />} />
        <Route path="/appointments" element={<DoctorDashboard />} />
      </Routes>
    </PortalLayout>
  );
};

export default DoctorPortal;