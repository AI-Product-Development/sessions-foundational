import { Team } from '../../types';
import { shuffleArray } from '../utils';

const teams = [
  { name: 'Mumbai Indians', shortName: 'MI', country: 'India', logo: '💙' },
  { name: 'Chennai Super Kings', shortName: 'CSK', country: 'India', logo: '💛' },
  { name: 'Royal Challengers', shortName: 'RCB', country: 'India', logo: '❤️' },
  { name: 'Kolkata Knight Riders', shortName: 'KKR', country: 'India', logo: '💜' },
  { name: 'England', shortName: 'ENG', country: 'England', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'Australia', shortName: 'AUS', country: 'Australia', logo: '🇦🇺' },
  { name: 'India', shortName: 'IND', country: 'India', logo: '🇮🇳' },
  { name: 'South Africa', shortName: 'SA', country: 'South Africa', logo: '🇿🇦' },
  { name: 'New Zealand', shortName: 'NZ', country: 'New Zealand', logo: '🇳🇿' },
  { name: 'Pakistan', shortName: 'PAK', country: 'Pakistan', logo: '🇵🇰' }
];

export function generateCricketTeams(count: number = 2): Team[] {
  return shuffleArray(teams).slice(0, count).map((team, index) => ({
    id: `5-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}