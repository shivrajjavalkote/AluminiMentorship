/*
  # Initial Schema for Alumni Management System

  1. Tables
    - alumni
      - Basic profile information
      - Professional details
      - Mentorship preferences
    - mentorship_sessions
      - Scheduling and tracking mentorship meetings
    - events
      - Event management and details
    - event_registrations
      - Track event participation

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create alumni table
CREATE TABLE IF NOT EXISTS alumni (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  graduation_year integer NOT NULL,
  branch text NOT NULL,
  current_company text,
  current_position text,
  linkedin_url text,
  is_mentor boolean DEFAULT false,
  expertise_areas text[],
  contact_number text,
  profile_image_url text
);

-- Create mentorship_sessions table
CREATE TABLE IF NOT EXISTS mentorship_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id uuid REFERENCES alumni(id),
  mentee_id uuid REFERENCES alumni(id),
  scheduled_at timestamptz NOT NULL,
  duration_minutes integer NOT NULL,
  topic text NOT NULL,
  is_virtual boolean DEFAULT true,
  status text CHECK (status IN ('scheduled', 'completed', 'cancelled')) DEFAULT 'scheduled',
  meeting_link text,
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  type text CHECK (type IN ('webinar', 'reunion', 'networking')) NOT NULL,
  is_virtual boolean DEFAULT true,
  location text,
  meeting_link text,
  max_participants integer,
  created_at timestamptz DEFAULT now()
);

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id),
  alumni_id uuid REFERENCES alumni(id),
  registration_date timestamptz DEFAULT now(),
  attendance_status text CHECK (attendance_status IN ('registered', 'attended', 'no_show')) DEFAULT 'registered',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE alumni ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Alumni can view all profiles"
  ON alumni
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Alumni can update their own profile"
  ON alumni
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Mentors can view their sessions"
  ON mentorship_sessions
  FOR SELECT
  TO authenticated
  USING (mentor_id = auth.uid() OR mentee_id = auth.uid());

CREATE POLICY "Public can view upcoming events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Alumni can register for events"
  ON event_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (alumni_id = auth.uid());

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_alumni_email ON alumni(email);
CREATE INDEX IF NOT EXISTS idx_alumni_graduation_year ON alumni(graduation_year);
CREATE INDEX IF NOT EXISTS idx_mentorship_sessions_mentor ON mentorship_sessions(mentor_id);
CREATE INDEX IF NOT EXISTS idx_mentorship_sessions_mentee ON mentorship_sessions(mentee_id);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(start_date);
CREATE INDEX IF NOT EXISTS idx_event_registrations_event ON event_registrations(event_id);