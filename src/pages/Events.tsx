import React from 'react';
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import type { Event } from '../types/database.types';

export function Events() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Annual Tech Symposium 2024',
      description: 'Join us for a day of tech talks and networking with industry leaders.',
      start_date: '2024-04-15T09:00:00Z',
      end_date: '2024-04-15T17:00:00Z',
      type: 'webinar',
      is_virtual: true,
      meeting_link: 'https://meet.example.com/tech-symposium',
      max_participants: 500
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'webinar' 
                    ? 'bg-blue-100 text-blue-800'
                    : event.type === 'reunion'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{event.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(event.start_date).toLocaleDateString()}</span>
                </div>
                {event.is_virtual ? (
                  <div className="flex items-center text-gray-500">
                    <Video className="h-5 w-5 mr-2" />
                    <span>Virtual Event</span>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.max_participants && (
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Max {event.max_participants} participants</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}