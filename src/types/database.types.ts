export interface Alumni {
  id: string;
  created_at: string;
  email: string;
  full_name: string;
  graduation_year: number;
  branch: string;
  current_company?: string;
  current_position?: string;
  linkedin_url?: string;
  is_mentor: boolean;
  expertise_areas?: string[];
  contact_number?: string;
  profile_image_url?: string;
}

export interface MentorshipSession {
  id: string;
  mentor_id: string;
  mentee_id: string;
  scheduled_at: string;
  duration_minutes: number;
  topic: string;
  is_virtual: boolean;
  status: 'scheduled' | 'completed' | 'cancelled';
  meeting_link?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  type: 'webinar' | 'reunion' | 'networking';
  is_virtual: boolean;
  location?: string;
  meeting_link?: string;
  max_participants?: number;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  alumni_id: string;
  registration_date: string;
  attendance_status: 'registered' | 'attended' | 'no_show';
}