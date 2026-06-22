import { personal, footer } from '../data/portfolio';

/**
 * Footer Component
 * Simple footer with copyright and optional links
 */
export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {personal.currentYear} {personal.name}. All rights reserved.
          </p>

          {/* Credit */}
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            {footer.credit}
          </p>

          {/* Optional Links */}
          {footer.links && footer.links.length > 0 && (
            <div className="flex items-center gap-6">
              {footer.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
