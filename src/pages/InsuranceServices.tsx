import { SEO } from '../components/SEO';
import { ShieldCheck, Car, Home as HomeIcon, Briefcase, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export function InsuranceServices() {
  const services = [
    {
      id: "auto",
      title: "Auto Insurance",
      icon: <Car className="w-10 h-10 text-brand-gold" />,
      description: "Comprehensive coverage for your vehicles. Protect yourself against liabilities, accidents, and uninsured motorists in Florida with policies tailored to your budget."
    },
    {
      id: "home",
      title: "Home Insurance",
      icon: <HomeIcon className="w-10 h-10 text-brand-gold" />,
      description: "Safeguard your most valuable asset. Our property insurance options cover structural damage, personal belongings, and liability, giving you peace of mind during Florida's unpredictable weather."
    },
    {
      id: "commercial",
      title: "Commercial & Business Insurance",
      icon: <Briefcase className="w-10 h-10 text-brand-gold" />,
      description: "Protect your enterprise from unforeseen risks. We offer general liability, workers' compensation, and commercial property insurance for local businesses."
    },
    {
      id: "life",
      title: "Life Insurance",
      icon: <HeartPulse className="w-10 h-10 text-brand-gold" />,
      description: "Ensure your family's financial stability. We help you choose the right term or whole life policies to provide for your loved ones' future."
    }
  ];

  return (
    <>
      <SEO 
        title="Insurance Services"
        description="Comprehensive insurance policies including Auto, Home, Commercial, and Life insurance provided by Favor Insur in Orange Park, FL."
      />

      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">Insurance Solutions</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Reliable, competitive, and comprehensive coverage tailored to protect what matters most to Florida residents.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-brand-blue/5 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/contact" className="text-brand-blue font-semibold hover:text-brand-gold transition-colors inline-flex items-center">
                Request a Quote
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
