import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Sun, Moon, Plus, Stethoscope } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'order', label: 'WhatsApp Order' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div 
            className="flex cursor-pointer items-center space-x-2" 
            onClick={() => handleNavClick('home')}
            id="brand-logo-container"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-[#0A8F6A]">
              <Stethoscope className="h-6 w-6" />
              <div className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#0A8F6A] text-white text-[10px] font-bold">
                <Plus className="h-3 w-3" />
              </div>
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-none">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[10px] font-medium text-gray-500 dark:text-gray-400">
                TEKARI, BIHAR
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-[#0A8F6A]/10 text-[#0A8F6A] dark:bg-[#0A8F6A]/20 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utilities & Mobile trigger */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Quick Action Call Buttons (Desktop Only) */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="header-call-btn"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <Phone className="h-4 w-4 text-[#0A8F6A]" />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Magadh%20Medical%20Hall%2C%20I%20want%20to%20inquire%20about%20medicines.`}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white text-sm font-medium shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-150 dark:border-gray-850 bg-white dark:bg-gray-950 p-4 space-y-2 shadow-xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-[#0A8F6A]/10 text-[#0A8F6A] dark:bg-[#0A8F6A]/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-gray-100 dark:border-gray-900 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="mobile-header-call-btn"
              className="flex items-center justify-center space-x-2 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Magadh%20Medical%20Hall%2C%20I%20want%20to%20order%20medicines.`}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-whatsapp-btn"
              className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#0A8F6A] text-white text-sm font-medium shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
