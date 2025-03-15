import React from 'react';
import { Menu, Star, Newspaper, Download, Globe } from 'lucide-react';
import { sports } from '../api/mockData';
import { useSport } from '../context/SportContext';

export function TopBar() {
  const { activeSport, setActiveSport } = useSport();

  const handleSportClick = (sport: typeof sports[0]) => {
    setActiveSport(sport);
  };

  return (
    <header className="bg-[#2c2d2e] border-b border-[#3a3b3c]">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-[#3a3b3c] rounded-md">
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-xl font-bold">LiveScore™</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#" className="flex items-center text-[#ff6b00] font-medium">
            <span className="mr-2">Scores</span>
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <Star className="h-5 w-5 mr-2" />
            <span>Favourites</span>
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <Newspaper className="h-5 w-5 mr-2" />
            <span>News</span>
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <Download className="h-5 w-5 mr-2" />
            <span>Get the app</span>
          </a>
        </nav>

        <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
          <Globe className="h-5 w-5" />
          <span>EN</span>
        </button>
      </div>
      
      <div className="flex items-center px-4 h-12 space-x-6 border-t border-[#3a3b3c]">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => handleSportClick(sport)}
            className={`px-3 py-1 rounded-full ${
              sport.id === activeSport.id
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {sport.name}
          </button>
        ))}
      </div>
    </header>
  );
}