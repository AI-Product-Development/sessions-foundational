import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { dates } from '../api/mockData';
import { mockService } from '../api/mockService';
import { useSport } from '../context/SportContext';
import { useFilter } from '../context/FilterContext';
import type { Match, DateOption, TennisScore } from '../api/types';

function TennisScoreDisplay({ score }: { score: { home: number; away: number; details?: TennisScore } }) {
  if (!score.details) {
    return (
      <>
        <span className="font-bold">{score.home}</span>
        <span className="font-bold">{score.away}</span>
      </>
    );
  }

  const { sets, currentGame, currentSet, isDeuce, advantage } = score.details;

  return (
    <div className="flex flex-col space-y-1 text-sm">
      {/* Sets */}
      <div className="flex space-x-2">
        <div className="flex space-x-1">
          {sets.home.map((games, idx) => (
            <span key={idx} className="font-bold">{games}</span>
          ))}
        </div>
        <div className="flex space-x-1">
          {sets.away.map((games, idx) => (
            <span key={idx} className="font-bold">{games}</span>
          ))}
        </div>
      </div>
      
      {/* Current Game */}
      {currentGame && (
        <div className="text-xs text-gray-400">
          {isDeuce ? (
            advantage ? 
              `AD ${advantage === 'home' ? score.details.sets.home : score.details.sets.away}` :
              'Deuce'
          ) : (
            `${currentGame.home}-${currentGame.away}`
          )}
        </div>
      )}
    </div>
  );
}

export function ScoreBoard() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateOption>(
    dates.find(date => date.isActive) || dates[0]
  );
  const { activeSport } = useSport();
  const { activeFilter } = useFilter();

  useEffect(() => {
    const unsubscribe = mockService.subscribe((allMatches) => {
      let filteredMatches = mockService.getMatchesByDateAndSport(
        selectedDate.fullDate,
        activeSport.id,
        activeFilter?.type === 'team' ? activeFilter.id : undefined
      );

      // Apply additional filtering based on activeFilter
      if (activeFilter) {
        switch (activeFilter.type) {
          case 'region':
            filteredMatches = filteredMatches.filter(
              match => match.league.countryCode === activeFilter.id
            );
            break;
          case 'competition':
            filteredMatches = filteredMatches.filter(
              match => match.league.id === activeFilter.id
            );
            break;
        }
      }

      setMatches(filteredMatches);
    });
    return unsubscribe;
  }, [activeSport.id, selectedDate.fullDate, activeFilter]);

  const matchesByLeague = matches.reduce((acc, match) => {
    const league = match.league;
    if (!acc[league.id]) {
      acc[league.id] = {
        league: league,
        matches: []
      };
    }
    acc[league.id].matches.push(match);
    return acc;
  }, {} as Record<string, { league: Match['league']; matches: Match[] }>);

  const handleDateClick = (date: DateOption) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4">
      {activeFilter && (
        <div className="mb-4 px-2">
          <h1 className="text-xl font-semibold text-foreground">{activeFilter.name}</h1>
        </div>
      )}

      <div className="flex items-center space-x-4 mb-6 overflow-x-auto">
        <span className="bg-primary text-primary-foreground px-2 py-1 text-sm rounded">LIVE</span>
        {dates.map((date) => (
          <button
            key={date.fullDate}
            onClick={() => handleDateClick(date)}
            className={`flex flex-col items-center ${
              date.fullDate === selectedDate.fullDate ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <span className="text-sm">{date.day}</span>
            <span className="text-xs">{date.date}</span>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {Object.values(matchesByLeague).map(({ league, matches }) => (
          <div key={league.id} className="bg-card rounded-lg overflow-hidden shadow">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <span>{league.logo}</span>
                <span className="text-lg font-medium text-foreground">{league.name}</span>
                <span className="text-sm text-muted-foreground">{league.country}</span>
              </div>
              <button className={`${league.isFavorite ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`}>
                <Star className="h-5 w-5" />
              </button>
            </div>
            
            {matches.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span>{match.homeTeam.logo}</span>
                      <span className="text-foreground">{match.homeTeam.name}</span>
                    </div>
                    {activeSport.id === '4' ? (
                      <TennisScoreDisplay score={match.score} />
                    ) : (
                      <span className="font-bold text-foreground">{match.score.home}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{match.awayTeam.logo}</span>
                      <span className="text-foreground">{match.awayTeam.name}</span>
                    </div>
                    {activeSport.id !== '4' && (
                      <span className="font-bold text-foreground">{match.score.away}</span>
                    )}
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-sm text-muted-foreground">
                    {match.status === 'SCHEDULED' ? match.time?.period : match.time?.period}
                    {match.status === 'LIVE' && match.time?.period !== 'Break' && ` ${match.time?.current}'`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}