import React from 'react';
import { Menu, Search, Users } from 'lucide-react';
import { regions, teams, competitions } from '../data/sports';
import { useTheme } from '../hooks/useTheme';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme } = useTheme();

  return (
    <aside 
      className={`${theme.sidebar.bg} border-r border-gray-700 
        ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out
        fixed h-full left-0 top-0 bottom-0 overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>MatchLive</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className={`relative mb-6 ${!sidebarOpen && 'hidden'}`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className={`text-sm uppercase text-gray-400 mb-2 ${!sidebarOpen && 'hidden'}`}>Region</h2>
            {regions.map((region) => (
              <button
                key={region.id}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <region.icon className="h-5 w-5 text-gray-400" />
                {sidebarOpen && <span>{region.name}</span>}
              </button>
            ))}
          </div>

          <div>
            <h2 className={`text-sm uppercase text-gray-400 mb-2 ${!sidebarOpen && 'hidden'}`}>Teams</h2>
            {teams.map((team) => (
              <button
                key={team.id}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Users className="h-5 w-5 text-gray-400" />
                {sidebarOpen && (
                  <>
                    <span>{team.name}</span>
                    <span className="text-xs text-gray-400 ml-auto">{team.league}</span>
                  </>
                )}
              </button>
            ))}
          </div>

          <div>
            <h2 className={`text-sm uppercase text-gray-400 mb-2 ${!sidebarOpen && 'hidden'}`}>Competitions</h2>
            {competitions.map((competition) => (
              <button
                key={competition.id}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <competition.icon className="h-5 w-5 text-gray-400" />
                {sidebarOpen && <span>{competition.name}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};