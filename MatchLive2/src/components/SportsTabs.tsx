import React from 'react';
import { sports } from '../data/sports';
import { useTheme } from '../hooks/useTheme';

interface SportsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const SportsTabs: React.FC<SportsTabsProps> = ({ activeTab, setActiveTab }) => {
  const { theme } = useTheme();

  return (
    <nav className={`${theme.nav.bg} border-b border-gray-700`}>
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {sports.map((sport) => (
            <button
              key={sport}
              className={`py-4 px-2 border-b-2 ${
                activeTab === sport
                  ? 'border-primary-500 text-primary-500'
                  : `border-transparent ${theme.text.secondary}`
              }`}
              onClick={() => setActiveTab(sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};