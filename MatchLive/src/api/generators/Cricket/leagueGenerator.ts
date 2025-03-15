import { League } from '../../types';
import { shuffleArray } from '../utils';

const leagues = [
  { name: 'World Cup League 2', country: 'ICC', countryCode: 'ICC', logo: '🌍' },
  { name: 'Sheffield Shield', country: 'Australia', countryCode: 'AU', logo: '🇦🇺' },
  { name: 'The Hundred', country: 'England', countryCode: 'GB-ENG', logo: '💯' },
  { name: 'Test Series', country: 'International', countryCode: 'ICC', logo: '🏏' },
  { name: 'County Championship', country: 'England', countryCode: 'GB-ENG', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }
];

export function generateCricketLeagues(count: number = 1): League[] {
  return shuffleArray(leagues).slice(0, count).map((league, index) => ({
    id: `5-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
    isFavorite: Math.random() > 0.8
  }));
}