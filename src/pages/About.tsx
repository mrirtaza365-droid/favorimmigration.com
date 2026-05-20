import { SEO } from '../components/SEO';
import { Building2, Target, Heart } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Favor Insur & Immigration Services, your trusted local partner for insurance and immigration needs in Orange Park, Florida."
      />

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">About Our Company</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Dedicated to protecting your family, business, and legal status in the United States.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-3">Our Story</h2>
              <h3 className="font-serif text-3xl font-bold text-brand-blue mb-6">Rooted in Orange Park, Serving Florida</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Favor Insur & Immigration Services LLC was founded with a singular purpose: to provide honest, professional, and accessible services to individuals, families, and businesses navigating the complex worlds of insurance and US immigration.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Located in the heart of Orange Park, FL, our office serves as a trusted resource center. We understand that whether you are trying to secure the right commercial policy for your new venture or filing complex immigration forms for a loved one, you need a partner who values accuracy, timeliness, and cultural empathy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <Target className="w-8 h-8 text-brand-blue mb-4" />
                <h4 className="font-serif text-xl font-bold text-brand-blue mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To deliver exceptional, tailored insurance and immigration solutions that empower our clients to build secure, prosperous lives in the United States.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <Heart className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="font-serif text-xl font-bold text-brand-blue mb-2">Our Values</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Integrity, transparency, and relentless advocacy. We treat every client's case and policy as if it were our own family's.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold/10 rounded-3xl transform rotate-3"></div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative border border-slate-100">
               <Building2 className="w-12 h-12 text-brand-blue mb-8" />
               <h3 className="font-serif text-2xl font-bold text-brand-blue mb-6">Why Choose a Local Agency?</h3>
               <ul className="space-y-6">
                 <li className="flex">
                   <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-sm mr-4 mt-1">1</span>
                   <div>
                     <h4 className="font-bold text-brand-blue">Personalized Attention</h4>
                     <p className="text-slate-600 text-sm mt-1">You aren't just an account number. We know our clients by name and understand their unique local contexts.</p>
                   </div>
                 </li>
                 <li className="flex">
                   <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-sm mr-4 mt-1">2</span>
                   <div>
                     <h4 className="font-bold text-brand-blue">Florida Market Expertise</h4>
                     <p className="text-slate-600 text-sm mt-1">Florida's property and auto insurance markets are complex. We navigate this landscape daily.</p>
                   </div>
                 </li>
                 <li className="flex">
                   <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-sm mr-4 mt-1">3</span>
                   <div>
                     <h4 className="font-bold text-brand-blue">End-to-End Formatting</h4>
                     <p className="text-slate-600 text-sm mt-1">From initial consultation to final paperwork submission, we sit with you to ensure accuracy.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
