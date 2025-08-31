import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, LogOut, Bell, Settings } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface PortalLayoutProps {
  title: string;
  menuItems: MenuItem[];
  currentPath: string;
  headerColor: string;
  children: React.ReactNode;
}

const PortalLayout: React.FC<PortalLayoutProps> = ({ 
  title, 
  menuItems, 
  currentPath, 
  headerColor,
  children 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${headerColor} text-white shadow-lg`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold">MediClaim AI</span>
            </Link>
            <span className="hidden md:block text-lg opacity-90">| {title}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            </div>
            
            <nav className="flex-1 p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;