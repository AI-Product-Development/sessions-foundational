import { Match, MatchStatus } from '../../types';
import { getRandomNumber } from '../utils';
import { generateHockeyTeams } from './teamGenerator';
import { generateHockeyLeagues } from './leagueGenerator';

const periods = ['P1', 'P2', 'P3', 'Break'];

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
    
    if (period === 'Break') {
      return { current: 0, period };
    }
    
    return {
      current: getRandomNumber(1, 20),
      period
    };
  }

  return undefined;
}

function generateScore(status: MatchStatus): { home: number; away: number } {
  if (status === 'LIVE' || status === 'FT') {
    return {
      home: getRandomNumber(0, 5),
      away: getRandomNumber(0, 5)
    };
  }
  return { home: 0, away: 0 };
}

export function generateHockeyMatches(date: string, count: number = 6): Match[] {
  const leagues = generateHockeyLeagues(Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateHockeyTeams(2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    
    matches.push({
      id: `2-match-${i + 1}`,
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