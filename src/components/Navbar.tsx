import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Scroll to top on route change
  // React Router handles this in newer versions or layout, but good to ensure close on location change
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Insurance Services', path: '/insurance-services' },
    { name: 'Immigration Services', path: '/immigration-services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm z-10">
      {/* Top Banner */}
      <div className="bg-brand-blue text-white text-xs uppercase tracking-widest py-2 px-4 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-brand-gold" />
              1845 Town Center Blvd, Ste 205, Orange Park, FL
            </span>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 space-x-4 text-slate-300">
            <span className="flex items-center hover:text-white transition-colors cursor-pointer">
              <Mail className="w-4 h-4 mr-2 text-brand-gold" />
              contact@favorinsur.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl leading-none text-brand-blue">FAVOR <span className="text-brand-gold font-normal">INSUR</span></span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase mt-0.5">& Immigration Services LLC</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-brand-gold ${
                    isActive ? 'text-brand-blue border-b-2 border-brand-gold pb-1' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-brand-blue text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-brand-gold transition-all"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-slate-50 text-brand-gold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-white px-4 py-3 rounded-md font-medium text-base transition-colors"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
