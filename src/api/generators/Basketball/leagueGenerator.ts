import { League } from '../../types';
import { shuffleArray } from '../utils';

const leagues = [
  { name: 'Regular season', country: 'NBA', countryCode: 'NBA', logo: '🏀' },
  { name: 'EuroLeague', country: 'Europe', countryCode: 'EUR', logo: '🇪🇺' },
  { name: 'Champions League', country: 'FIBA', countryCode: 'FIBA', logo: '🌍' },
  { name: 'Liga ACB', country: 'Spain', countryCode: 'ES', logo: '🇪🇸' }
];

export function generateBasketballLeagues(count: number = 1): League[] {
  return shuffleArray(leagues).slice(0, count).map((league, index) => ({
    id: `3-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
    isFavorite: Math.random() > 0.8
  }));
}