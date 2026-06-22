import { useState } from 'react';
import { personal, social, contact, theme } from '../data/portfolio';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

/**
 * Contact Component
 * Contact form and social links
 * Form shows success message on submit (demo mode)
 * Can be connected to Formspree or similar service
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Formspree ID is configured, submit to Formspree
    if (contact.formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        }
      } catch (error) {
        console.error('Form submission error:', error);
      }
    } else {
      // Demo mode: show success message after simulated delay
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const colorClasses = {
    blue: 'focus:border-blue-500 focus:ring-blue-500',
    purple: 'focus:border-purple-500 focus:ring-purple-500',
    emerald: 'focus:border-emerald-500 focus:ring-emerald-500',
    rose: 'focus:border-rose-500 focus:ring-rose-500',
    amber: 'focus:border-amber-500 focus:ring-amber-500',
    cyan: 'focus:border-cyan-500 focus:ring-cyan-500',
  };

  const accentClasses = {
    purple: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
    orange: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
    indigo: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600',
  };

  const primaryColor = colorClasses[theme.primaryColor] || colorClasses.blue;
  const accentGradient = accentClasses[theme.accentColor] || accentClasses.purple;

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-700">
                <Mail size={24} />
              </div>
              <span className="text-lg">{personal.email}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all"
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
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all"
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
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>

            {/* Formspree Note */}
            {!contact.formspreeId && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-8 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <strong>Note:</strong> This form is in demo mode. To enable real form submissions, 
                sign up at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">formspree.io</a>, 
                create a form, and add your Form ID in <code className="bg-gray-300 dark:bg-gray-700 px-1 rounded">src/data/portfolio.js</code>.
              </p>
            )}
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-400 rounded-xl p-8 text-center">
                <div className="text-green-600 dark:text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none ${primaryColor} transition-colors`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none ${primaryColor} transition-colors`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none ${primaryColor} transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 ${accentGradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
