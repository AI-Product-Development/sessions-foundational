import React from 'react';
import { Layout } from './components/Layout';
import { TopBar } from './components/TopBar';
import { SideNav } from './components/SideNav';
import { ScoreBoard } from './components/ScoreBoard';
import { SportProvider } from './context/SportContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <SportProvider>
      <FilterProvider>
        <div className="min-h-screen bg-[#1d1e1f] text-white">
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