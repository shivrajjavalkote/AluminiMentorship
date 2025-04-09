import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import type { Alumni } from '../types/database.types';

export function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');

  // Mock data for demonstration
  const alumni: Alumni[] = [
    {
      id: '1',
      created_at: '2024-03-05T06:30:00Z',
      email: 'john.doe@example.com',
      full_name: 'John Doe',
      graduation_year: 2020,
      branch: 'Computer Science',
      current_company: 'Tech Corp',
      current_position: 'Senior Developer',
      is_mentor: true,
      expertise_areas: ['Web Development', 'AI'],
      profile_image_url: 'https://i.pravatar.cc/150?img=1'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Alumni Directory</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Export Data
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search alumni..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <select
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="all">All Branches</option>
            <option value="cs">Computer Science</option>
            <option value="ee">Electrical Engineering</option>
            <option value="me">Mechanical Engineering</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((alumnus) => (
          <div key={alumnus.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={alumnus.profile_image_url}
                  alt={alumnus.full_name}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{alumnus.full_name}</h3>
                  <p className="text-sm text-gray-500">{alumnus.current_position}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Company:</span> {alumnus.current_company}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Graduation:</span> {alumnus.graduation_year}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Branch:</span> {alumnus.branch}
                </p>
                {alumnus.expertise_areas && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {alumnus.expertise_areas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}