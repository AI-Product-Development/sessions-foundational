import { Team } from '../../types';
import { shuffleArray } from '../utils';

const teams = [
  { name: 'Novak Djokovic', shortName: 'DJO', country: 'Serbia', logo: '🇷🇸' },
  { name: 'Carlos Alcaraz', shortName: 'ALC', country: 'Spain', logo: '🇪🇸' },
  { name: 'Daniil Medvedev', shortName: 'MED', country: 'Russia', logo: '🎾' },
  { name: 'Jannik Sinner', shortName: 'SIN', country: 'Italy', logo: '🇮🇹' },
  { name: 'Iga Świątek', shortName: 'SWI', country: 'Poland', logo: '🇵🇱' },
  { name: 'Aryna Sabalenka', shortName: 'SAB', country: 'Belarus', logo: '🎾' },
  { name: 'Coco Gauff', shortName: 'GAU', country: 'USA', logo: '🇺🇸' },
  { name: 'Elena Rybakina', shortName: 'RYB', country: 'Kazakhstan', logo: '🇰🇿' }
];

export function generateTennisTeams(count: number = 2): Team[] {
  return shuffleArray(teams).slice(0, count).map((team, index) => ({
    id: `4-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}