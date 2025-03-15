import { Match, MatchStatus } from '../../types';
import { getRandomNumber } from '../utils';
import { generateFootballTeams } from './teamGenerator';
import { generateFootballLeagues } from './leagueGenerator';

const periods = ['1H', '2H', 'HT'];

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
    
    if (period === 'HT') {
      return { current: 0, period };
    }
    
    return {
      current: getRandomNumber(1, 45),
      period
    };
  }

  return undefined;
}

function generateScore(status: MatchStatus): { home: number; away: number } {
  if (status === 'LIVE' || status === 'FT') {
    return {
      home: getRandomNumber(0, 4),
      away: getRandomNumber(0, 4)
    };
  }
  return { home: 0, away: 0 };
}

export function generateFootballMatches(date: string, count: number = 6): Match[] {
  const leagues = generateFootballLeagues(Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateFootballTeams(2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    
    matches.push({
      id: `1-match-${i + 1}`,
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