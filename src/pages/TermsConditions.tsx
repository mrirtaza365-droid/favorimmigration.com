import { SEO } from '../components/SEO';

export function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for Favor Insur & Immigration Services LLC." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="font-serif text-3xl font-bold text-brand-blue mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the website of Favor Insur & Immigration Services LLC, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">2. Services Representation</h2>
          <p className="mb-4">
            The information provided on this website is for general informational purposes only and does not constitute legal, financial, or professional advice. 
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Insurance:</strong> Any summaries of insurance provisions on this site are subject to the actual terms and conditions of the specific policy contracts. </li>
            <li><strong>Immigration:</strong> Information regarding immigration services should not be construed as legal advice. We provide documentation assistance and consulting services. For formal legal representation, consult with a qualified attorney.</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">3. No Client Relationship</h2>
          <p className="mb-4">
            Use of this website or submission of information via our contact forms does not create a client relationship between you and Favor Insur & Immigration Services LLC. A client relationship is only established upon signing a formal written agreement with our office.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The content, layout, design, data, databases and graphics on this website are protected by United States and international intellectual property laws and are owned by Favor Insur & Immigration Services LLC unless otherwise stated.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            Favor Insur & Immigration Services LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">6. Contact Information</h2>
          <p className="mb-4">
            For any questions regarding these Terms and Conditions, please contact us at:<br/><br/>
            <strong>Favor Insur & Immigration Services LLC</strong><br />
            1845 Town Center Boulevard, Suite 205<br />
            Orange Park, FL 32003<br />
            Email: contact@favorinsur.com
          </p>
        </div>
      </div>
    </>
  );
}
