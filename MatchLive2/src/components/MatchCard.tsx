import React from 'react';
import { BarChart3, Users, ChevronRight } from 'lucide-react';
import type { Match } from '../types';
import { useTheme } from '../hooks/useTheme';

interface MatchCardProps {
  match: Match;
  sport: string;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, sport }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.card.bg} rounded-lg shadow-md p-6 hover:ring-2 hover:ring-primary-500 transition-all cursor-pointer`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{match.league}</span>
        <span className={`text-sm px-3 py-1 rounded-full ${
          match.status === 'live' 
            ? 'bg-accent-500/20 text-accent-500' 
            : 'bg-gray-700 text-gray-400'
        }`}>
          {match.status === 'live' ? 'LIVE' : match.status === 'completed' ? 'Completed' : 'Upcoming'}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-lg">{match.team1}</span>
            <span className="text-2xl font-bold">{match.score1}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">{match.team2}</span>
            <span className="text-2xl font-bold">{match.score2}</span>
          </div>
        </div>
        <div className="ml-8 text-sm">
          <span className={match.status === 'live' ? 'text-accent-500' : 'text-gray-400'}>
            {match.time}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-1" />
            Stats
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {sport === 'Tennis' ? 'H2H' : 'Lineups'}
          </span>
        </div>
        <button className="text-primary-500 hover:text-primary-400 transition-colors">
          View Details
          <ChevronRight className="h-4 w-4 inline ml-1" />
        </button>
      </div>
    </div>
  );
};