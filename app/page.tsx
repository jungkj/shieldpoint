import React from 'react';
import { CheckCircle, ArrowRight, Lock, Clock, BarChart } from 'lucide-react';

export default function Landing() {
  const features = [
    { 
      title: "Automated Risk Assessments",
      description: "Transform your risk assessment process from manual spreadsheets to an automated, streamlined workflow.",
      icon: Clock
    },
    {
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption and compliance with major regulations.",
      icon: Lock
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights into your risk landscape with powerful analytics and reporting tools.",
      icon: BarChart
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "199",
      features: [
        "Single business unit",
        "Up to 5 users",
        "Standard templates",
        "Basic reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "499",
      features: [
        "Multiple business units",
        "Up to 20 users",
        "Custom templates",
        "Advanced analytics",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited business units",
        "Unlimited users",
        "Custom implementation",
        "Dedicated support",
        "Custom integrations",
        "On-premise option"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}


      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Modern Risk Assessment
            <span className="text-blue-600"> Made Simple</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your risk and control self-assessment process with our intelligent platform. Say goodbye to spreadsheets and hello to efficiency.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need for RCSA</h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-500">Choose the plan that best fits your needs</p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white p-8 border rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  ${plan.price}
                  {plan.price !== "Custom" && <span className="text-xl font-medium text-gray-500">/mo</span>}
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}