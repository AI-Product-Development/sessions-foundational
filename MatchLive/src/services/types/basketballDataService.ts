import {
  Game,
  GameStatistics,
  League,
  Player,
  PlayerGameStats,
  PlayerSeasonStats,
  Season,
  ShotLocation,
  Sport,
  Standing,
  Team,
  TeamGameStats,
  TeamSeasonStats,
} from '../../types/models';

/**
 * Interface for Basketball data service operations
 */
export interface BasketballDataService {
  // Sport operations
  getSport(): Promise<Sport>;
  
  // League operations
  getLeagues(): Promise<League[]>;
  getLeague(leagueId: string): Promise<League>;
  
  // Season operations
  getSeasons(leagueId: string): Promise<Season[]>;
  getCurrentSeason(leagueId: string): Promise<Season>;
  
  // Team operations
  getTeams(leagueId: string, seasonId?: string): Promise<Team[]>;
  getTeam(teamId: string): Promise<Team>;
  getTeamWithRoster(teamId: string): Promise<Team & { players: Player[] }>;
  
  // Player operations
  getPlayers(teamId: string): Promise<Player[]>;
  getPlayer(playerId: string): Promise<Player>;
  
  // Game operations
  getLiveGames(): Promise<Game[]>;
  getUpcomingGames(days: number): Promise<Game[]>;
  getRecentGames(days: number): Promise<Game[]>;
  getGame(gameId: string): Promise<Game>;
  getGameWithStatistics(gameId: string): Promise<Game & { statistics: GameStatistics }>;
  getGamesByTeam(teamId: string, seasonId?: string): Promise<Game[]>;
  getGamesByDate(date: string): Promise<Game[]>;
  
  // Statistics operations
  getTeamGameStats(gameId: string, teamId: string): Promise<TeamGameStats>;
  getPlayerGameStats(gameId: string, playerId: string): Promise<PlayerGameStats>;
  getPlayerSeasonStats(playerId: string, seasonId: string): Promise<PlayerSeasonStats>;
  getTeamSeasonStats(teamId: string, seasonId: string): Promise<TeamSeasonStats>;
  
  // Shot locations for heatmap
  getPlayerShotLocations(gameId: string, playerId: string): Promise<ShotLocation[]>;
  getPlayerSeasonShotLocations(playerId: string, seasonId: string): Promise<ShotLocation[]>;
  
  // Standings
  getStandings(leagueId: string, seasonId: string): Promise<Standing[]>;
  getConferenceStandings(leagueId: string, seasonId: string, conference: string): Promise<Standing[]>;
  getDivisionStandings(leagueId: string, seasonId: string, division: string): Promise<Standing[]>;
  
  // Trending and statistics
  getTopScorers(leagueId: string, seasonId: string, limit?: number): Promise<(Player & { stats: PlayerSeasonStats })[]>;
  getTopRebounders(leagueId: string, seasonId: string, limit?: number): Promise<(Player & { stats: PlayerSeasonStats })[]>;
  getTopAssists(leagueId: string, seasonId: string, limit?: number): Promise<(Player & { stats: PlayerSeasonStats })[]>;
  getTeamStreak(teamId: string, limit?: number): Promise<
    { gameId: string, result: 'W' | 'L', opponent: string, score: string, date: string }[]
  >;
  
  // User preferences and custom queries
  subscribeToGameUpdates(gameId: string, callback: (game: Game) => void): () => void;
  subscribeToLiveGames(callback: (games: Game[]) => void): () => void;
}
