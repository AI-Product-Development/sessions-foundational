import React from 'react';
import { User } from 'lucide-react';

export function PlayerStats() {
  const topPlayers = [
    { id: 1, name: 'Stephen Curry', team: 'GSW', points: 32, assists: 8, rebounds: 5 },
    { id: 2, name: 'Kevin Durant', team: 'PHX', points: 28, assists: 6, rebounds: 7 },
    { id: 3, name: 'Giannis Antetokounmpo', team: 'MIL', points: 34, assists: 5, rebounds: 12 },
  ];

  return (
    <div className="bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <User className="h-5 w-5 text-primary mr-2" />
        <h2 className="text-xl font-semibold text-card-foreground">Top Performers</h2>
      </div>
      <div className="space-y-4">
        {topPlayers.map((player) => (
          <div key={player.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium text-card-foreground">{player.name}</h3>
                <span className="text-sm text-muted-foreground">{player.team}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="text-center">
                <span className="text-sm text-muted-foreground">PTS</span>
                <p className="font-semibold text-card-foreground">{player.points}</p>
              </div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">AST</span>
                <p className="font-semibold text-card-foreground">{player.assists}</p>
              </div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">REB</span>
                <p className="font-semibold text-card-foreground">{player.rebounds}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}