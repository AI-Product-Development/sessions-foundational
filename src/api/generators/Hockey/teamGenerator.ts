import { Team } from '../../types';
import { shuffleArray } from '../utils';

const teams = [
  { name: 'Carolina Hurricanes', shortName: 'CAR', country: 'NHL', logo: '🌀' },
  { name: 'Detroit Red Wings', shortName: 'DET', country: 'NHL', logo: '🔴' },
  { name: 'New York Islanders', shortName: 'NYI', country: 'NHL', logo: '🗽' },
  { name: 'Edmonton Oilers', shortName: 'EDM', country: 'NHL', logo: '🛢️' },
  { name: 'Winnipeg Jets', shortName: 'WPG', country: 'NHL', logo: '✈️' },
  { name: 'Dallas Stars', shortName: 'DAL', country: 'NHL', logo: '⭐' },
  { name: 'Calgary Flames', shortName: 'CGY', country: 'NHL', logo: '🔥' },
  { name: 'Colorado Avalanche', shortName: 'COL', country: 'NHL', logo: '❄️' }
];

export function generateHockeyTeams(count: number = 2): Team[] {
  return shuffleArray(teams).slice(0, count).map((team, index) => ({
    id: `2-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}