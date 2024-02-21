import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleToggle = () => {
    setBillingCycle((prevCycle) => (prevCycle === 'monthly' ? 'yearly' : 'monthly'));
  };
  return (
    <div className="bg-gray-950 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">Choose a pricing plan</h2>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-full ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-950 text-gray-400'
              } mr-4`}
            onClick={() => handleToggle()}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full ${billingCycle === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-950 text-gray-400'
              }`}
            onClick={() => handleToggle()}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-black mx-16 ">
          <div className="bg-gray-950 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
            <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
            <p className="text-2xl text-green-400 mb-4">{billingCycle === 'monthly' ? '$15' : '$150'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>Start with 2,000 word limit</li>
              <li>                <FaRegCheckCircle className="text-green-500 mr-2" />
                1 language</li>
              <li>                <FaRegCheckCircle className="text-green-500 mr-2" />
                2 copywriting tools</li>
              <li>                <FaRegCheckCircle className="text-green-500 mr-2" />
                Unlimited projects</li>
            </ul>
            <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
              learn More
            </button>
          </div>
          <div className="bg-gray-950 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
            <h3 className="text-xl font-semibold text-white mb-4">Growth</h3>
            <p className="text-2xl text-yellow-400 mb-4">{billingCycle === 'monthly' ? '$30' : '$300'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>Up to 20,000 word limit</li>
              <li>                <FaRegCheckCircle className="text-purple-500 mr-2" />
                25+ languages</li>
              <li>                <FaRegCheckCircle className="text-purple-500 mr-2" />
                All copywriting tools</li>
              <li>                <FaRegCheckCircle className="text-purple-500 mr-2" />
                Unlimited projects</li>
            </ul>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
              learn More
            </button>
          </div>
          <div className="bg-gray-950 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
            <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
            <p className="text-2xl text-purple-400 mb-4">{billingCycle === 'monthly' ? '$50' : '$500'}</p>
            <p className="text-sm text-gray-400 mb-4">/{billingCycle}</p>
            <ul className="text-sm text-gray-400 mb-4">
              <li>Up to 100,000 word limit </li>
              <li>                <FaRegCheckCircle className="text-yellow-500 mr-2" />
                25+ languages</li>
              <li>                <FaRegCheckCircle className="text-yellow-500 mr-2" />
                All copywriting tools</li>
              <li>                <FaRegCheckCircle className="text-yellow-500 mr-2" />
                Unlimited projects</li>
            </ul>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
