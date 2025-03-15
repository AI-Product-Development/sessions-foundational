import { Sport, Region, Competition, League, Team, DateOption } from './types';

export type Sport = {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
};

export type Region = {
  id: string;
  name: string;
  code: string;
  flag?: string;
};

export type Competition = {
  id: string;
  name: string;
  country: string;
  logo?: string;
  isFavorite: boolean;
};

export type League = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  logo?: string;
  isFavorite: boolean;
};

export type Team = {
  id: string;
  name: string;
  shortName: string;
  country: string;
  logo?: string;
  isFavorite: boolean;
};

export type MatchStatus = 'SCHEDULED' | 'LIVE' | 'HT' | 'FT' | 'CANCELLED' | 'POSTPONED';

export type TennisScore = {
  sets: {
    home: number[];
    away: number[];
  };
  currentGame: {
    home: number;
    away: number;
  };
  currentSet: number;
  advantage?: 'home' | 'away';
  isDeuce?: boolean;
};

export type MatchScore = {
  home: number;
  away: number;
  details?: TennisScore;
};

export type MatchTime = {
  current: number;
  period: string;
  extraTime?: number;
};

export type Match = {
  id: string;
  league: League;
  homeTeam: Team;
  awayTeam: Team;
  score: MatchScore;
  status: MatchStatus;
  time?: MatchTime;
  date: string;
  isFavorite: boolean;
};

export type DateOption = {
  day: string;
  date: string;
  fullDate: string;
  isActive: boolean;
};