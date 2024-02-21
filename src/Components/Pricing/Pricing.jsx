import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleToggle = () => {
    setBillingCycle((prevCycle) => (prevCycle === 'monthly' ? 'yearly' : 'monthly'));
  };

  return (
    <div className="bg-gray-950 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">Pricing plans for teams of all sizes</h2>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
            } mr-4`}
            onClick={() => handleToggle()}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
            }`}
            onClick={() => handleToggle()}
          >
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Freelancer Plan */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Freelancer</h3>
            <p className="text-2xl text-green-400 mb-4">{billingCycle === 'monthly' ? '$15' : '$150'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>5 products</li>
              <li>Up to 1,000 subscribers</li>
              <li>Basic analytics</li>
              <li>48-hour support response time</li>
            </ul>
            <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
              Buy plan
            </button>
          </div>

          {/* Startup Plan */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Startup</h3>
            <p className="text-2xl text-yellow-400 mb-4">{billingCycle === 'monthly' ? '$30' : '$300'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>25 products</li>
              <li>Up to 10,000 subscribers</li>
              <li>Advanced analytics</li>
              <li>24-hour support response time</li>
            </ul>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
              Buy plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
            <p className="text-2xl text-purple-400 mb-4">{billingCycle === 'monthly' ? '$50' : '$500'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>Unlimited products</li>
              <li>Up to 50,000 subscribers</li>
              <li>Premium analytics</li>
              <li>12-hour support response time</li>
            </ul>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">
              Buy plan
            </button>
          </div>

          {/* Additional Plans (You can add more plans here) */}
          {/* <div className="bg-gray-700 p-6 rounded-lg">
            ...
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
