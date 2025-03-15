import { Match, MatchStatus } from '../../types';
import { getRandomNumber } from '../utils';
import { generateCricketTeams } from './teamGenerator';
import { generateCricketLeagues } from './leagueGenerator';

const periods = ['1st Inn.', '2nd Inn.', 'Lunch', 'Tea', 'Stumps'];

function generateMatchTime(status: MatchStatus) {
  if (status === 'SCHEDULED') {
    const hours = getRandomNumber(9, 16); // Cricket usually starts earlier
    const minutes = getRandomNumber(0, 3) * 15;
    return {
      current: 0,
      period: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    };
  }

  if (status === 'LIVE') {
    const periodIndex = getRandomNumber(0, periods.length - 1);
    const period = periods[periodIndex];
    
    if (['Lunch', 'Tea', 'Stumps'].includes(period)) {
      return { current: 0, period };
    }
    
    return {
      current: getRandomNumber(1, 90), // Overs
      period
    };
  }

  return undefined;
}

function generateScore(status: MatchStatus): { home: number; away: number } {
  if (status === 'LIVE' || status === 'FT') {
    // Cricket scores are typically shown as runs/wickets
    // Here we'll just show runs for simplicity
    return {
      home: getRandomNumber(150, 400),
      away: getRandomNumber(150, 400)
    };
  }
  return { home: 0, away: 0 };
}

export function generateCricketMatches(date: string, count: number = 6): Match[] {
  const leagues = generateCricketLeagues(Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateCricketTeams(2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    
    matches.push({
      id: `5-match-${i + 1}`,
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