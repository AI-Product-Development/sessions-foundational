import React from 'react';
import { SportProvider } from './context/SportContext';
import { FilterProvider } from './context/FilterContext';
import { TopBar } from './components/TopBar';
import { SideNav } from './components/SideNav';
import { ScoreBoard } from './components/ScoreBoard';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme (this runs the effect in useTheme)
  useTheme();

  return (
    <SportProvider>
      <FilterProvider>
        <div className="min-h-screen bg-background">
          <TopBar />
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <ScoreBoard />
            </main>
          </div>
        </div>
      </FilterProvider>
    </SportProvider>
  );
}

export default App;