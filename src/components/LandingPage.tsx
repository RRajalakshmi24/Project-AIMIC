import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Bot, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Building2,
  UserCheck
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Assistant",
      description: "24/7 AI chatbot to guide you through the claim process"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-time Processing",
      description: "Instant document verification and claim status updates"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Compliant",
      description: "Bank-level security with HIPAA compliance"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Automated Approval",
      description: "Smart algorithms for faster claim approvals"
    }
  ];

  const portals = [
    {
      title: "Employee Portal",
      description: "Submit claims, upload documents, and track your claim status in real-time",
      icon: <Users className="w-12 h-12 text-white" />,
      link: "/employee",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      title: "Doctor Portal",
      description: "Upload medical reports, provide treatment details, and manage patient records",
      icon: <Stethoscope className="w-12 h-12 text-white" />,
      link: "/doctor",
      bgColor: "bg-teal-600",
      hoverColor: "hover:bg-teal-700"
    },
    {
      title: "Insurance Portal",
      description: "Review claims, verify documents, and manage approval workflows efficiently",
      icon: <Building2 className="w-12 h-12 text-white" />,
      link: "/insurance",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediClaim AI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#portals" className="text-gray-600 hover:text-blue-600 transition-colors">Portals</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Medical
              <span className="text-blue-600 block">Insurance Claims</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your insurance claim process with our intelligent automation platform. 
              Submit, verify, and approve claims faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/employee"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit a Claim
              </Link>
              <a 
                href="#portals"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Explore Portals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediClaim AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of insurance claim processing with our advanced AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Portal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access the right tools for your role in the insurance ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Link
                key={index}
                to={portal.link}
                className={`${portal.bgColor} ${portal.hoverColor} text-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                    {portal.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{portal.title}</h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">{portal.description}</p>
                  <div className="flex items-center space-x-2 font-semibold">
                    <span>Access Portal</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-xl opacity-90">Faster Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-xl opacity-90">Claims Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">MediClaim AI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing medical insurance claim processing with artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Portals</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/employee" className="hover:text-white transition-colors">Employee Portal</Link></li>
                <li><Link to="/doctor" className="hover:text-white transition-colors">Doctor Portal</Link></li>
                <li><Link to="/insurance" className="hover:text-white transition-colors">Insurance Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 MediClaim AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;