import { personal, footer, purchase, theme } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';

/**
 * Footer Component
 * Simple footer with copyright, optional links, and purchase CTA
 */
export default function Footer() {
  const accentClasses = {
    purple: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
    orange: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
    indigo: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600',
  };

  const accentGradient = accentClasses[theme.accentColor] || accentClasses.purple;

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Purchase CTA Section */}
        {purchase.payhipUrl && (
          <div className="mb-8 text-center pb-8 border-b border-gray-800 dark:border-gray-900">
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              This is a premium template — get your copy
            </p>
            <a
              href={purchase.payhipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 ${accentGradient} text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
              aria-label={`Purchase ${purchase.productName} for ${purchase.price}`}
            >
              Get {purchase.productName} for {purchase.price}
              <ArrowRight size={20} />
            </a>
          </div>
        )}

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
