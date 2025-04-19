import React from 'react';
import { motion } from 'framer-motion';

const ApiDocs = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/network/status',
      description: 'Get current network status and metrics'
    },
    {
      method: 'POST',
      path: '/api/v1/data/process',
      description: 'Process and analyze data streams'
    },
    {
      method: 'GET',
      path: '/api/v1/security/alerts',
      description: 'Retrieve security alerts and notifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Integrate with Cortex's powerful networking and information services
          </p>
        </motion.div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Authentication</h2>
          <div className="bg-gray-700 p-4 rounded-lg mb-8">
            <p className="text-gray-300">
              All API requests require an API key to be included in the header:
            </p>
            <code className="block bg-gray-900 p-3 rounded mt-2 text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Endpoints</h2>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded text-sm font-mono ${
                    endpoint.method === 'GET' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-300">{endpoint.path}</code>
                </div>
                <p className="text-gray-400 mt-2">{endpoint.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs; 