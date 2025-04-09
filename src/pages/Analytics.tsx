import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const monthlyEngagement = [
    { month: 'Jan', mentorships: 45, events: 12, connections: 89 },
    { month: 'Feb', mentorships: 52, events: 15, connections: 95 },
    { month: 'Mar', mentorships: 61, events: 18, connections: 112 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Engagement</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyEngagement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mentorships" fill="#4F46E5" />
                <Bar dataKey="events" fill="#10B981" />
                <Bar dataKey="connections" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Alumni Engagement Rate</h3>
              <div className="mt-2 flex justify-between items-baseline">
                <p className="text-2xl font-semibold text-gray-900">78%</p>
                <p className="text-sm text-green-600">+5.2% from last month</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Mentorship Success Rate</h3>
              <div className="mt-2 flex justify-between items-baseline">
                <p className="text-2xl font-semibold text-gray-900">92%</p>
                <p className="text-sm text-green-600">+3.1% from last month</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Event Participation Rate</h3>
              <div className="mt-2 flex justify-between items-baseline">
                <p className="text-2xl font-semibold text-gray-900">85%</p>
                <p className="text-sm text-green-600">+4.5% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}