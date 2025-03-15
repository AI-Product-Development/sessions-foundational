import { League } from '../../types';
import { shuffleArray } from '../utils';

const leagues = [
  { name: 'Premier League', country: 'England', countryCode: 'GB-ENG', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'La Liga', country: 'Spain', countryCode: 'ES', logo: '🇪🇸' },
  { name: 'Bundesliga', country: 'Germany', countryCode: 'DE', logo: '🇩🇪' },
  { name: 'Serie A', country: 'Italy', countryCode: 'IT', logo: '🇮🇹' }
];

export function generateFootballLeagues(count: number = 1): League[] {
  return shuffleArray(leagues).slice(0, count).map((league, index) => ({
    id: `1-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
    isFavorite: Math.random() > 0.8
  }));
}