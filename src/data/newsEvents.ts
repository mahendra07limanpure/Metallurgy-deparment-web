export type NewsCategory = 'News' | 'Event' | 'Achievement' | 'Seminar';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: NewsCategory;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
}

export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  speaker?: string;
  description: string;
  registrationLink?: string;
}

export const recentNews: NewsItem[] = [
  {
    id: 100,
    title: 'Inauguration of Dual Beam FIB Facility',
    date: '30 March 2026',
    category: 'Event',
    description:
      'The state-of-the-art Dual Beam FIB facility, funded under the DST FIST program, was inaugurated by Prof. K K Pant, Director of Indian Institute of Technology Roorkee. This advanced setup will significantly enhance research capabilities in materials characterization and microfabrication within the department.',
    images: ['/news/dual_beam1.jpeg', '/news/dual_beam2.jpeg'],
  },
  {
    id: 101,
    title: 'New Faculty Joined: Prof. Smiti Biswal',
    date: '30 March 2026',
    category: 'News',
    description: 'Prof. Smiti Biswal joined the department. Welcome to MME, IIT Roorkee.',
  },
  
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: 'Guest Lecture: Future of Sustainable Materials',
    date: '25 October 2025',
    time: '3:00 PM - 4:30 PM',
    location: 'LHC-101, Main Building',
    speaker: 'Dr. Sarah Johnson, MIT',
    description:
      'An insightful talk on sustainable materials development and circular economy approaches in metallurgy.',
    registrationLink: '#',
  },
  {
    id: 2,
    title: 'Workshop: Advanced Welding Techniques',
    date: '2 November 2025',
    time: '10:00 AM - 5:00 PM',
    location: 'Welding Lab, Department',
    description:
      'Hands-on workshop covering modern welding technologies including friction stir welding and laser welding.',
    registrationLink: '#',
  },
  {
    id: 3,
    title: 'International Symposium on Nanomaterials',
    date: '15-17 November 2025',
    time: 'Full Day',
    location: 'Convention Center',
    description:
      'Three-day international symposium featuring keynote speakers from around the world discussing latest advances in nanomaterials.',
    registrationLink: '#',
  },
  {
    id: 4,
    title: 'Industry-Academia Interaction Meet',
    date: '5 December 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Seminar Hall',
    description:
      'Annual meet bringing together industry leaders and academia to discuss collaborative research opportunities.',
    registrationLink: '#',
  },
];

