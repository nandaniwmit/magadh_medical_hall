import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Customers';
  description: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-1',
    src: '/src/assets/images/pharmacy_hero_1783752086142.jpg',
    alt: 'Magadh Medical Hall Store Front',
    category: 'Store Front',
    description: 'Our modern, air-conditioned retail pharmacy storefront located conveniently in Tekari, Bihar.'
  },
  {
    id: 'g-2',
    src: '/src/assets/images/inside_pharmacy_1783752101817.jpg',
    alt: 'Medicine Shelves & Cabinets',
    category: 'Medicine Shelves',
    description: 'Neatly organized glass cabinets stocked with temperature-controlled, authentic medicines.'
  },
  {
    id: 'g-3',
    src: 'https://picsum.photos/seed/ph_products/800/600',
    alt: 'Specialized Skincare & Baby Care',
    category: 'Products',
    description: 'Premium baby milk formula, moisturizers, sanitizers, and daily pediatric supplements.'
  },
  {
    id: 'g-4',
    src: 'https://picsum.photos/seed/ph_equipment/800/600',
    alt: 'Calibrated Medical Equipment',
    category: 'Medical Equipment',
    description: 'Digital blood pressure monitors, replacement glucometer strips, and clinical nebulizers.'
  },
  {
    id: 'g-5',
    src: 'https://picsum.photos/seed/ph_consult/800/600',
    alt: 'Pharmacist Counseling Customer',
    category: 'Customers',
    description: 'Our certified chemist Mr. Mukesh Kumar offering clear dosage guidelines and instructions.'
  },
  {
    id: 'g-6',
    src: 'https://picsum.photos/seed/ph_firstaid/800/600',
    alt: 'First Aid & Surgical Supplies',
    category: 'Products',
    description: 'Sterile surgical bandages, cotton rolls, adhesive tapes, and emergency home kits.'
  }
];

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<boolean>(false);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Products', 'Medical Equipment', 'Customers'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = (src: string) => {
    const idx = GALLERY_IMAGES.findIndex(img => img.src === src);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setZoomScale(false);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(false);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
      setZoomScale(false);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      setZoomScale(false);
    }
  };

  return (
    <div className="space-y-16 pb-16 transition-colors duration-300">
      
      {/* Gallery Header */}
      <section className="relative py-12 bg-gradient-to-br from-teal-500/10 via-transparent to-sky-500/10 dark:from-gray-900/40 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#0A8F6A] font-bold text-xs uppercase tracking-widest bg-[#0A8F6A]/10 px-3 py-1 rounded-full inline-flex items-center space-x-1">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Visual Tour</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Store Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get an inside look at our certified retail pharmacy facility near Devi Ashtan, Tekari, stocked with medical inventory.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-150 dark:border-gray-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-md shadow-teal-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-755'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => openLightbox(img.src)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-850 shadow-sm group cursor-zoom-in hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full inline-flex self-start mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-sm font-bold leading-snug">{img.alt}</h3>
                  <p className="text-[10px] text-gray-300 mt-1 line-clamp-2 leading-relaxed">{img.description}</p>
                </div>

                <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-4.5 w-4.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            No images found in this category.
          </div>
        )}
      </section>

      {/* Full Popup Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-gray-950/95 backdrop-blur-md p-4 sm:p-6 text-white"
          >
            
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between w-full">
              <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-400">
                Image {lightboxIndex + 1} of {GALLERY_IMAGES.length} &bull; {GALLERY_IMAGES[lightboxIndex].category}
              </span>
              
              <button 
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex items-center justify-center relative my-4">
              
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* High-Res Image Display */}
              <div 
                className="relative max-h-[70vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomScale(!zoomScale);
                }}
              >
                <img 
                  src={GALLERY_IMAGES[lightboxIndex].src} 
                  alt={GALLERY_IMAGES[lightboxIndex].alt}
                  className={`max-h-[70vh] max-w-full object-contain mx-auto transition-transform duration-300 cursor-zoom-in ${
                    zoomScale ? 'scale-125' : 'scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            </div>

            {/* Bottom Bar: Metadata */}
            <div className="mx-auto max-w-2xl text-center pb-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {GALLERY_IMAGES[lightboxIndex].alt}
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                {GALLERY_IMAGES[lightboxIndex].description}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
