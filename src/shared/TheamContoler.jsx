import React, { useContext } from 'react';
import { TheamContext } from '../TheamProvider/TheamProvider';

const TheamContoler = () => {
  const { theme, toggleTheme } = useContext(TheamContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost text-white text-lg font-semibold"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default TheamContoler;
