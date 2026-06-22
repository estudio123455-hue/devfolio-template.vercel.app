import { experience, theme } from '../data/portfolio';
import { Briefcase, GraduationCap } from 'lucide-react';

/**
 * Experience Component
 * Timeline of work experience and education
 * Toggleable via config (showExperience in portfolio.js)
 */
export default function Experience() {
  const colorClasses = {
    blue: 'border-blue-500 dark:border-blue-400',
    purple: 'border-purple-500 dark:border-purple-400',
    emerald: 'border-emerald-500 dark:border-emerald-400',
    rose: 'border-rose-500 dark:border-rose-400',
    amber: 'border-amber-500 dark:border-amber-400',
    cyan: 'border-cyan-500 dark:border-cyan-400',
  };

  const primaryColor = colorClasses[theme.primaryColor] || colorClasses.blue;

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${primaryColor}`}></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 ${primaryColor} z-10`}></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      )}
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>

                    {/* Company/Location */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.company}
                      {item.location && ` • ${item.location}`}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 text-sm"
                        >
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
