import React, { useState, useEffect } from 'react';
import { X, Bot, CheckCircle2, Clock, AlertTriangle, FileText, Shield, Zap } from 'lucide-react';
import { aiService, AIAnalysisResult } from '../../services/aiService';

interface AIProcessingModalProps {
  isOpen: boolean;
  onClose: () => void;
  claimData: any;
  onComplete: (result: AIAnalysisResult) => void;
}

const AIProcessingModal: React.FC<AIProcessingModalProps> = ({
  isOpen,
  onClose,
  claimData,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [processingSteps, setProcessingSteps] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadProcessingSteps();
      startProcessing();
    }
  }, [isOpen]);

  const loadProcessingSteps = async () => {
    const steps = await aiService.getProcessingSteps();
    setProcessingSteps(steps);
  };

  const startProcessing = async () => {
    setIsProcessing(true);
    setCurrentStep(0);

    // Simulate step-by-step processing
    for (let i = 0; i < processingSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Get AI analysis result
    try {
      const analysisResult = await aiService.analyzeClaim(claimData);
      setResult(analysisResult);
      setIsProcessing(false);
      onComplete(analysisResult);
    } catch (error) {
      console.error('AI processing failed:', error);
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Claim Processing</h3>
                <p className="text-sm text-gray-600">Analyzing claim with advanced AI algorithms</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {isProcessing ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Processing Your Claim</h4>
                <p className="text-gray-600">Our AI is analyzing your claim using advanced algorithms</p>
              </div>

              <div className="space-y-4">
                {processingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index < currentStep ? 'bg-green-100' :
                      index === currentStep ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : index === currentStep ? (
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Clock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <span className={`text-sm ${
                      index < currentStep ? 'text-green-600 font-medium' :
                      index === currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">AI Processing Power</span>
                </div>
                <p className="text-sm text-blue-700">
                  Our AI processes claims 10x faster than traditional methods with 99.2% accuracy
                </p>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Analysis Complete</h4>
                <p className="text-gray-600">Your claim has been processed successfully</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">AI Confidence Score</h5>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            result.confidence >= 90 ? 'bg-green-500' :
                            result.confidence >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${result.confidence}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-lg">{result.confidence}%</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Risk Assessment</h5>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className={`w-5 h-5 ${
                        result.riskLevel === 'low' ? 'text-green-500' :
                        result.riskLevel === 'medium' ? 'text-yellow-500' : 'text-red-500'
                      }`} />
                      <span className={`font-medium capitalize ${
                        result.riskLevel === 'low' ? 'text-green-700' :
                        result.riskLevel === 'medium' ? 'text-yellow-700' : 'text-red-700'
                      }`}>
                        {result.riskLevel} Risk
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Document Verification</h5>
                    <div className="flex items-center space-x-2">
                      {result.documentVerification.authentic ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-green-700 font-medium">Verified Authentic</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                          <span className="text-red-700 font-medium">Verification Failed</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Coverage Check</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-medium">{result.eligibilityCheck.coveragePercentage}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deductible:</span>
                        <span className="font-medium">${result.eligibilityCheck.deductible}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-blue-800 mb-2 flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>AI Recommendations</span>
                </h5>
                <ul className="space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-blue-700 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Processing completed in {Math.floor(result.processingTime / 60)} minutes {result.processingTime % 60} seconds
                </p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue with Claim
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AIProcessingModal;