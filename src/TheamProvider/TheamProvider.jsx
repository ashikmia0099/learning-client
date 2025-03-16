import React, { createContext, useEffect, useState } from 'react';

export const TheamContext = createContext();

const TheamProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === 'dark') {
      htmlElement.classList.add('dark'); 
      htmlElement.setAttribute('data-theme', 'dark'); 
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <TheamContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </TheamContext.Provider>
  );
};

export default TheamProvider;
