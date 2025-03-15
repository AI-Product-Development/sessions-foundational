import React, { createContext, useContext, useState } from 'react';

type FilterType = 'region' | 'competition' | 'team';

type Filter = {
  type: FilterType;
  id: string;
  name: string;
} | null;

type FilterContextType = {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<Filter>(null);

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}