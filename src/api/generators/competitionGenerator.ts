import { Competition } from '../types';

const competitionData = {
  football: [
    { name: 'Premier League', country: 'England', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'LaLiga', country: 'Spain', logo: '🇪🇸' },
    { name: 'Serie A', country: 'Italy', logo: '🇮🇹' },
    { name: 'Bundesliga', country: 'Germany', logo: '🇩🇪' },
    { name: 'Champions League', country: 'Europe', logo: '🏆' }
  ],
  hockey: [
    { name: 'NHL Regular season', country: 'NHL', logo: '🏒' },
    { name: 'NHL Preseason', country: 'NHL', logo: '🏒' },
    { name: 'Stanley Cup Playoffs', country: 'NHL', logo: '🏆' },
    { name: 'Champions League', country: 'IHF', logo: '🏆' },
    { name: 'SHL', country: 'Sweden', logo: '🇸🇪' }
  ],
  basketball: [
    { name: 'NBA Regular Season', country: 'NBA', logo: '🏀' },
    { name: 'EuroLeague', country: 'Europe', logo: '🇪🇺' },
    { name: 'ACB', country: 'Spain', logo: '🇪🇸' },
    { name: 'World Cup', country: 'FIBA', logo: '🌍' }
  ],
  tennis: [
    { name: 'Australian Open', country: 'Grand Slam', logo: '🎾' },
    { name: 'Roland Garros', country: 'Grand Slam', logo: '🎾' },
    { name: 'Wimbledon', country: 'Grand Slam', logo: '🎾' },
    { name: 'US Open', country: 'Grand Slam', logo: '🎾' }
  ],
  cricket: [
    { name: 'IPL', country: 'India', logo: '🏏' },
    { name: 'The Hundred', country: 'England', logo: '🏏' },
    { name: 'Big Bash', country: 'Australia', logo: '🏏' },
    { name: 'World Cup', country: 'ICC', logo: '🌍' }
  ]
};

export function generateCompetitions(sportId: string): Competition[] {
  const sportKey = getSportKey(sportId);
  const competitions = competitionData[sportKey as keyof typeof competitionData];
  
  return competitions.map((competition, index) => ({
    id: `${sportId}-competition-${index + 1}`,
    name: competition.name,
    country: competition.country,
    logo: competition.logo,
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