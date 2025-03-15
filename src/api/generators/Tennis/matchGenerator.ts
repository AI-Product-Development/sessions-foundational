import { Match, MatchStatus, TennisScore } from '../../types';
import { getRandomNumber } from '../utils';
import { generateTennisTeams } from './teamGenerator';
import { generateTennisLeagues } from './leagueGenerator';

const TENNIS_POINTS = [0, 15, 30, 40];
const periods = ['1st Set', '2nd Set', '3rd Set', '4th Set', '5th Set', 'Break'];

function isWomensMatch(league: { country: string }): boolean {
  return league.country === 'WTA Tour';
}

function generateTennisScore(status: MatchStatus, isWomens: boolean): TennisScore {
  if (status === 'SCHEDULED') {
    return {
      sets: { home: [], away: [] },
      currentGame: { home: 0, away: 0 },
      currentSet: 1
    };
  }

  const maxSets = isWomens ? 3 : 5;
  const completedSets = getRandomNumber(0, maxSets - 1);
  const sets = { home: [], away: [] };
  let homeSetWins = 0;
  let awaySetWins = 0;

  // Generate completed sets
  for (let i = 0; i < completedSets; i++) {
    const homeGames = getRandomNumber(0, 6);
    const awayGames = getRandomNumber(0, 6);
    
    // Ensure valid tennis score
    if (homeGames === 6 && awayGames === 6) {
      // Tiebreak
      sets.home.push(7);
      sets.away.push(getRandomNumber(0, 6));
    } else if (homeGames > awayGames && homeGames >= 6) {
      sets.home.push(homeGames);
      sets.away.push(awayGames);
      homeSetWins++;
    } else {
      sets.home.push(homeGames);
      sets.away.push(Math.max(6, homeGames + 1));
      awaySetWins++;
    }
  }

  // Generate current game score if match is still ongoing
  const currentGame = {
    home: TENNIS_POINTS[getRandomNumber(0, TENNIS_POINTS.length - 1)],
    away: TENNIS_POINTS[getRandomNumber(0, TENNIS_POINTS.length - 1)]
  };

  // Handle deuce and advantage
  let isDeuce = false;
  let advantage: 'home' | 'away' | undefined;
  
  if (currentGame.home === 40 && currentGame.away === 40) {
    isDeuce = true;
    if (Math.random() > 0.5) {
      advantage = Math.random() > 0.5 ? 'home' : 'away';
    }
  }

  return {
    sets,
    currentGame,
    currentSet: completedSets + 1,
    isDeuce,
    advantage
  };
}

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
    
    return {
      current: 0,
      period
    };
  }

  return undefined;
}

export function generateTennisMatches(date: string, count: number = 6): Match[] {
  const leagues = generateTennisLeagues(Math.ceil(count / 3));
  const matches: Match[] = [];

  for (let i = 0; i < count; i++) {
    const league = leagues[Math.floor(i / 3)];
    const teams = generateTennisTeams(2);
    const status: MatchStatus = Math.random() > 0.3 ? 'LIVE' : 'SCHEDULED';
    const isWomens = isWomensMatch(league);
    const tennisScore = generateTennisScore(status, isWomens);
    
    // Calculate total sets won
    const setsWon = {
      home: tennisScore.sets.home.filter((games, idx) => games > tennisScore.sets.away[idx]).length,
      away: tennisScore.sets.away.filter((games, idx) => games > tennisScore.sets.home[idx]).length
    };
    
    matches.push({
      id: `4-match-${i + 1}`,
      league,
      homeTeam: teams[0],
      awayTeam: teams[1],
      score: {
        home: setsWon.home,
        away: setsWon.away,
        details: tennisScore
      },
      status,
      time: generateMatchTime(status),
      date,
      isFavorite: Math.random() > 0.8
    });
  }

  return matches;
}