import React, { useEffect, useState } from 'react';
import { Search, ChevronLeft } from 'lucide-react';
import { useSport } from '../context/SportContext';
import { useFilter } from '../context/FilterContext';
import { generateRegions } from '../api/generators/regionGenerator';
import { generateTeams } from '../api/generators/teamGenerator';
import { generateCompetitions } from '../api/generators/competitionGenerator';
import type { Region, Team, Competition } from '../api/types';

export function SideNav() {
  const { activeSport } = useSport();
  const { activeFilter, setActiveFilter } = useFilter();
  const [regions, setRegions] = useState<Region[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    // Reset filter when sport changes
    setActiveFilter(null);
    // Generate new data when sport changes
    setRegions(generateRegions(activeSport.id));
    setTeams(generateTeams(activeSport.id, 5));
    setCompetitions(generateCompetitions(activeSport.id));
  }, [activeSport.id, setActiveFilter]);

  const handleRegionClick = (region: Region) => {
    setActiveFilter({
      type: 'region',
      id: region.id,
      name: region.name
    });
  };

  const handleTeamClick = (team: Team) => {
    setActiveFilter({
      type: 'team',
      id: team.id,
      name: team.name
    });
  };

  const handleCompetitionClick = (competition: Competition) => {
    setActiveFilter({
      type: 'competition',
      id: competition.id,
      name: competition.name
    });
  };

  const handleBackClick = () => {
    setActiveFilter(null);
  };

  return (
    <nav className="w-64 bg-card border-r border-border h-[calc(100vh-6.5rem)] hidden lg:block">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-background text-foreground pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-border"
          />
        </div>
      </div>

      {activeFilter && (
        <button
          onClick={handleBackClick}
          className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-secondary w-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to {activeSport.name}</span>
        </button>
      )}

      {!activeFilter && (
        <>
          <div className="px-4">
            <h2 className="text-muted-foreground text-sm font-medium mb-2">REGION</h2>
            <div className="space-y-1">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionClick(region)}
                  className="flex items-center space-x-3 px-3 py-2 text-foreground hover:bg-secondary rounded-md w-full text-left"
                >
                  <span>{region.flag}</span>
                  <span>{region.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 mt-6">
            <h2 className="text-muted-foreground text-sm font-medium mb-2">TEAMS</h2>
            <div className="space-y-1">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => handleTeamClick(team)}
                  className="flex items-center space-x-3 px-3 py-2 text-foreground hover:bg-secondary rounded-md w-full text-left"
                >
                  <span>{team.logo}</span>
                  <div className="flex flex-col">
                    <span>{team.name}</span>
                    <span className="text-xs text-muted-foreground">{team.country}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 mt-6">
            <h2 className="text-muted-foreground text-sm font-medium mb-2">COMPETITIONS</h2>
            <div className="space-y-1">
              {competitions.map((competition) => (
                <button
                  key={competition.id}
                  onClick={() => handleCompetitionClick(competition)}
                  className="flex items-center space-x-3 px-3 py-2 text-foreground hover:bg-secondary rounded-md w-full text-left"
                >
                  <span>{competition.logo}</span>
                  <div className="flex flex-col">
                    <span>{competition.name}</span>
                    <span className="text-xs text-muted-foreground">{competition.country}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}