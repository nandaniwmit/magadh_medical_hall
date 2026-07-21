import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, MapPinned } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 pb-16 transition-colors duration-300">
      
      {/* Contact Header */}
      <section className="relative py-12 bg-gradient-to-br from-teal-500/10 via-transparent to-sky-500/10 dark:from-gray-900/40 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#0A8F6A] font-bold text-xs uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full">
            Inquire &amp; Get Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Contact Our Store
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch with Mr. Mukesh Kumar for stock checks, drug substitutes, pricing questions, or nearby delivery options.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Business Information details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Store Address &amp; Info</h2>
              
              <div className="space-y-4">
                
                {/* Address Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-800 flex items-start space-x-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-teal-550/10 text-[#0A8F6A] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Retail Location</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Dalmiya new saree showroom, <br />
                      near Devi Ashtan, faij, Main Road, <br />
                      Tekari, Gaya, Bihar 824236
                    </p>
                  </div>
                </div>

                {/* Phone Numbers Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-800 flex items-start space-x-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-550/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Call &amp; Mobile Support</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Main Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-[#0A8F6A] hover:underline">+91 {BUSINESS_INFO.phone}</a>
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Emergency Mobile: +91 8434634920</p>
                  </div>
                </div>

                {/* WhatsApp Order Details Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-800 flex items-start space-x-3 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">WhatsApp Order Line</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Direct WhatsApp: <a 
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-[#0A8F6A] hover:underline"
                      >
                        +91 {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">Available 08:00 AM - 09:30 PM for prescription uploads.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-850 border border-gray-150 dark:border-gray-800 space-y-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center space-x-2">
                <Clock className="h-4.5 w-4.5 text-[#0A8F6A]" />
                <span>Working Hours Schedule</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Monday - Saturday</span>
                  <span className="font-bold text-gray-900 dark:text-white">08:00 AM - 09:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-rose-500 font-medium">Sunday</span>
                  <span className="font-bold text-rose-500">09:00 AM - 02:00 PM (Emergency only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Container with Glass Effect */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-150 dark:border-gray-800 shadow-xl relative overflow-hidden flex flex-col justify-center">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Send Quick Inquiry</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Submit your query, name, and phone. Our retail team will check the back shelf inventory and call you back immediately.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 08434634920"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="e.g. ramesh@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Your Inquiry Message *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Type the names of medicines, dosage strength, or health devices you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0A8F6A] hover:bg-[#0A8F6A]/95 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Verifying Stocks...</span>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Submit Inquiry Request</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10 animate-scale-up" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Mr. Mukesh Kumar has received your stock inquiry for Magadh Medical Hall. We will inspect our inventory shelves and call you back shortly at <strong>{formData.phone}</strong>.
                  </p>
                </div>

                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-750 text-gray-800 dark:text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Embedded Maps Details Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-gray-55/40 dark:bg-gray-850/20 border border-gray-150 dark:border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center space-x-3 col-span-2">
            <div className="p-3 bg-teal-50 dark:bg-teal-950/20 text-[#0A8F6A] rounded-xl">
              <MapPinned className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">Location Landmark</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Located immediately adjacent to the new Dalmiya saree showroom, right near the historical Devi Ashtan shrine. Very accessible by car, bike, or walk.
              </p>
            </div>
          </div>
          <div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 rounded-xl border border-gray-300 dark:border-gray-750 hover:bg-white dark:hover:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors"
            >
              Get GPS Navigation Link
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
