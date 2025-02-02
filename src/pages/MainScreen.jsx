import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaShareAlt } from 'react-icons/fa';
import Confetti from 'react-confetti';

const MainScreen = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState(null); // null, 'success', or 'failure'
  const [feedback, setFeedback] = useState('');

  // Open chatbot on client's website
  const handleTestChatbot = () => {
    setShowChatbot(true);
  };

  // Show integration options
  const handleIntegrateOnWebsite = () => {
    setShowIntegrationOptions(true);
  };

  // Test integration
  const handleTestIntegration = () => {
    // Simulate integration test
    const isSuccessful = Math.random() > 0.5; // Randomly simulate success or failure
    setIntegrationStatus(isSuccessful ? 'success' : 'failure');
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
      <div className='w-full md:w-[60%] lg:w-[50%] border border-gray-200 bg-white flex flex-col items-center py-8 mx-4'>
        <div className='w-[90%] md:w-[80%] my-8 space-y-6'>
          {/* Buttons Section */}
          <div className='flex flex-col md:flex-row gap-4'>
            <button
              onClick={handleTestChatbot}
              className='w-full py-2 bg-black hover:bg-gray-800 text-white 
                       font-medium transition-colors cursor-pointer'
            >
              Test Chatbot
            </button>

            <button
              onClick={handleIntegrateOnWebsite}
              className='w-full py-2 bg-black hover:bg-gray-800 text-white 
                       font-medium transition-colors cursor-pointer'
            >
              Integrate on Your Website
            </button>

            <button
              onClick={handleTestIntegration}
              className='w-full py-2 bg-black hover:bg-gray-800 text-white 
                       font-medium transition-colors cursor-pointer'
            >
              Test Integration
            </button>
          </div>

          {/* Chatbot Test UI */}
          {showChatbot && (
            <div className='fixed bottom-4 right-4 w-[300px] h-[400px] bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col'>
              <div className='p-4 bg-gray-100 flex justify-between items-center'>
                <span className='text-sm font-medium'>Chatbot</span>
                <button
                  onClick={() => setShowChatbot(false)}
                  className='text-sm text-gray-500 hover:text-gray-700'
                >
                  Close
                </button>
              </div>
              <div className='p-4 flex-1 overflow-y-auto'>
                <p className='text-sm text-gray-700'>Hello! How can I help you today?</p>
              </div>
              <div className='p-4 border-t border-gray-300'>
                <form onSubmit={handleFeedbackSubmit} className='flex gap-2'>
                  <input
                    type='text'
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder='Share feedback...'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black'
                  />
                  <button
                    type='submit'
                    className='px-4 py-2 bg-black hover:bg-gray-800 text-white 
                               font-medium transition-colors cursor-pointer rounded-lg'
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Integration Options UI */}
          {showIntegrationOptions && (
            <div className='space-y-4'>
              <h2 className='text-2xl font-medium text-gray-800'>Integrate on Your Website</h2>
              <div className='space-y-4'>
                <div className='p-4 border border-gray-300 rounded-lg'>
                  <h3 className='text-lg font-medium text-gray-700'>Option 1: Copy-Paste Code</h3>
                  <p className='text-sm text-gray-600'>
                    Add the following code within the <code>&lt;head&gt;</code> tag of your website:
                  </p>
                  <pre className='p-4 bg-gray-100 rounded-lg text-sm text-gray-700 mt-2'>
                    {`<script src="https://example.com/chatbot.js"></script>`}
                  </pre>
                </div>

                <div className='p-4 border border-gray-300 rounded-lg'>
                  <h3 className='text-lg font-medium text-gray-700'>Option 2: Mail Instructions</h3>
                  <p className='text-sm text-gray-600'>
                    Send integration instructions to your developer.
                  </p>
                  <button
                    className='mt-2 px-4 py-2 bg-black hover:bg-gray-800 text-white 
                               font-medium transition-colors cursor-pointer rounded-lg'
                  >
                    Mail Instructions
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Integration Test Result UI */}
          {integrationStatus === 'success' && (
            <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-50'>
              <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[40%] text-center'>
                <Confetti width={window.innerWidth} height={window.innerHeight} />
                <FaCheckCircle className='text-6xl text-green-500 mx-auto mb-4' />
                <h2 className='text-2xl font-medium text-gray-800'>Integration Successful!</h2>
                <p className='text-sm text-gray-600 mt-2'>
                  Your chatbot has been successfully integrated.
                </p>
                <div className='mt-6 space-y-4'>
                  <button
                    className='w-full py-2 bg-black hover:bg-gray-800 text-white 
                               font-medium transition-colors cursor-pointer rounded-lg'
                  >
                    Explore Admin Panel
                  </button>
                  <button
                    className='w-full py-2 bg-black hover:bg-gray-800 text-white 
                               font-medium transition-colors cursor-pointer rounded-lg'
                  >
                    Start Talking to Your Chatbot
                  </button>
                  <div className='flex justify-center gap-4'>
                    <FaShareAlt className='text-2xl text-gray-600 cursor-pointer hover:text-gray-800' />
                    <span className='text-sm text-gray-600'>Share on Social Media</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {integrationStatus === 'failure' && (
            <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-50'>
              <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[40%] text-center'>
                <FaTimesCircle className='text-6xl text-red-500 mx-auto mb-4' />
                <h2 className='text-2xl font-medium text-gray-800'>Integration Not Detected</h2>
                <p className='text-sm text-gray-600 mt-2'>
                  Please ensure the integration code is correctly added to your website.
                </p>
                <button
                  onClick={() => setIntegrationStatus(null)}
                  className='mt-6 px-6 py-2 bg-black hover:bg-gray-800 text-white 
                             font-medium transition-colors cursor-pointer rounded-lg'
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;