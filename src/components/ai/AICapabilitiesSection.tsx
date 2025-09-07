import React, { useState, useEffect } from 'react';
import { Bot, Brain, Shield, Zap, FileText, Search, TrendingUp, CheckCircle2 } from 'lucide-react';
import { aiService } from '../../services/aiService';

const AICapabilitiesSection = () => {
  const [capabilities, setCapabilities] = useState<{ [key: string]: string }>({});
  const [activeCapability, setActiveCapability] = useState<string>('');

  useEffect(() => {
    loadCapabilities();
  }, []);

  const loadCapabilities = async () => {
    const caps = await aiService.getAICapabilities();
    setCapabilities(caps);
    setActiveCapability(Object.keys(caps)[0]);
  };

  const capabilityIcons: { [key: string]: React.ReactNode } = {
    'Document Processing': <FileText className="w-6 h-6" />,
    'Fraud Detection': <Shield className="w-6 h-6" />,
    'Medical Code Validation': <CheckCircle2 className="w-6 h-6" />,
    'Eligibility Verification': <Search className="w-6 h-6" />,
    'Risk Assessment': <TrendingUp className="w-6 h-6" />,
    'Natural Language Processing': <Brain className="w-6 h-6" />
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-700/50 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            <span>Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Our AI Processes Claims
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the future of insurance claim processing with our cutting-edge artificial intelligence 
            that delivers unmatched speed, accuracy, and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Capabilities List */}
          <div className="space-y-4">
            {Object.entries(capabilities).map(([name, description]) => (
              <div
                key={name}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeCapability === name
                    ? 'border-blue-400 bg-blue-800/50 shadow-lg'
                    : 'border-blue-700/50 bg-blue-800/30 hover:border-blue-500 hover:bg-blue-800/40'
                }`}
                onClick={() => setActiveCapability(name)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeCapability === name ? 'bg-blue-500' : 'bg-blue-700'
                  }`}>
                    {capabilityIcons[name]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Processing Visualization */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Processing Engine</h3>
                <p className="text-blue-100">Real-time claim analysis and decision making</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Processing Speed</span>
                      <span className="text-green-400 font-bold">10x Faster</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Accuracy Rate</span>
                      <span className="text-blue-400 font-bold">99.2%</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-[99.2%]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Fraud Detection</span>
                      <span className="text-purple-400 font-bold">98.7%</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full w-[98.7%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-700/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="w-5 h-5 text-blue-300" />
                  <span className="font-medium text-blue-100">Current Focus:</span>
                </div>
                <p className="text-sm text-blue-200">{capabilities[activeCapability]}</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">2.3 min</div>
            <div className="text-blue-100">Average Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">50K+</div>
            <div className="text-blue-100">Claims Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-blue-100">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">$2.4M</div>
            <div className="text-blue-100">Fraud Prevented</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;