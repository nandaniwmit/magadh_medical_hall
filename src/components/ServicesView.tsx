import { 
  ClipboardList, Pill, Dumbbell, Baby, Sparkles, Activity, Scissors, HeartPulse, Shield, MessageCircle, ArrowRight
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

// Service icon lookup helper
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, any> = {
    ClipboardList,
    Pill,
    Dumbbell,
    Baby,
    Sparkles,
    Activity,
    Scissors,
    HeartPulse,
    Shield
  };
  const IconComponent = map[name] || Pill;
  return <IconComponent className={className} />;
};

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
}

export default function ServicesView({ setActiveTab }: ServicesViewProps) {
  return (
    <div className="space-y-16 pb-16 transition-colors duration-300">
      
      {/* Services Header */}
      <section className="relative py-12 bg-gradient-to-br from-teal-500/10 via-transparent to-sky-500/10 dark:from-gray-900/40 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#0A8F6A] font-bold text-xs uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full">
            Comprehensive Medical Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Healthcare Services
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Providing reliable and professional pharmacy solutions, healthcare gear, orthopedic bands, and child care wellness options to Tekari.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id}
              className="p-8 rounded-3xl bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-750 hover:border-[#0A8F6A]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Custom Icon wrapper */}
                <div className="h-14 w-14 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                  <ServiceIcon name={srv.iconName} className="h-7 w-7" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-2 justify-between">
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Magadh%20Medical%20Hall%2C%20I%20want%20to%20order%20or%20inquire%20about%20your%20service%3A%20${encodeURIComponent(srv.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white text-xs font-semibold transition-all duration-150 inline-flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
                
                <button 
                  onClick={() => setActiveTab('order')}
                  className="w-full sm:w-auto text-center px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors"
                >
                  Order Medicines
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Compounding Banner */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden shadow-xl border border-gray-850">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[#0A8F6A]/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-teal-500/15 blur-3xl"></div>
          
          <div className="max-w-2xl mx-auto text-center space-y-6 relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need Specialized Medicines?</h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              If a medication is rare, critical, or hard to find in Tekari, we will trace it across our authorized network and coordinate its procurement for you. Simply leave a WhatsApp message or check with our pharmacist.
            </p>
            <div className="pt-2 flex justify-center">
              <button 
                onClick={() => setActiveTab('order')}
                className="px-6 py-3 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-semibold rounded-xl text-xs flex items-center space-x-2 shadow-lg hover:shadow-teal-500/10 transition-all cursor-pointer"
              >
                <span>Upload Prescription Order</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
