import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for Favor Insur & Immigration Services LLC." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="font-serif text-3xl font-bold text-brand-blue mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Favor Insur & Immigration Services LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fill out our contact forms</li>
            <li>Request an insurance quote</li>
            <li>Schedule an immigration consultation</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="mb-4">This information may include your name, email address, physical address, and details related to your insurance or immigration needs.</p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide the services you have requested</li>
            <li>Respond to your inquiries and communicate with you</li>
            <li>Process insurance quotes and immigration applications</li>
            <li>Improve our website and customer service</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">4. Data Protection</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-brand-blue mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
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
