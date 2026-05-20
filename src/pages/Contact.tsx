import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { MapPin, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'insurance',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'insurance', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact Favor Insur & Immigration Services LLC in Orange Park, Florida for professional consultations."
      />

      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">Contact Us</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We are ready to assist you. Reach out to schedule a consultation or ask a question.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-blue mb-8">Get in Touch</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Whether you need to secure a new insurance policy or begin your immigration journey, our team is here to provide exceptional service. Fill out the form or visit our office.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-brand-blue mb-1">Office Location</h3>
                  <p className="text-slate-600 leading-relaxed">
                    1845 Town Center Boulevard, Suite 205<br />
                    Orange Park, FL 32003<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-brand-blue mb-1">Email Address</h3>
                  <p className="text-slate-600">
                    <a href="mailto:contact@favorinsur.com" className="hover:text-brand-gold transition-colors">contact@favorinsur.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-brand-blue mb-1">Business Hours</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 h-64 bg-slate-100 relative">
              {/* Replace with actual Google Maps iframe in production */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                <MapPin className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-sm font-medium">Google Maps Embed Placeholder</span>
                <span className="text-xs text-slate-400 mt-1">1845 Town Center Blvd, Orange Park, FL</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
             {status === 'success' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-blue mb-2">Message Sent</h3>
                  <p className="text-slate-600">Thank you for contacting us. A member of our team will reach out to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
             ) : null}

            <h3 className="font-serif text-2xl font-bold text-brand-blue mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all bg-white"
                >
                  <option value="insurance">Insurance Services</option>
                  <option value="immigration">Immigration Services</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all resize-y"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-gold hover:bg-brand-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
