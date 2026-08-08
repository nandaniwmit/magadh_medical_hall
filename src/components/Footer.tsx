import { Stethoscope, Plus, Phone, Mail, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openTermsModal: (type: 'terms' | 'privacy' | 'disclaimer') => void;
}

export default function Footer({ setActiveTab, openTermsModal }: FooterProps) {
  
  const handleQuickLink = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 transition-colors duration-300">
      
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleQuickLink('home')}>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-[#0A8F6A]">
                <Stethoscope className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#0A8F6A] text-white text-[10px] font-bold">
                  <Plus className="h-3 w-3" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your neighborhood trust for certified 100% genuine medical prescriptions, orthopedic braces, pediatric care, and surgical supplies in Tekari, Gaya, Bihar.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Government Registered Chemist</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home Page', id: 'home' },
                { label: 'About Our Story', id: 'about' },
                { label: 'Pharmacy Services', id: 'services' },
                { label: 'Store Gallery', id: 'gallery' },
                { label: 'Contact Details', id: 'contact' },
                { label: 'Order via WhatsApp', id: 'order' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleQuickLink(link.id)}
                    className="hover:text-[#0A8F6A] transition-colors duration-150 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Working Hours & Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Working Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <Calendar className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-100">Monday - Saturday</p>
                  <p className="text-xs text-gray-400">08:00 AM - 09:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <Calendar className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-100">Sunday</p>
                  <p className="text-xs text-rose-300">09:00 AM - 02:00 PM (Emergency only)</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-xs text-gray-400 uppercase font-medium tracking-wider mb-1">Emergency Support</p>
              <a 
                href={`tel:${BUSINESS_INFO.emergencyPhone}`}
                className="text-base font-bold text-rose-400 hover:underline flex items-center space-x-1"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Location & Contact details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Location & Map</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  Dalmiya new saree showroom, near Devi Ashtan, Main, Tekari, Gaya, Bihar 824236
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#0A8F6A]" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#0A8F6A]">+91 {BUSINESS_INFO.phone}</a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: +91 {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Terms, conditions & medical disclaimer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <div className="text-center lg:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Developed by <script src="https://crm.webmakerit.com/api/serve_broadcast.php" defer></script>.</p>
            <p className="text-[11px] text-gray-600 max-w-2xl leading-relaxed">
              <strong>Medical Disclaimer:</strong> Information provided on this platform is strictly for informational and educational purposes only. It must not be substituted for medical advice, self-diagnosis, or clinical treatment from a certified medical practitioner. Always consult your healthcare provider before starting any medication course.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <button onClick={() => openTermsModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>&bull;</span>
            <button onClick={() => openTermsModal('terms')} className="hover:text-white transition-colors">Terms &amp; Conditions</button>
            <span>&bull;</span>
            <button onClick={() => openTermsModal('disclaimer')} className="hover:text-white transition-colors">Medical Disclaimer</button>
          </div>

        </div>
      </div>

    </footer>
  );
}
