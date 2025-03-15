import React from 'react';
import { Menu, Star, Newspaper, Download, Globe } from 'lucide-react';
import { sports } from '../api/mockData';
import { useSport } from '../context/SportContext';
import { ThemeToggle } from './ThemeToggle';

export function TopBar() {
  const { activeSport, setActiveSport } = useSport();

  const handleSportClick = (sport: typeof sports[0]) => {
    setActiveSport(sport);
  };

  return (
    <header className="bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-secondary rounded-md text-foreground">
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-xl font-bold text-foreground">MatchLive</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center text-primary font-medium">
            <span className="mr-2">Scores</span>
          </a>
          <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
            <Star className="h-5 w-5 mr-2" />
            <span>Favourites</span>
          </a>
          <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
            <Newspaper className="h-5 w-5 mr-2" />
            <span>News</span>
          </a>
          <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
            <Download className="h-5 w-5 mr-2" />
            <span>Get the app</span>
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
            <Globe className="h-5 w-5" />
            <span>EN</span>
          </button>
        </div>
      </div>
      
      <div className="flex items-center px-4 h-12 space-x-6 border-t border-border overflow-x-auto">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => handleSportClick(sport)}
            className={`px-3 py-1 rounded-full whitespace-nowrap ${
              sport.id === activeSport.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {sport.name}
          </button>
        ))}
      </div>
    </header>
  );
}