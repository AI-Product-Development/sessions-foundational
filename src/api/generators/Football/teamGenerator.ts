import { Team } from '../../types';
import { shuffleArray } from '../utils';

const teams = [
  { name: 'Manchester United', shortName: 'MUN', country: 'England', logo: '🔴' },
  { name: 'Liverpool', shortName: 'LIV', country: 'England', logo: '🔴' },
  { name: 'Arsenal', shortName: 'ARS', country: 'England', logo: '🔴' },
  { name: 'Manchester City', shortName: 'MCI', country: 'England', logo: '💙' },
  { name: 'Real Madrid', shortName: 'RMA', country: 'Spain', logo: '⚪' },
  { name: 'Barcelona', shortName: 'BAR', country: 'Spain', logo: '🔵' },
  { name: 'Bayern Munich', shortName: 'BAY', country: 'Germany', logo: '🔴' },
  { name: 'Juventus', shortName: 'JUV', country: 'Italy', logo: '⚫' }
];

export function generateFootballTeams(count: number = 2): Team[] {
  return shuffleArray(teams).slice(0, count).map((team, index) => ({
    id: `1-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}