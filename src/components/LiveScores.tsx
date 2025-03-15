import React from 'react';
import { Timer } from 'lucide-react';

export function LiveScores() {
  const mockGames = [
    { id: 1, homeTeam: 'Lakers', awayTeam: 'Warriors', homeScore: 98, awayScore: 102, period: '4th', timeLeft: '2:45' },
    { id: 2, homeTeam: 'Celtics', awayTeam: 'Nets', homeScore: 88, awayScore: 85, period: '3rd', timeLeft: '4:20' },
    { id: 3, homeTeam: 'Bucks', awayTeam: 'Heat', homeScore: 110, awayScore: 105, period: 'Final', timeLeft: '0:00' },
  ];

  return (
    <div className="bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-card-foreground">Live Scores</h2>
        <div className="flex items-center text-sm text-muted-foreground">
          <Timer className="h-4 w-4 mr-1" />
          <span>Auto-updating every minute</span>
        </div>
      </div>
      <div className="space-y-4">
        {mockGames.map((game) => (
          <div key={game.id} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-8">
                  <span className="font-medium text-card-foreground">{game.homeTeam}</span>
                  <span className="text-xl font-bold text-card-foreground">{game.homeScore}</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="font-medium text-card-foreground">{game.awayTeam}</span>
                  <span className="text-xl font-bold text-card-foreground">{game.awayScore}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-primary">{game.period}</div>
                <div className="text-sm text-muted-foreground">{game.timeLeft}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}