import { League } from '../../types';
import { shuffleArray } from '../utils';

const leagues = [
  { name: 'NHL: Regular season', country: 'NHL', countryCode: 'NHL', logo: '🏒' },
  { name: 'Champions League', country: 'IHF', countryCode: 'IHF', logo: '🏆' },
  { name: 'SHL', country: 'Sweden', countryCode: 'SE', logo: '🇸🇪' }
];

export function generateHockeyLeagues(count: number = 1): League[] {
  return shuffleArray(leagues).slice(0, count).map((league, index) => ({
    id: `2-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
    isFavorite: Math.random() > 0.8
  }));
}