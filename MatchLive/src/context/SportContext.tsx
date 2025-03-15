import React, { createContext, useContext, useState } from 'react';
import { Sport } from '../api/types';
import { sports } from '../api/mockData';

type SportContextType = {
  activeSport: Sport;
  setActiveSport: (sport: Sport) => void;
};

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: React.ReactNode }) {
  const [activeSport, setActiveSport] = useState<Sport>(
    sports.find(sport => sport.isActive) || sports[0]
  );

  return (
    <SportContext.Provider value={{ activeSport, setActiveSport }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const context = useContext(SportContext);
  if (context === undefined) {
    throw new Error('useSport must be used within a SportProvider');
  }
  return context;
}