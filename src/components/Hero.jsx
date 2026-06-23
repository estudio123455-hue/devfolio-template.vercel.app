import { personal, social, theme } from '../data/portfolio';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

/**
 * Hero Component
 * Main landing section with name, title, tagline, and CTA
 * Includes social links and primary call-to-action buttons
 */
export default function Hero() {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    rose: 'text-rose-600 dark:text-rose-400',
    amber: 'text-amber-600 dark:text-amber-400',
    cyan: 'text-cyan-600 dark:text-cyan-400',
  };

  const accentClasses = {
    purple: 'from-purple-500 to-blue-500',
    pink: 'from-pink-500 to-rose-500',
    emerald: 'from-emerald-500 to-teal-500',
    orange: 'from-orange-500 to-amber-500',
    cyan: 'from-cyan-500 to-blue-500',
    indigo: 'from-indigo-500 to-purple-500',
  };

  const primaryColor = colorClasses[theme.primaryColor] || colorClasses.blue;
  const accentGradient = accentClasses[theme.accentColor] || accentClasses.purple;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className={`text-lg sm:text-xl font-medium ${primaryColor} mb-4 animate-fade-in`}>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
          {personal.name}
        </h1>

        {/* Title with gradient */}
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent mb-4 animate-fade-in-up`}>
          {personal.title}
        </h2>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up">
          {personal.tagline}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter size={24} />
            </a>
          )}
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#projects"
            className={`group px-8 py-4 bg-gradient-to-r ${accentGradient} text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2`}
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
