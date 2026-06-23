import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { purchase, theme } from '../data/portfolio';

/**
 * PromoBanner Component
 * Sticky promotional banner at the top of the page
 * Dismissible with X button, links to Payhip purchase URL
 * Only shows if purchase.payhipUrl is configured
 */
export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if user has previously dismissed the banner
  useEffect(() => {
    const dismissed = localStorage.getItem('promoBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  // Handle dismiss
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('promoBannerDismissed', 'true');
  };

  // Don't render if no purchase URL or already dismissed
  if (!purchase.payhipUrl || isDismissed || !isVisible) {
    return null;
  }

  const accentClasses = {
    purple: 'from-purple-500 to-blue-500',
    pink: 'from-pink-500 to-rose-500',
    emerald: 'from-emerald-500 to-teal-500',
    orange: 'from-orange-500 to-amber-500',
    cyan: 'from-cyan-500 to-blue-500',
    indigo: 'from-indigo-500 to-purple-500',
  };

  const accentGradient = accentClasses[theme.accentColor] || accentClasses.purple;

  return (
    <div className={`bg-gradient-to-r ${accentGradient} shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Banner Content */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <span className="text-lg">👀</span>
            <p className="text-white text-sm sm:text-base font-medium">
              Like this template? Get <span className="font-bold">{purchase.productName}</span> for {purchase.price}
            </p>
            <a
              href={purchase.payhipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500"
              aria-label={`Purchase ${purchase.productName} for ${purchase.price}`}
            >
              Get it now
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile CTA Button */}
          <a
            href={purchase.payhipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center gap-1 px-3 py-1.5 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={`Purchase ${purchase.productName} for ${purchase.price}`}
          >
            Buy {purchase.price}
            <ArrowRight size={14} />
          </a>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-1 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Dismiss banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
