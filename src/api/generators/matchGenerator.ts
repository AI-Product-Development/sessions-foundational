import { Match, MatchStatus, League, Team } from '../types';
import { generateTeams } from './teamGenerator';
import { generateLeagues } from './leagueGenerator';

const periods = {
  football: ['1H', '2H', 'HT'],
  hockey: ['P1', 'P2', 'P3', 'Break'],
  basketball: ['1Q', '2Q', '3Q', '4Q', 'HT', 'Break']
};

function generateMatchTime(status: MatchStatus, sportId: string) {
  const sport = getSportKey(sportId);
  const sportPeriods = periods[sport as keyof typeof periods];

  if (status === 'SCHEDULED') {
    const hours = Math.floor(Math.random() * 12) + 12; // 12:00 - 23:00
    const minutes = Math.floor(Math.random() * 4) * 15; // 00, 15, 30, 45
    return {
      current: 0,
      period: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    };
  }

  if (status === 'LIVE') {
    const periodIndex = Math.floor(Math.random() * (sportPeriods.length - 1));
    const period = sportPeriods[periodIndex];
    
    // Different time formats for different sports
    if (sport === 'basketball') {
      if (period === 'HT' || period === 'Break') {
        return { current: 0, period };
      }
      return {
        current: Math.floor(Math.random() * 12) + 1, // 1-12 minutes per quarter
        period
      };
    } else if (sport === 'football') {
      return {
        current: Math.floor(Math.random() * 45) + 1,
        period
      };
    } else if (sport === 'hockey') {
      return {
        current: Math.floor(Math.random() * 20) + 1,
        period
      };
    }
  }

  return undefined;
}

function generateScore(status: MatchStatus, sportId: string): { home: number; away: number } {
  if (status !== 'LIVE') {
    return { home: 0, away: 0 };
  }

  // Basketball typically has higher scores
  if (sportId === '3') {
    return {
      home: Math.floor(Math.random() * 60) + 40, // 40-100 points
      away: Math.floor(Math.random() * 60) + 40
    };
  }

  // Other sports have lower scores
  return {
    home: Math.floor(Math.random() * 4),
    away: Math.floor(Math.random() * 4)
  };
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

export function generateMatches(sportId: string, date: string, count: number = 6): Match[] {
  const leagues = generateLeagues(sportId, Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateTeams(sportId, 2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    
    matches.push({
      id: `${sportId}-match-${i + 1}`,
      league,
      homeTeam: teams[0],
      awayTeam: teams[1],
      score: generateScore(status, sportId),
      status,
      time: generateMatchTime(status, sportId),
      date,
      isFavorite: Math.random() > 0.8
    });
  }

  return matches;
}