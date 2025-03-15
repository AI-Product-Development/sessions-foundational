import { Sport } from './types';
import { generateDates } from './generators/dateGenerator';

// Sports are static as per requirements
export const sports: Sport[] = [
  { id: '1', name: 'Football', slug: 'football', isActive: false },
  { id: '2', name: 'Hockey', slug: 'hockey', isActive: false },
  { id: '3', name: 'Basketball', slug: 'basketball', isActive: true },
  { id: '4', name: 'Tennis', slug: 'tennis', isActive: false },
  { id: '5', name: 'Cricket', slug: 'cricket', isActive: false },
];

export const dates = generateDates();