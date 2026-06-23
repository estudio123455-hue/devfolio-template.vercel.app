import { ShoppingCart } from 'lucide-react';
import { purchase, theme } from '../data/portfolio';

/**
 * FloatingCTA Component
 * Fixed button in bottom-right corner for purchase
 * Visible at all times while scrolling
 * Only shows if purchase.payhipUrl is configured
 */
export default function FloatingCTA() {
  // Don't render if no purchase URL
  if (!purchase.payhipUrl) {
    return null;
  }

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
    <a
      href={purchase.payhipUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 ${accentGradient} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 group`}
      aria-label={`Purchase ${purchase.productName} for ${purchase.price}`}
    >
      <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
      <span className="font-semibold hidden sm:inline">Get this template</span>
      <span className="font-semibold sm:hidden">{purchase.price}</span>
    </a>
  );
}
