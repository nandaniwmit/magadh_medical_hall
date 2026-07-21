import { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, ArrowUp, ChevronRight, Home, ShieldAlert, Sparkles, Gift 
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderView from './components/WhatsAppOrderView';
import TermsModal from './components/TermsModal';
import SEO from './components/SEO';
import { BUSINESS_INFO } from './data';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const path = window.location.pathname;
    const segment = path.replace(/\/$/, "").split("/").pop();
    const validTabs = ['home', 'about', 'services', 'gallery', 'contact', 'order'];
    if (segment && validTabs.includes(segment.toLowerCase())) {
      return segment.toLowerCase();
    }
    return 'home';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('magadh_dark_mode');
    return saved === 'true';
  });
  
  // Terms modal state
  const [termsModalType, setTermsModalType] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);
  
  // Back to top visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // WMIT Analytics Global Tracker Hook
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Sync activeTab switches to browser history and dispatch popstate for tracking hook
  useEffect(() => {
    const currentPath = window.location.pathname;
    const expectedPath = activeTab === 'home' ? '/' : `/${activeTab}`;
    if (currentPath !== expectedPath) {
      window.history.pushState(null, '', expectedPath + window.location.search);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, [activeTab]);

  // Handle native popstate (Back/Forward buttons) to update activeTab state
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      const validTabs = ['home', 'about', 'services', 'gallery', 'contact', 'order'];
      if (segment && validTabs.includes(segment.toLowerCase())) {
        setActiveTab(segment.toLowerCase());
      } else {
        setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle Dark Mode Side Effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('magadh_dark_mode', String(darkMode));
  }, [darkMode]);

  // Monitor Scroll for Back To Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map Tab Names to human breadcrumbs
  const getBreadcrumbLabel = (tab: string) => {
    const map: Record<string, string> = {
      home: 'Home Store',
      about: 'About Our Story',
      services: 'Pharmacy Services',
      gallery: 'Store Gallery',
      contact: 'Contact Details',
      order: 'WhatsApp Order Form'
    };
    return map[tab] || 'Store';
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render core views based on active state
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView setActiveTab={setActiveTab} />;
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      case 'order':
        return <WhatsAppOrderView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-100 flex flex-col transition-colors duration-300 font-sans antialiased">
      
      {/* 1. Dynamic SEO Injections */}
      <SEO 
        title={
          activeTab === 'home' 
            ? `${BUSINESS_INFO.name} | Genuine Medicines & Pharmacy in Tekari`
            : `${getBreadcrumbLabel(activeTab)} | ${BUSINESS_INFO.name}`
        }
        path={activeTab}
      />

      {/* 2. Primary Header Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* 3. Global Promotional Ribbons (When on Sub-pages) */}
      {activeTab !== 'home' && (
        <div className="bg-gradient-to-r from-[#0A8F6A]/10 to-teal-500/10 dark:from-teal-950/20 dark:to-emerald-950/20 py-2 border-b border-[#0A8F6A]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2 text-xs font-semibold text-[#0A8F6A] dark:text-teal-400">
            <Gift className="h-4 w-4 shrink-0 animate-bounce" />
            <span>Upload prescription on our WhatsApp Form for immediate compounding estimates!</span>
          </div>
        </div>
      )}

      {/* 4. Responsive Breadcrumbs (Hidden on Home for ultra clean look) */}
      {activeTab !== 'home' && (
        <nav className="bg-gray-50 dark:bg-gray-900/40 border-b border-gray-150 dark:border-gray-850 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <button 
                  onClick={() => {
                    setActiveTab('home');
                    handleScrollToTop();
                  }}
                  className="hover:text-[#0A8F6A] transition-colors flex items-center space-x-1"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Home</span>
                </button>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="font-semibold text-gray-900 dark:text-white truncate">
                  {getBreadcrumbLabel(activeTab)}
                </span>
              </li>
            </ol>
          </div>
        </nav>
      )}

      {/* 5. Main Viewport Stage with AnimatePresence Page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 6. Legal / Privacy Policy dialog modulators */}
      <TermsModal 
        isOpen={termsModalType !== null}
        type={termsModalType}
        onClose={() => setTermsModalType(null)}
      />

      {/* 7. Footer Block */}
      <Footer 
        setActiveTab={setActiveTab} 
        openTermsModal={(type) => setTermsModalType(type)} 
      />

      {/* 8. Floating Action Widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Back To Top Action */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              id="back-to-top-btn"
              className="p-3.5 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 text-[#0A8F6A] shadow-xl border border-gray-150 dark:border-gray-700 transition-all cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-5 w-5 font-bold" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Now Dial trigger */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          id="floating-call-now"
          className="p-4 rounded-full bg-rose-550 hover:bg-rose-600 text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center animate-bounce duration-1000"
          title="Call Magadh Medical Hall"
          aria-label="Call Store"
        >
          <Phone className="h-5.5 w-5.5" />
        </a>

        {/* Floating WhatsApp Action Trigger */}
        <button
          onClick={() => {
            setActiveTab('order');
            handleScrollToTop();
          }}
          id="floating-whatsapp"
          className="p-4 rounded-full bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center"
          title="WhatsApp Quick Order Form"
          aria-label="WhatsApp Order Form"
        >
          <MessageCircle className="h-5.5 w-5.5" />
        </button>
      </div>

    </div>
  );
}
