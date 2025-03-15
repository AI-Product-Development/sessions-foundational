import { Match, MatchStatus } from '../../types';
import { getRandomNumber } from '../utils';
import { generateBasketballTeams } from './teamGenerator';
import { generateBasketballLeagues } from './leagueGenerator';

const periods = ['1Q', '2Q', '3Q', '4Q', 'HT', 'Break'];

function generateMatchTime(status: MatchStatus) {
  if (status === 'SCHEDULED') {
    const hours = getRandomNumber(12, 23);
    const minutes = getRandomNumber(0, 3) * 15;
    return {
      current: 0,
      period: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    };
  }

  if (status === 'LIVE') {
    const periodIndex = getRandomNumber(0, periods.length - 1);
    const period = periods[periodIndex];
    
    if (period === 'HT' || period === 'Break') {
      return { current: 0, period };
    }
    
    return {
      current: getRandomNumber(1, 12),
      period
    };
  }

  return undefined;
}

function generateScore(status: MatchStatus): { home: number; away: number } {
  if (status === 'LIVE' || status === 'FT') {
    return {
      home: getRandomNumber(40, 100),
      away: getRandomNumber(40, 100)
    };
  }
  return { home: 0, away: 0 };
}

export function generateBasketballMatches(date: string, count: number = 6): Match[] {
  const leagues = generateBasketballLeagues(Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateBasketballTeams(2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    
    matches.push({
      id: `3-match-${i + 1}`,
      league,
      homeTeam: teams[0],
      awayTeam: teams[1],
      score: generateScore(status),
      status,
      time: generateMatchTime(status),
      date,
      isFavorite: Math.random() > 0.8
    });
  }

  return matches;
}