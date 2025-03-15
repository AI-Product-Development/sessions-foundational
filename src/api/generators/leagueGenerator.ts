import { League } from '../types';

const leagueNames = {
  football: [
    { name: 'Premier League', country: 'England', countryCode: 'GB-ENG', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'La Liga', country: 'Spain', countryCode: 'ES', logo: '🇪🇸' },
    { name: 'Bundesliga', country: 'Germany', countryCode: 'DE', logo: '🇩🇪' },
    { name: 'Serie A', country: 'Italy', countryCode: 'IT', logo: '🇮🇹' }
  ],
  hockey: [
    { name: 'NHL: Regular season', country: 'NHL', countryCode: 'NHL', logo: '🏒' },
    { name: 'Champions League', country: 'IHF', countryCode: 'IHF', logo: '🏆' },
    { name: 'SHL', country: 'Sweden', countryCode: 'SE', logo: '🇸🇪' }
  ],
  basketball: [
    { name: 'Regular season', country: 'NBA', countryCode: 'NBA', logo: '🏀' },
    { name: 'EuroLeague', country: 'Europe', countryCode: 'EUR', logo: '🇪🇺' },
    { name: 'Champions League', country: 'FIBA', countryCode: 'FIBA', logo: '🌍' },
    { name: 'Liga ACB', country: 'Spain', countryCode: 'ES', logo: '🇪🇸' }
  ]
};

export function generateLeagues(sportId: string, count: number = 1): League[] {
  const sport = getSportKey(sportId);
  const availableLeagues = leagueNames[sport as keyof typeof leagueNames] || leagueNames.basketball;
  const shuffled = [...availableLeagues].sort(() => Math.random() - 0.5);
  
  return shuffled.slice(0, count).map((league, index) => ({
    id: `${sportId}-league-${index + 1}`,
    name: league.name,
    country: league.country,
    countryCode: league.countryCode,
    logo: league.logo,
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
    default: return 'basketball';
  }
}