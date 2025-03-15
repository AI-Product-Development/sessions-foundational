import { League } from '../../types';
import { shuffleArray } from '../utils';

const leagues = [
  { name: 'ATP 1000', country: 'ATP Tour', countryCode: 'ATP', logo: '🎾' },
  { name: 'WTA 1000', country: 'WTA Tour', countryCode: 'WTA', logo: '🎾' },
  { name: 'Grand Slam', country: 'ITF', countryCode: 'ITF', logo: '🏆' },
  { name: 'Davis Cup', country: 'ITF', countryCode: 'ITF', logo: '🏆' },
  { name: 'ATP Finals', country: 'ATP Tour', countryCode: 'ATP', logo: '✨' }
];

export function generateTennisLeagues(count: number = 1): League[] {
  return shuffleArray(leagues).slice(0, count).map((league, index) => ({
    id: `4-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
    isFavorite: Math.random() > 0.8
  }));
}