import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-brand-blue hover:text-brand-gold transition-colors">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl leading-none">FAVOR <span className="text-brand-gold font-normal">INSUR</span></span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase mt-0.5">& IMMIGRATION SERVICES LLC</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Trusted, professional, and reliable insurance and immigration services based in Orange Park, Florida. Our focus is on securing your future in the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/insurance-services" className="hover:text-brand-gold transition-colors">Insurance Services</Link>
              </li>
              <li>
                <Link to="/immigration-services" className="hover:text-brand-gold transition-colors">Immigration Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-brand-gold transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  1845 Town Center Boulevard, Suite 205<br />
                  Orange Park, FL 32003<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <a href="mailto:contact@favorinsur.com" className="hover:text-brand-gold transition-colors font-medium text-slate-700">
                  contact@favorinsur.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Mon - Fri: 9:00 AM - 5:00 PM<br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-[10px] text-center text-slate-400 tracking-widest uppercase font-bold">
          <p>&copy; {currentYear} FAVOR INSUR & IMMIGRATION SERVICES LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
