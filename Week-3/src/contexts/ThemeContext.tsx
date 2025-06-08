import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, AccentColor } from '../types';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [accentColor, setAccentColor] = useState<AccentColor>('indigo');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedAccent = localStorage.getItem('accentColor') as AccentColor;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccentColor(savedAccent);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
    document.documentElement.setAttribute('data-accent', accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      accentColor,
      setTheme,
      setAccentColor,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}