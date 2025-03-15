import { Team } from '../../types';
import { shuffleArray } from '../utils';

const teams = [
  { name: 'Miami Heat', shortName: 'MIA', country: 'NBA', logo: '🔥' },
  { name: 'Boston Celtics', shortName: 'BOS', country: 'NBA', logo: '☘️' },
  { name: 'Philadelphia 76ers', shortName: 'PHI', country: 'NBA', logo: '🔔' },
  { name: 'Indiana Pacers', shortName: 'IND', country: 'NBA', logo: '🏎️' },
  { name: 'Atlanta Hawks', shortName: 'ATL', country: 'NBA', logo: '🦅' },
  { name: 'LA Clippers', shortName: 'LAC', country: 'NBA', logo: '⛵' },
  { name: 'Houston Rockets', shortName: 'HOU', country: 'NBA', logo: '🚀' },
  { name: 'Dallas Mavericks', shortName: 'DAL', country: 'NBA', logo: '🐎' },
  { name: 'Memphis Grizzlies', shortName: 'MEM', country: 'NBA', logo: '🐻' },
  { name: 'Cleveland Cavaliers', shortName: 'CLE', country: 'NBA', logo: '⚔️' },
  { name: 'Minnesota Timberwolves', shortName: 'MIN', country: 'NBA', logo: '🐺' },
  { name: 'Orlando Magic', shortName: 'ORL', country: 'NBA', logo: '🎩' },
  { name: 'San Antonio Spurs', shortName: 'SAS', country: 'NBA', logo: '⭐' },
  { name: 'Charlotte Hornets', shortName: 'CHA', country: 'NBA', logo: '🐝' }
];

export function generateBasketballTeams(count: number = 2): Team[] {
  return shuffleArray(teams).slice(0, count).map((team, index) => ({
    id: `3-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}