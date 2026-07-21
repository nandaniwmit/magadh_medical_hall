import { ShieldCheck, Target, Heart, Eye, Award, Calendar, Quote, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_EVENTS, OUR_VALUES } from '../data';

export default function AboutView() {
  return (
    <div className="space-y-20 pb-16 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="relative py-12 bg-gradient-to-br from-teal-500/10 via-transparent to-sky-500/10 dark:from-gray-900/40 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#0A8F6A] font-bold text-xs uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full">
            Our Legacy of Trust
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About {BUSINESS_INFO.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Serving Gaya district and the Tekari neighborhood with authenticated medicines, surgical tools, and compassionate healthcare solutions for over two decades.
          </p>
        </div>
      </section>

      {/* Story & Store Photos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Photos with decorative borders */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#0A8F6A] to-blue-500 opacity-20 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl group">
              <img 
                src="/src/assets/images/inside_pharmacy_1783752101817.jpg" 
                alt="Inside Magadh Medical Hall" 
                className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-semibold">
                Store Interior &amp; Medicine Shelves
              </div>
            </div>
          </div>

          {/* Right Column: Business Story */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Business Story</h2>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
              <p>
                Founded in the historic town of Tekari with a core mission to bridge the gap in authentic pharmaceutical access, 
                <strong> {BUSINESS_INFO.name}</strong> has evolved into a cornerstone of the local healthcare community. 
                Our founder recognized that finding dependable, batch-verified drugs was a challenge for local citizens.
              </p>
              <p>
                Today, located conveniently near the landmark <strong>Devi Ashtan</strong>, we maintain a highly sterilized, temperature-controlled facility to preserve clinical potency. 
                Whether you need everyday OTC pain relief, life-saving cardiovascular drugs, insulin formulas, surgical dressings, or high-purity medical devices, we guarantee authenticity.
              </p>
              <p>
                We blend the trust of neighborhood family pharmacies with modern digital efficiency. With our instant WhatsApp catalog and prescription pre-compounding system, we save precious hours for local families in Gaya.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 pt-2">
              <div>
                <span className="block text-2xl font-bold text-[#0A8F6A]">25+ Years</span>
                <span className="block text-[11px] text-gray-500 uppercase tracking-wider font-medium">In Healthcare Service</span>
              </div>
              <div className="h-8 w-px bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <span className="block text-2xl font-bold text-[#0A8F6A]">10,000+</span>
                <span className="block text-[11px] text-gray-500 uppercase tracking-wider font-medium">Happy Local Clients</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 space-y-4 shadow-xs text-center md:text-left">
            <div className="p-3 rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] inline-flex">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              To dispense zero-defect, certified genuine pharmaceutical formulations with complete transparency, maintaining reasonable pricing for the Tekari community.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 space-y-4 shadow-xs text-center md:text-left">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 inline-flex">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              To create an integrated, digital-first rural health desk model in Gaya, ensuring that no patient has to delay clinical therapies due to drug non-availability.
            </p>
          </div>

          {/* Value Motto */}
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 space-y-4 shadow-xs text-center md:text-left">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 inline-flex">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Values</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Compassionate clinical empathy, continuous quality auditing, customer data privacy, and a deep sense of social responsibility for Tekari.
            </p>
          </div>

        </div>
      </section>

      {/* Business Core Ethics Icons */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Why Local Customers Trust Us</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Our medical practice is built upon fundamental ethical standards.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUR_VALUES.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 text-center space-y-3">
              <div className="h-12 w-12 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-[#0A8F6A] flex items-center justify-center mx-auto">
                {val.title === '100% Authenticity' && <ShieldCheck className="h-6 w-6" />}
                {val.title === 'Affordable Pricing' && <Award className="h-6 w-6" />}
                {val.title === 'Compassionate Care' && <Heart className="h-6 w-6" />}
                {val.title === 'Rapid Service' && <ThumbsUp className="h-6 w-6" />}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{val.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chronicle Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Journey Roadmap</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Tracing our milestones of healthcare service over the years.</p>
        </div>

        <div className="relative border-l-2 border-gray-150 dark:border-gray-800 pl-6 ml-4 sm:ml-8 space-y-10">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative">
              {/* Bullet icon */}
              <span className="absolute -left-10 top-1.5 h-6 w-6 flex items-center justify-center rounded-full bg-[#0A8F6A] text-white">
                <Calendar className="h-3 w-3" />
              </span>
              <span className="block text-sm font-bold text-[#0A8F6A] font-mono leading-none">{event.year}</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-2">{event.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-2xl leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Message Block */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-[#0A8F6A]/5 dark:bg-gray-850 border border-[#0A8F6A]/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          
          {/* Avatar / Photo Placeholder */}
          <div className="relative shrink-0">
            <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 p-1">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center font-bold text-gray-900 dark:text-white text-3xl font-mono">
                MK
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 bg-[#0A8F6A] text-white rounded-full">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          {/* Message content */}
          <div className="space-y-4">
            <Quote className="h-8 w-8 text-[#0A8F6A] opacity-45" />
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
              "We understand that behind every prescription slip, there is a patient in distress or a family concerned for their loved one. 
              Our work at Magadh Medical Hall is centered purely around safety, authenticity, and clinical trust. We continuously inspect our supply chains 
              and educate ourselves on newer healthcare needs so we can guide you accurately."
            </p>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">{BUSINESS_INFO.ownerName}</h4>
              <p className="text-[11px] text-[#0A8F6A] uppercase font-semibold tracking-wider">Proprietor, Magadh Medical Hall</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
