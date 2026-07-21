import { X } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface TermsModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'disclaimer' | null;
  onClose: () => void;
}

export default function TermsModal({ isOpen, type, onClose }: TermsModalProps) {
  if (!isOpen || !type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            At <strong>{BUSINESS_INFO.name}</strong>, accessible from our online digital catalog, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">1. Information We Collect</h4>
          <p>
            When you use our WhatsApp Order form or Contact forms, we request personal data including your Name, Mobile/WhatsApp Number, Email Address, and clinical prescription slips. This data is handled in strict compliance with healthcare confidentiality guidelines.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">2. Prescription Security</h4>
          <p>
            Any diagnostic records or medical prescriptions you upload are used solely to verify stock availability and compound drugs accurately. We never distribute, sell, or index your prescriptions in public directories.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">3. Third-party Links</h4>
          <p>
            Our website opens external connections to the official WhatsApp Business API to dispatch pre-formatted orders. We do not have control over WhatsApp’s native encrypted communication networks.
          </p>
          <p className="text-[10px] text-gray-400 mt-6">
            Last Updated: July 2026. For privacy concerns, reach out to Mr. Mukesh Kumar at {BUSINESS_INFO.phone}.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Welcome to the online health catalog of <strong>{BUSINESS_INFO.name}</strong>. By accessing this store catalog and using our online forms, you agree to comply with and be bound by the following Terms &amp; Conditions.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">1. Prescription Mandatory Disclaimer</h4>
          <p>
            We strictly do not dispense Scheduled H, H1, or G drugs without verifying a clear, valid prescription slip from a registered medical practitioner. The final sale is executed at our physical counter in Tekari, Gaya, after physical inspection.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">2. Pricing &amp; Invoice Estimates</h4>
          <p>
            All prices listed on our search box are indicative estimates and subject to brand batch fluctuations. The final pricing is briefed on your retail invoice calculated during fulfillment.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">3. Drug Substitutes</h4>
          <p>
            If a brand is unavailable, our licensed pharmacist may suggest therapeutic bio-equivalent substitutes containing the identical chemical compound and dosage strength, subject to your approval.
          </p>
        </div>
      )
    },
    disclaimer: {
      title: 'Medical Disclaimer',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <p className="font-bold text-rose-500">
            IMPORTANT WARNING: READ CAREFULLY BEFORE INGESTING MEDICINES.
          </p>
          <p>
            The chemical descriptions, usage guides, and health tips displayed on <strong>{BUSINESS_INFO.name}</strong> are strictly for general educational purposes. They are not intended as substitutes for professional clinical diagnoses, medical recipes, or hospital treatment.
          </p>
          <p>
            Never disregard professional medical advice or delay seeking therapeutic consultation because of something you have read on this website.
          </p>
          <h4 className="font-bold text-gray-900 dark:text-white mt-4 uppercase">Self-Medication Danger</h4>
          <p>
            Self-medicating with clinical antibiotics or hormonal injectables can be highly toxic and life-threatening. Always seek advice from your cardiologist, pediatrician, or general practitioner.
          </p>
        </div>
      )
    }
  };

  const modalData = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-150 dark:border-gray-800">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
            {modalData.title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {modalData.content}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 text-right">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#0A8F6A]/95 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
}
