import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
       {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  );
}

export default ToggleButton;
