import { useEffect } from 'react';

export function useTheme() {
  const theme = 'dark'; // Hardcoded to dark mode

  useEffect(() => {
    localStorage.setItem('portfolio-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const toggleTheme = () => {
    // Disabled
  };

  return { theme, toggleTheme };
}
