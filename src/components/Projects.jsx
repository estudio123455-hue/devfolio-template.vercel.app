import { projects, theme } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Component
 * Grid of project cards with images, descriptions, tech tags, and links
 * Featured projects are highlighted with a subtle badge
 */
export default function Projects() {
  const colorClasses = {
    blue: 'hover:border-blue-500 dark:hover:border-blue-400',
    purple: 'hover:border-purple-500 dark:hover:border-purple-400',
    emerald: 'hover:border-emerald-500 dark:hover:border-emerald-400',
    rose: 'hover:border-rose-500 dark:hover:border-rose-400',
    amber: 'hover:border-amber-500 dark:hover:border-amber-400',
    cyan: 'hover:border-cyan-500 dark:hover:border-cyan-400',
  };

  const accentClasses = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    emerald: 'bg-emerald-500',
    orange: 'bg-orange-500',
    cyan: 'bg-cyan-500',
    indigo: 'bg-indigo-500',
  };

  const primaryColor = colorClasses[theme.primaryColor] || colorClasses.blue;
  const accentColor = accentClasses[theme.accentColor] || accentClasses.purple;

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent ${primaryColor}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 ${accentColor} text-white text-xs font-semibold rounded-full`}>
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
