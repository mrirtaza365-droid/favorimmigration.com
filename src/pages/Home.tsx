import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ShieldCheck, FileText, BadgeCheck, Users, Globe2, Building2, MapPin } from 'lucide-react';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <SEO 
        title="Trusted Insurance & Immigration Services in Orange Park, FL"
        description="Favor Insur & Immigration Services LLC offers reliable insurance policies and professional immigration consulting in Orange Park and Jacksonville, Florida."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pb-16 pt-24 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="lg:col-span-7 xl:col-span-6 text-center lg:text-left pt-6"
            >
              <div className="flex items-center space-x-2 text-brand-gold mb-6 justify-center lg:justify-start">
                <div className="w-8 h-px bg-brand-gold"></div>
                <span className="text-xs font-bold uppercase tracking-widest flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  Orange Park, Florida
                </span>
              </div>
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl text-brand-blue font-serif font-bold mb-6 leading-[1.1]">
                Trusted <span className="text-brand-gold">Insurance</span> & <br className="hidden sm:block"/>
                Immigration Services
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-500 sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10">
                Protect your assets and secure your future in the United States with professional, localized guidance that puts your peace of mind first.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="inline-flex justify-center items-center bg-brand-gold text-white px-8 py-4 rounded font-bold shadow-lg shadow-brand-gold/20 hover:scale-105 transition-all duration-200">
                  Request Information
                </Link>
                <a href="tel:" className="inline-flex justify-center items-center border-2 border-slate-200 text-slate-800 px-8 py-4 rounded font-bold hover:bg-slate-50 transition-all duration-200">
                  Phone: [Enter Number]
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end hidden md:flex"
            >
              {/* Abstract professional imagery or trust layout since no specific image exists */}
              <div className="bg-white p-8 rounded shadow-2xl relative max-w-md w-full border border-slate-100 overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 opacity-50 rounded-full -mr-16 -mt-16"></div>
                 <h3 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 relative z-10">Our Commitments</h3>
                 <ul className="space-y-4 relative z-10">
                   <li className="flex items-start space-x-3">
                     <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center text-white text-[10px] mt-0.5">✓</div>
                     <div><span className="font-bold block text-sm text-slate-900">Legal Compliance</span><span className="text-xs text-slate-500">Official immigration documentation guidance.</span></div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center text-white text-[10px] mt-0.5">✓</div>
                     <div><span className="font-bold block text-sm text-slate-900">Personal Protection</span><span className="text-xs text-slate-500">Full-spectrum auto and home coverage plans.</span></div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center text-white text-[10px] mt-0.5">✓</div>
                     <div><span className="font-bold block text-sm text-slate-900">Local Expertise</span><span className="text-xs text-slate-500">Deep understanding of FL state regulations.</span></div>
                   </li>
                 </ul>
                 <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-slate-900 font-bold text-sm">4.9 / 5.0</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map(i => <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Verified Google Business Profile Ratings</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-brand-gold mb-2" />
              <span className="font-semibold text-brand-blue">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Building2 className="w-8 h-8 text-brand-gold mb-2" />
              <span className="font-semibold text-brand-blue">Local Office</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users className="w-8 h-8 text-brand-gold mb-2" />
              <span className="font-semibold text-brand-blue">Professional Staff</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Globe2 className="w-8 h-8 text-brand-gold mb-2" />
              <span className="font-semibold text-brand-blue">Immigration Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-blue mb-6">Comprehensive Financial & Legal Support</h3>
            <p className="text-slate-600 text-lg">We provide specialized services to protect your assets and formalize your stay in the United States.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Insurance Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-slate-200 rounded shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 text-brand-blue rounded flex items-center justify-center mb-6 border border-slate-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">Insurance Services</h4>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Comprehensive coverage options tailored to Florida residents. Protect what matters most with auto, home, commercial, and life insurance policies designed for your specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span> Auto Insurance
                </li>
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span> Home Insurance
                </li>
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span> Commercial & Business
                </li>
              </ul>
              <Link to="/insurance-services" className="text-slate-900 text-xs uppercase tracking-widest font-bold border-b-2 border-brand-gold pb-1 inline-flex items-center self-start hover:text-brand-gold transition-colors mt-auto">
                View All Insurance Services
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Immigration Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-slate-200 rounded shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 text-brand-gold rounded flex items-center justify-center mb-6 border border-slate-100">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">Immigration Services</h4>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Professional consulting to guide you through complex US immigration processes. From family-based petitions to visa assistance and documentation preparation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3"></span> Immigration Consultation
                </li>
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3"></span> Family-Based Immigration
                </li>
                <li className="flex items-center text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3"></span> Green Card & Visa Assistance
                </li>
              </ul>
              <Link to="/immigration-services" className="text-slate-900 text-xs uppercase tracking-widest font-bold border-b-2 border-brand-gold pb-1 inline-flex items-center self-start hover:text-brand-gold transition-colors mt-auto">
                View All Immigration Services
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Ready to Discuss Your Needs?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation at our Orange Park office or contact us virtually. We are ready to provide the dedicated service you deserve.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center rounded-md bg-brand-gold px-8 py-3.5 text-lg font-semibold text-white shadow-lg hover:bg-brand-gold-light transition-all duration-200">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
