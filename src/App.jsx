import { useState, useEffect } from 'react';
import { theme, personal, navigation, showExperience } from './data/portfolio';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import PromoBanner from './components/PromoBanner';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [darkMode, setDarkMode] = useState(theme.darkModeDefault);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Apply Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${theme.fontFamily.replace(' ', '+')}:wght@400;500;600;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [theme.fontFamily]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300`} style={{ fontFamily: theme.fontFamily }}>
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Navigation */}
      <Navigation navigation={navigation} />
      
      {/* Theme Toggle */}
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Experience Section (toggleable) */}
      {showExperience && <Experience />}
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}

export default App;
