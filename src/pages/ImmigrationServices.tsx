import { SEO } from '../components/SEO';
import { FileText, Users, Globe2, BookOpen, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ImmigrationServices() {
  const services = [
    {
      id: "consultation",
      title: "Immigration Consultation",
      icon: <BookOpen className="w-10 h-10 text-brand-blue" />,
      description: "Expert evaluation of your specific immigration case. We review your history, clarify your options, and provide a clear roadmap for your legal journey."
    },
    {
      id: "family",
      title: "Family-Based Immigration",
      icon: <Users className="w-10 h-10 text-brand-blue" />,
      description: "Reunite with your loved ones. We guide you through the process of petitioning for spouses, parents, children, and siblings to bring them to the United States."
    },
    {
      id: "visa",
      title: "Visa Assistance",
      icon: <Globe2 className="w-10 h-10 text-brand-blue" />,
      description: "Comprehensive support for various visa applications. Whether you need an employment visa, student visa, or tourist visa, we ensure accurate and timely submissions."
    },
    {
      id: "greencard",
      title: "Green Card Assistance",
      icon: <Scale className="w-10 h-10 text-brand-blue" />,
      description: "Navigate the path to permanent residency. We assist with adjustment of status, consular processing, and green card renewals."
    }
  ];

  return (
    <>
      <SEO 
        title="Immigration Services"
        description="Professional immigration consulting, family-based petitions, visa assistance, and green card guidance by Favor Insur & Immigration Services LLC."
      />

      <div className="bg-white border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FileText className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">Immigration Services</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Navigating US immigration law requires precision and expertise. We are here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-slate-600 text-lg leading-relaxed">
            The immigration process can be overwhelming, filled with complex forms and strict deadlines. Our team at Favor Insur & Immigration Services LLC provides careful, dedicated assistance to ensure your documentation is completed accurately, reducing the risk of costly delays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-brand-gold/10 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/contact" className="text-brand-blue font-semibold hover:text-brand-gold transition-colors inline-flex items-center">
                Schedule a Consultation
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl font-bold text-brand-blue mb-4">Documentation Guidance</h3>
          <p className="text-slate-600 max-w-4xl mx-auto mb-8">
            A single error on an immigration form can cause months of delays. We provide meticulous formatting, review, and assembly of your application packets to ensure they meet the strict standards required by USCIS before submission.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center rounded-md bg-brand-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-blue-light transition-all">
            Get Help With Your Forms
          </Link>
        </div>
      </div>
    </>
  );
}
