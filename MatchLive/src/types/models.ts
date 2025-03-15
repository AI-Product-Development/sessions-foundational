/**
 * Core data models for the Sports Stats & Live Scores Dashboard
 */

/**
 * Sport entity - represents a type of sport (e.g., Basketball)
 */
export interface Sport {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  description?: string;
}

/**
 * League entity - represents a competition within a sport
 * (e.g., NBA within Basketball)
 */
export interface League {
  id: string;
  sportId: string;
  name: string;
  shortName: string;
  country: string;
  countryCode: string;
  logo?: string;
  seasonId?: string; // Current active season
  seasons?: Season[]; // All seasons
}

/**
 * Season entity - represents a time period in which games are played
 */
export interface Season {
  id: string;
  leagueId: string;
  name: string;
  year: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  teams?: Team[]; // Teams participating in this season
}

/**
 * Team entity - represents a sports team
 */
export interface Team {
  id: string;
  name: string;
  shortName: string;
  nickname?: string;
  city: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  players?: Player[]; // Players on this team
  leagueId: string;
  divisionId?: string; // For leagues with divisions
  foundedYear?: number;
  venue?: Venue;
  standing?: Standing; // Current standing in the active season
}

/**
 * Player entity - represents an individual athlete
 */
export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  number: string;
  position: string;
  height?: string; // In cm or ft/in
  weight?: string; // In kg or lbs
  dateOfBirth?: string;
  nationality?: string;
  photo?: string;
  teamId: string;
  isActive: boolean;
  careerStartYear?: number;
  draftInfo?: string;
  college?: string;
}

/**
 * Game entity - represents a match between two teams
 */
export interface Game {
  id: string;
  leagueId: string;
  seasonId: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeam?: Team;
  awayTeam?: Team;
  date: string; // ISO date string
  time: string; 
  venue: Venue;
  status: GameStatus;
  period: string; // e.g., "1Q", "2Q", "3Q", "4Q", "OT"
  clock: string; // Time remaining in period
  scores?: GameScore;
  statistics?: GameStatistics;
  officials?: string[];
  attendance?: number;
  broadcasters?: string[];
}

/**
 * Game status enum
 */
export enum GameStatus {
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  HALFTIME = "HALFTIME",
  FINISHED = "FINISHED",
  POSTPONED = "POSTPONED",
  CANCELLED = "CANCELLED"
}

/**
 * Game score entity
 */
export interface GameScore {
  homeTotal: number;
  awayTotal: number;
  quarters: {
    homeScore: number;
    awayScore: number;
    quarter: number;
  }[];
}

/**
 * Game statistics entity - aggregated statistics for a game
 */
export interface GameStatistics {
  homeTeam: TeamGameStats;
  awayTeam: TeamGameStats;
  playerStats: PlayerGameStats[];
}

/**
 * Team game statistics
 */
export interface TeamGameStats {
  teamId: string;
  gameId: string;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  fieldGoalPercentage: number;
  threePointersMade: number;
  threePointersAttempted: number;
  threePointPercentage: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  freeThrowPercentage: number;
  rebounds: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  personalFouls: number;
  points: number;
  fastBreakPoints?: number;
  pointsInPaint?: number;
  secondChancePoints?: number;
  pointsOffTurnovers?: number;
}

/**
 * Player game statistics
 */
export interface PlayerGameStats {
  playerId: string;
  gameId: string;
  teamId: string;
  starter: boolean;
  minutes: string; // Format: "MM:SS"
  points: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  threePointersMade: number;
  threePointersAttempted: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  rebounds: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  personalFouls: number;
  plusMinus: number;
  shotLocations?: ShotLocation[];
}

/**
 * Shot location for player heatmaps
 */
export interface ShotLocation {
  playerId: string;
  gameId: string;
  x: number; // X-coordinate on court (0-100)
  y: number; // Y-coordinate on court (0-100)
  made: boolean;
  value: number; // 2 or 3 points
  period: number;
  timestamp: string;
}

/**
 * Venue entity - represents a location where games are played
 */
export interface Venue {
  id: string;
  name: string;
  city: string;
  state?: string;
  country: string;
  capacity?: number;
  surface?: string;
  opened?: number;
}

/**
 * Standing entity - represents a team's position in a league
 */
export interface Standing {
  teamId: string;
  leagueId: string;
  seasonId: string;
  conference?: string;
  division?: string;
  rank: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  winPercentage: number;
  homeWins: number;
  homeLosses: number;
  awayWins: number;
  awayLosses: number;
  lastTenWins?: number;
  lastTenLosses?: number;
  streak?: string; // e.g., "W5" for 5-game winning streak
  pointsFor?: number;
  pointsAgainst?: number;
  pointDifferential?: number;
}

/**
 * Player season statistics
 */
export interface PlayerSeasonStats {
  playerId: string;
  seasonId: string;
  teamId: string;
  gamesPlayed: number;
  gamesStarted: number;
  minutes: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  fieldGoalPercentage: number;
  threePointersMade: number;
  threePointersAttempted: number;
  threePointPercentage: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  freeThrowPercentage: number;
  rebounds: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  personalFouls: number;
  points: number;
  pointsPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  efficiency?: number;
  playerEfficiencyRating?: number;
  trueShootingPercentage?: number;
  usageRate?: number;
}

/**
 * Team season statistics
 */
export interface TeamSeasonStats {
  teamId: string;
  seasonId: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  pointsPerGame: number;
  pointsAllowedPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
  turnoversPerGame: number;
  fieldGoalPercentage: number;
  threePointPercentage: number;
  freeThrowPercentage: number;
  offensiveRating?: number;
  defensiveRating?: number;
  paceAdjusted?: number;
  strengthOfSchedule?: number;
}
