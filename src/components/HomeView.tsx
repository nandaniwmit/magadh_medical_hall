import React, { useState } from 'react';
import { 
  Phone, MessageCircle, MapPin, Search, CheckCircle2, ChevronDown, 
  ChevronUp, HeartPulse, Award, ShieldCheck, Zap, HelpCircle, Star,
  Pill, Layers, Droplet, Syringe, Activity, Dumbbell, ShieldAlert, Sparkles, Baby, HeartHandshake, Thermometer,
  ArrowRight, Sparkle, Percent, BellRing
} from 'lucide-react';
import { 
  BUSINESS_INFO, MEDICINES, CATEGORIES, SERVICES, TESTIMONIALS, FAQS, HEALTH_TIPS, OUR_VALUES 
} from '../data';
import { motion } from 'motion/react';

// Icon Helper Mapper to prevent rendering issues
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, any> = {
    Pill, Layers, Droplet, Syringe, Activity, Dumbbell, ShieldAlert, Sparkles, Baby, ShieldCheck, HeartHandshake, Thermometer,
    Award, Zap, HeartPulse, Star
  };
  const IconComponent = map[name] || Pill;
  return <IconComponent className={className} />;
};

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedCategoryFilter?: (cat: string) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  // Medicine search states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Inquiry modal / state
  const [inquiryMed, setInquiryMed] = useState<string>('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Filter medicines
  const filteredMedicines = MEDICINES.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          med.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Unique categories for filtering
  const filterCategories = ['All', ...Array.from(new Set(MEDICINES.map(m => m.category)))];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryMed) return;
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryMed('');
    }, 4000);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location)}`;
  };

  return (
    <div className="space-y-20 pb-12 transition-colors duration-300">
      
      {/* 1. Emergency Banner Alert */}
      <div id="emergency-banner" className="bg-rose-550 dark:bg-rose-700 text-white text-sm py-3 px-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2 font-semibold">
            <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping"></span>
            <span className="uppercase tracking-wider text-[11px] bg-rose-800/50 px-2 py-0.5 rounded">Emergency Contact</span>
            <span>Need life-saving medicines urgently near Tekari?</span>
          </div>
          <a 
            href={`tel:${BUSINESS_INFO.emergencyPhone}`} 
            className="inline-flex items-center space-x-1 font-bold hover:underline bg-white/10 px-3 py-1 rounded border border-white/20"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now: +91 {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-[#0A8F6A]/5 via-white to-sky-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-550/10 text-[#0A8F6A] dark:bg-emerald-500/10 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkle className="h-4.5 w-4.5" />
                <span>Verified Chemist &amp; Pharmacy in Gaya</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                {BUSINESS_INFO.name} <br />
                <span className="text-[#0A8F6A] font-medium text-3xl sm:text-4xl lg:text-5xl">Your Trusted Pharmacy in Tekari</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing 100% genuine medicines, reliable medical devices, surgical supplies, specialized baby care, skin care, and health supplements at reasonable prices.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-2">
                {['Genuine Medicines', 'Local Store Pickup', 'WhatsApp Support'].map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-xs border border-gray-150 dark:border-gray-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0A8F6A] shrink-0" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  id="hero-call-now"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#0A8F6A] hover:bg-[#0A8F6A]/95 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all text-base"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: 08434634920</span>
                </a>
                <button 
                  id="hero-whatsapp-order"
                  onClick={() => setActiveTab('order')}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-800 dark:text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all text-base"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-500" />
                  <span>Order via WhatsApp</span>
                </button>
                <a 
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-get-directions"
                  className="w-full sm:w-auto flex items-center justify-center space-x-1 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline py-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Image frame / Glass card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/src/assets/images/pharmacy_hero_1783752086142.jpg" 
                  alt="Magadh Medical Hall storefront"
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Embedded Glassmorphism Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-teal-500/15 text-[#0A8F6A]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-950 dark:text-white">Our Location</p>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
                        Dalmiya showroom, near Devi Ashtan, Tekari, Gaya, Bihar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Special Offers Banner */}
      <section id="offers-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-650 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
          <div className="absolute top-2 left-1/3 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-2xl border border-white/25">
                <Percent className="h-8 w-8 text-yellow-300 animate-bounce" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest bg-yellow-400 text-gray-900 px-2 py-0.5 rounded">Summer Health Offer</span>
                <h3 className="text-2xl font-bold mt-1">Get arrangements on prescription chronic medicines!</h3>
                <p className="text-sm text-teal-100 mt-0.5">Save on daily health devices, BP monitors, and nutrition supplements in Tekari.</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('order')}
              className="px-6 py-3 bg-white text-[#0A8F6A] hover:bg-teal-50 rounded-xl font-bold transition-transform shadow-md hover:scale-[1.02] cursor-pointer"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* 4. Interactive Medicine Search & Availability Lookup */}
      <section id="medicine-search-catalog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-800 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Medicine Inventory Search</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Instantly check the availability of common therapeutic drugs, multivitamin formulations, baby items, and medical devices in our store.
            </p>
          </div>

          {/* Search Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search Paracetamol, Insulin, BP monitor, Baby items..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 font-medium"
            >
              {filterCategories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Search Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedicines.slice(0, 6).map((med) => (
              <div 
                key={med.id} 
                className="p-5 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-150 dark:border-gray-800 hover:border-[#0A8F6A]/30 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0A8F6A]/10 text-[#0A8F6A] dark:bg-[#0A8F6A]/20">
                      {med.category}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      med.availability === 'In Stock'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : med.availability === 'Prescription Required'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400'
                    }`}>
                      {med.availability}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mt-3">{med.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{med.description}</p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-850 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500 uppercase">{med.form} Formulation</span>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Magadh%20Medical%20Hall%2C%20I%20want%20to%20inquire%20about%20the%20medicine%3A%20${encodeURIComponent(med.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0A8F6A] hover:underline flex items-center space-x-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>Inquire Stocks</span>
                  </a>
                </div>
              </div>
            ))}

            {filteredMedicines.length === 0 && (
              <div className="col-span-full py-12 text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-950 dark:text-white">Medicine Brand Not Listed?</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mt-1">
                    Don't worry! We stock over 2000+ brands. You can directly request Mr. Mukesh Kumar to arrange it for you.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('order')}
                  className="px-4 py-2 bg-[#0A8F6A] text-white text-xs font-semibold rounded-lg hover:bg-[#0A8F6A]/90 transition-all"
                >
                  Request Medicine Arranged
                </button>
              </div>
            )}
          </div>

          {filteredMedicines.length > 6 && (
            <div className="text-center pt-2">
              <button 
                onClick={() => setActiveTab('services')}
                className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center space-x-1"
              >
                <span>Browse our complete healthcare categories</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section id="why-choose-us" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Why Choose Magadh Medical Hall?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Dedicated to promoting wellness and safe medicine dispensing practices in Gaya district.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '100% Genuine Medicines', desc: 'No counterfeit concerns. Every pill is direct from certified distributors.', icon: 'ShieldCheck', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' },
            { title: 'Experienced Pharmacy', desc: 'Managed by licensed chemists who advise correct schedules & alternates.', icon: 'Award', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/20' },
            { title: 'Affordable Prices', desc: 'Community first approach. Real rates on all cardiac, gastro & diabetes meds.', icon: 'Percent', color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/20' },
            { title: 'Fast WhatsApp Support', desc: 'Simply snap your slip & send. We review, compound and notify instantly.', icon: 'MessageCircle', color: 'text-[#0A8F6A] bg-[#0A8F6A]/10' },
            { title: 'Pediatric & Baby Care', desc: 'Top infant baby formula milk, gentle skin creams, baby hygiene lines.', icon: 'Baby', color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/20' },
            { title: 'Healthcare Products', desc: 'Calibrated digital monitoring devices, knee wraps, ortho supports.', icon: 'Activity', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/20' },
            { title: 'Trusted Local Pharmacy', desc: 'Located conveniently right near Tekari\'s Devi Ashtan junction.', icon: 'HeartPulse', color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/20' },
            { title: 'Home Delivery Nearby', desc: 'Delivering urgent drugs directly to elderly & nearby patients.', icon: 'Zap', color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20' }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className={`p-3 rounded-xl inline-flex mb-4 ${item.color}`}>
                {item.icon === 'ShieldCheck' && <ShieldCheck className="h-6 w-6" />}
                {item.icon === 'Award' && <Award className="h-6 w-6" />}
                {item.icon === 'Percent' && <Percent className="h-6 w-6" />}
                {item.icon === 'MessageCircle' && <MessageCircle className="h-6 w-6" />}
                {item.icon === 'Baby' && <Baby className="h-6 w-6" />}
                {item.icon === 'Activity' && <Activity className="h-6 w-6" />}
                {item.icon === 'HeartPulse' && <HeartPulse className="h-6 w-6" />}
                {item.icon === 'Zap' && <Zap className="h-6 w-6" />}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Categories */}
      <section id="featured-categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Product Categories</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Neatly categorized medicinal inventory for quick navigation.</p>
          </div>
          <button 
            onClick={() => setActiveTab('services')}
            className="px-4 py-2 text-sm font-semibold bg-[#0A8F6A]/10 text-[#0A8F6A] rounded-xl hover:bg-[#0A8F6A]/15 transition-colors"
          >
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => {
                setSelectedCategory(cat.name);
                const el = document.getElementById('medicine-search-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-700/60 text-center hover:border-[#0A8F6A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="h-12 w-12 rounded-xl bg-gray-50 dark:bg-gray-800 text-[#0A8F6A] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                <IconMapper name={cat.iconName} className="h-6 w-6" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#0A8F6A] transition-colors">{cat.name}</h3>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Working Process (4 steps) */}
      <section id="working-process" className="bg-gray-50/75 dark:bg-gray-900/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">How To Order Medicines</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Save time! Experience our swift and systematic medication dispensing process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Visit Store or Upload', desc: 'Walk in directly near Devi Ashtan, or upload your prescription via our online order form.' },
              { step: '02', title: 'Pharmacist Review', desc: 'Mr. Mukesh Kumar reviews the prescription, checks chemical compounds & drug expiry dates.' },
              { step: '03', title: 'Safe Compounding', desc: 'We systematically pick and bundle your medicines in hygienic medical bags.' },
              { step: '04', title: 'Easy UPI Pay & Pickup', desc: 'Pay safely using PhonePe, Google Pay, Card, or Cash and receive proper drug briefing.' }
            ].map((proc, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 shadow-xs text-center group">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-[#0A8F6A] text-white text-sm font-black font-mono">
                  {proc.step}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-4 mb-2">{proc.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Health Awareness Blog Preview & Tips */}
      <section id="health-tips-preview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1 bg-teal-100 text-[#0A8F6A] dark:bg-teal-950/40 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
            <BellRing className="h-3.5 w-3.5" />
            <span>Health &amp; Wellness Awareness</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Latest Health &amp; Drug Tips</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Important instructions from your professional local pharmacist.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HEALTH_TIPS.map((tip) => (
            <div 
              key={tip.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-750 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">
                    {tip.category}
                  </span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{tip.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tip.content}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                <span>Published: {tip.date}</span>
                <span className="font-medium text-[#0A8F6A]">Magadh Medical Hall Edu</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Testimonials (Customer Reviews Slider / Grid) */}
      <section id="testimonials-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">What Customers Say</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Read verified Google reviews from our local community in Tekari.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{test.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">{test.name}</h4>
                  <p className="text-[10px] text-[#0A8F6A]">{test.role}</p>
                </div>
                <span className="text-[10px] font-mono text-gray-400">{test.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <section id="faq-section" className="mx-auto max-w-4xl px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Clear answers to common questions about drugs, availability, and ordering.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id}
                className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-850 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-[#0A8F6A]" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Custom Interactive Map & Local Coordinates */}
      <section id="google-map-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Find Us in Tekari</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Conveniently located near Devi Ashtan, faij, Main, Tekari, Bihar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Frame */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-850 h-[380px] relative shadow-lg">
            {/* Real embedded maps placeholder using safe iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1189495123473!2d84.829107!3d24.935123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd6b7ffffff81%3A0x63d0fc0abc000000!2sTekari%2C%20Bihar%20824236!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Magadh Medical Hall Location Map"
              id="google-maps-iframe"
            ></iframe>
          </div>

          {/* Map Details Cards */}
          <div className="lg:col-span-4 bg-[#0A8F6A]/5 dark:bg-gray-850 rounded-2xl p-6 border border-[#0A8F6A]/10 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#0A8F6A]" />
                <span>Store Address</span>
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Dalmiya new saree showroom, <br />
                near Devi Ashtan, faij, <br />
                Main Road, Tekari, Gaya, <br />
                Bihar, PIN: 824236
              </p>

              <div className="pt-4 border-t border-gray-250 dark:border-gray-800 space-y-2">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase">Nearby Delivery Areas</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Main Bazaar Tekari, Devi Ashtan area, Tekari Fort road, Faij chowk, and local Gaya rural addresses.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-[#0A8F6A] hover:bg-[#0A8F6A]/95 text-white font-bold py-3 px-4 rounded-xl text-xs shadow transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA Block */}
      <section id="contact-cta" className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gray-900 dark:bg-gray-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-gray-850">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[#0A8F6A]/15 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>
          
          <div className="max-w-2xl mx-auto space-y-6 relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need Urgent Medicines or Devices?</h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Mr. Mukesh Kumar is online. Just snap a picture of your prescription slip and let us do the rest! Get pricing, stock availability, and advice immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-rose-550 hover:bg-rose-600 rounded-xl font-bold text-white shadow-lg transition-colors"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Call: +91 {BUSINESS_INFO.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Magadh%20Medical%20Hall%2C%20I%20want%20to%20order%20medicines.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-bold text-white shadow-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Instant Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
