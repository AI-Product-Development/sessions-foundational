import React, { createContext, useCallback, useMemo } from 'react';

interface ThemeContextType {
  theme: Theme;
}

interface Theme {
  bg: string;
  text: {
    primary: string;
    secondary: string;
  };
  sidebar: {
    bg: string;
  };
  header: {
    bg: string;
  };
  nav: {
    bg: string;
  };
  card: {
    bg: string;
  };
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  darkMode: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, darkMode }) => {
  const theme = useMemo(() => ({
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: {
      primary: darkMode ? 'text-white' : 'text-gray-900',
      secondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    },
    sidebar: {
      bg: darkMode ? 'bg-gray-800' : 'bg-white',
    },
    header: {
      bg: darkMode ? 'bg-gray-800' : 'bg-white',
    },
    nav: {
      bg: darkMode ? 'bg-gray-800' : 'bg-white',
    },
    card: {
      bg: darkMode ? 'bg-gray-800' : 'bg-white',
    },
  }), [darkMode]);

  const value = useMemo(() => ({
    theme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};