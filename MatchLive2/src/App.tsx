import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SportsTabs } from './components/SportsTabs';
import { DateNavigation } from './components/DateNavigation';
import { MatchCard } from './components/MatchCard';
import { allMatches } from './data/matches';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Basketball');
  const [selectedDate, setSelectedDate] = useState(1);

  const getMatchesForCurrentDateAndSport = () => {
    const sportMatches = allMatches[activeTab as keyof typeof allMatches] || [];
    const dateMatches = sportMatches.find(d => d.date === selectedDate);
    return dateMatches?.matches || [];
  };

  return (
    <ThemeProvider darkMode={darkMode}>
      <div className={`min-h-screen flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 ease-in-out`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SportsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DateNavigation selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          
          <main className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {getMatchesForCurrentDateAndSport().map((match, index) => (
                <MatchCard key={index} match={match} sport={activeTab} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;