import { Sun, Moon } from 'lucide-react';

/**
 * Theme Toggle Component
 * Button to switch between light and dark mode
 * Fixed position in top-right corner
 */
export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-20 right-4 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
