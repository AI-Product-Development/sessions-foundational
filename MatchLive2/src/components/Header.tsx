import React from 'react';
import { Star, Bell, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const { theme } = useTheme();

  return (
    <header className={`${theme.header.bg} border-b border-gray-700 sticky top-0 z-10`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold">Live Scores</h2>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-accent-500">Live</span>
            <Star className="h-5 w-5" />
            <Bell className="h-5 w-5" />
            <Download className="h-5 w-5" />
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};