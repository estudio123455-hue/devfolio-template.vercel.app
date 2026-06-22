import { personal, skills, theme } from '../data/portfolio';

/**
 * About Component
 * Personal bio and skills/technologies section
 * Skills are displayed as organized tags
 */
export default function About() {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  };

  const primaryColor = colorClasses[theme.primaryColor] || colorClasses.blue;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personal.bio}
            </p>
            {personal.location && (
              <p className="text-gray-600 dark:text-gray-400">
                📍 {personal.location}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {skills.categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${primaryColor} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
