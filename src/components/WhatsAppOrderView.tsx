import React, { useState, useRef } from 'react';
import { 
  MessageCircle, Phone, FileSpreadsheet, Upload, CheckCircle2, AlertCircle, FileText, Trash2 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { WhatsAppOrder } from '../types';

export default function WhatsAppOrderView() {
  const [formData, setFormData] = useState<WhatsAppOrder>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    hasPrescription: false,
    message: '',
    preferredDeliveryTime: 'Anytime (08:00 AM - 09:30 PM)'
  });

  // Prescription file upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Drag handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      setFormData(prev => ({ ...prev, hasPrescription: true }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFormData(prev => ({ ...prev, hasPrescription: true }));
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData(prev => ({ ...prev, hasPrescription: false }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineName) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    // Build pre-formatted text block
    const text = `Hello Magadh Medical Hall,

*NEW MEDICINE ORDER DETAILS*
----------------------------------------
*Customer Name:* ${formData.customerName}
*Phone Number:* ${formData.mobileNumber}
*Email:* ${formData.email || 'N/A'}
*Medicine Required:* ${formData.medicineName}
*Delivery Address:* ${formData.address || 'In-store Pickup'}
*Prescription Attached:* ${formData.hasPrescription ? 'Yes (Uploaded in Form)' : 'No'}
*Preferred Time:* ${formData.preferredDeliveryTime}
*Additional Message:* ${formData.message || 'N/A'}
----------------------------------------
Please check availability and confirm the total bill. Thank you!`;

    // Encode text and open API URL
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16 pb-16 transition-colors duration-300">
      
      {/* Header section */}
      <section className="relative py-12 bg-gradient-to-br from-teal-500/10 via-transparent to-sky-500/10 dark:from-gray-900/40 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#0A8F6A] font-bold text-xs uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full">
            Fast Digital Pharmacy Ordering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Order via WhatsApp
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Fill out your requirements, attach your clinical prescription slip, and send directly to Mr. Mukesh Kumar on WhatsApp for compounding.
          </p>
        </div>
      </section>

      {/* Main Order Form Block */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-150 dark:border-gray-800 shadow-xl space-y-8">
          
          <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-800 dark:text-amber-400 text-xs sm:text-sm flex items-start space-x-2.5">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
            <div>
              <p className="font-semibold">Prescription Policy Notice</p>
              <p className="text-gray-600 dark:text-gray-400 mt-0.5">
                Government regulations require a valid doctor's prescription for Scheduled H &amp; G drugs (such as specialized antibiotics and diabetic injectables). Please ensure you upload a clear image of your slip below.
              </p>
            </div>
          </div>

          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            
            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Customer Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Mobile Number (WhatsApp Enabled) *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 08434634920"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                />
              </div>

            </div>

            {/* Email & Delivery Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Email Address (Optional)</label>
                <input 
                  type="email" 
                  placeholder="e.g. ramesh@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Preferred Delivery/Pickup Time</label>
                <select
                  value={formData.preferredDeliveryTime}
                  onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50 font-medium"
                >
                  <option>Anytime (08:00 AM - 09:30 PM)</option>
                  <option>Morning (08:00 AM - 12:00 PM)</option>
                  <option>Afternoon (12:00 PM - 04:00 PM)</option>
                  <option>Evening (04:00 PM - 09:30 PM)</option>
                </select>
              </div>

            </div>

            {/* Address Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Delivery Address (Leave empty for In-store Pickup)</label>
              <input 
                type="text" 
                placeholder="e.g. near Devi Ashtan, Tekari, Gaya, Bihar (PIN: 824236)"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
              />
            </div>

            {/* Medicine requirements input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Medicine Required &amp; Quantity *</label>
              <textarea 
                rows={3}
                required
                placeholder="e.g. Paracetamol 650mg (2 strips), Amoxicillin 500mg (1 strip), BP monitor device (1)"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
              ></textarea>
            </div>

            {/* Drag and Drop File Upload Section */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Upload Prescription Slip</label>
              
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                  isDragActive 
                    ? 'border-[#0A8F6A] bg-[#0A8F6A]/5' 
                    : 'border-gray-250 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30 hover:border-[#0A8F6A]/50'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden" 
                  accept="image/*,.pdf"
                />

                {!selectedFile ? (
                  <div className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-teal-50 dark:bg-teal-950 text-[#0A8F6A] flex items-center justify-center mx-auto">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-gray-800 dark:text-white">Drag and drop prescription image here</p>
                      <p className="text-gray-400 mt-0.5">or click to browse local folders (Supports JPG, PNG, PDF)</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-150 dark:border-gray-700">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] rounded-lg">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="truncate max-w-[200px] sm:max-w-xs">
                        <p className="text-xs font-bold text-gray-800 dark:text-white truncate">{selectedFile.name}</p>
                        <p className="text-[10px] text-gray-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-rose-500 transition-colors"
                      aria-label="Remove prescription file"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Message / Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Additional Instructions (Optional)</label>
              <textarea 
                rows={2}
                placeholder="e.g. Call before coming, arrange generic substitute if possible, pack in sealed cover..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/50"
              ></textarea>
            </div>

            {/* Action buttons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                type="submit"
                className="w-full bg-[#0A8F6A] hover:bg-[#0A8F6A]/95 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Send Order via WhatsApp</span>
              </button>
              
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850 text-gray-800 dark:text-white font-bold py-4 px-6 rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5 text-[#0A8F6A]" />
                <span>Call Store to Verify: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </form>

        </div>
      </section>

    </div>
  );
}
