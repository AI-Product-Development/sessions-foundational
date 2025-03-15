import { Team } from '../types';

const teamData = {
  football: [
    { name: 'Manchester United', shortName: 'MUN', country: 'England', logo: '🔴' },
    { name: 'Liverpool', shortName: 'LIV', country: 'England', logo: '🔴' },
    { name: 'Arsenal', shortName: 'ARS', country: 'England', logo: '🔴' },
    { name: 'Manchester City', shortName: 'MCI', country: 'England', logo: '💙' },
    { name: 'Real Madrid', shortName: 'RMA', country: 'Spain', logo: '⚪' },
    { name: 'Barcelona', shortName: 'BAR', country: 'Spain', logo: '🔵' },
    { name: 'Bayern Munich', shortName: 'BAY', country: 'Germany', logo: '🔴' },
    { name: 'Juventus', shortName: 'JUV', country: 'Italy', logo: '⚫' }
  ],
  hockey: [
    { name: 'Carolina Hurricanes', shortName: 'CAR', country: 'NHL', logo: '🌀' },
    { name: 'Detroit Red Wings', shortName: 'DET', country: 'NHL', logo: '🔴' },
    { name: 'New York Islanders', shortName: 'NYI', country: 'NHL', logo: '🗽' },
    { name: 'Edmonton Oilers', shortName: 'EDM', country: 'NHL', logo: '🛢️' },
    { name: 'Winnipeg Jets', shortName: 'WPG', country: 'NHL', logo: '✈️' },
    { name: 'Dallas Stars', shortName: 'DAL', country: 'NHL', logo: '⭐' },
    { name: 'Calgary Flames', shortName: 'CGY', country: 'NHL', logo: '🔥' },
    { name: 'Colorado Avalanche', shortName: 'COL', country: 'NHL', logo: '❄️' }
  ],
  basketball: [
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
  ],
  tennis: [
    { name: 'Novak Djokovic', shortName: 'DJO', country: 'Serbia', logo: '🇷🇸' },
    { name: 'Rafael Nadal', shortName: 'NAD', country: 'Spain', logo: '🇪🇸' },
    { name: 'Roger Federer', shortName: 'FED', country: 'Switzerland', logo: '🇨🇭' },
    { name: 'Serena Williams', shortName: 'WIL', country: 'USA', logo: '🇺🇸' }
  ],
  cricket: [
    { name: 'Mumbai Indians', shortName: 'MI', country: 'India', logo: '💙' },
    { name: 'Chennai Super Kings', shortName: 'CSK', country: 'India', logo: '💛' },
    { name: 'Royal Challengers', shortName: 'RCB', country: 'India', logo: '❤️' },
    { name: 'Kolkata Knight Riders', shortName: 'KKR', country: 'India', logo: '💜' }
  ]
};

export function generateTeams(sportId: string, count: number = 2): Team[] {
  const sportKey = getSportKey(sportId);
  const availableTeams = teamData[sportKey as keyof typeof teamData];
  const shuffled = [...availableTeams].sort(() => Math.random() - 0.5);
  
  return shuffled.slice(0, count).map((team, index) => ({
    id: `${sportId}-team-${index + 1}`,
    name: team.name,
    shortName: team.shortName,
    country: team.country,
    logo: team.logo,
    isFavorite: Math.random() > 0.8
  }));
}

function getSportKey(sportId: string): string {
  switch (sportId) {
    case '1': return 'football';
    case '2': return 'hockey';
    case '3': return 'basketball';
    case '4': return 'tennis';
    case '5': return 'cricket';
    default: return 'football';
  }
}