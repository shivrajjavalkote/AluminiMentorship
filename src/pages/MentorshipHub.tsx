import React from 'react';
import { Users, Calendar, MessageSquare } from 'lucide-react';
import type { MentorshipSession } from '../types/database.types';

export function MentorshipHub() {
  // Mock data for demonstration
  const upcomingSessions: MentorshipSession[] = [
    {
      id: '1',
      mentor_id: '1',
      mentee_id: '2',
      scheduled_at: '2024-03-10T15:00:00Z',
      duration_minutes: 60,
      topic: 'Career Guidance in Tech',
      is_virtual: true,
      status: 'scheduled',
      meeting_link: 'https://meet.example.com/session1'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Mentorship Hub</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Request Mentorship
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Available Mentors</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
          <p className="mt-1 text-sm text-gray-500">Across various domains</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Active Sessions</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
          <p className="mt-1 text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Success Stories</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">156</p>
          <p className="mt-1 text-sm text-gray-500">And growing</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Sessions</h2>
          <div className="mt-4 space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{session.topic}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {new Date(session.scheduled_at).toLocaleDateString()} at{' '}
                      {new Date(session.scheduled_at).toLocaleTimeString()}
                    </p>
                  </div>
                  <button className="px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
                    Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}