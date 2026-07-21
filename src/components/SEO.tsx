import { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
}

export default function SEO({
  title = `${BUSINESS_INFO.name} | Genuine Pharmacy in Tekari, Bihar`,
  description = BUSINESS_INFO.tagline + `. Located near Devi Ashtan, Tekari. We offer genuine prescription medicines, baby care, medical equipment, surgical supplies, and easy WhatsApp ordering.`,
  keywords = 'pharmacy, medical store, Magadh Medical Hall, Tekari pharmacy, chemist Tekari, buy medicines Tekari, authentic medicines Bihar, surgical supplies, baby care Tekari, medical shop near Devi Ashtan, Mukesh Kumar pharmacy',
  path = ''
}: SEOProps) {
  
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to select or create meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Magadh Medical Hall');
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Set Open Graph (Facebook) Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', `https://magadh-medical-hall.example.com/${path}`);
    setMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    // Since we generated pharmacy_hero, we can point to a simulated relative path or the real host image
    setMetaTag('property', 'og:image', 'https://picsum.photos/seed/magadh/1200/630');

    // 4. Set Twitter Cards Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', 'https://picsum.photos/seed/magadh/1200/630');

    // 5. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://magadh-medical-hall.example.com/${path}`);

    // 6. JSON-LD Schemas
    const schemas = [
      // Local Business / Pharmacy Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Pharmacy',
        'name': BUSINESS_INFO.name,
        'alternateName': 'Magadh Medical Store',
        'description': description,
        'image': 'https://picsum.photos/seed/magadh/800/600',
        'telephone': BUSINESS_INFO.phone,
        'url': 'https://magadh-medical-hall.example.com',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'near Devi Ashtan, Main, Tekari',
          'addressLocality': 'Tekari, Gaya',
          'addressRegion': 'Bihar',
          'postalCode': '824236',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '24.9351',  // Tekari coordinates
          'longitude': '84.8329'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '08:00',
            'closes': '21:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': 'Sunday',
            'opens': '09:00',
            'closes': '14:00'
          }
        ],
        'sameAs': [
          'https://www.google.com/maps?cid=YOUR_CID'
        ]
      },
      // FAQ Schema
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': FAQS.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      },
      // Breadcrumb Schema
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://magadh-medical-hall.example.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Store',
            'item': `https://magadh-medical-hall.example.com/${path}`
          }
        ]
      }
    ];

    // Remove any existing schemas generated by this script to avoid duplication
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
    existingScripts.forEach(el => el.remove());

    // Inject new schemas
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-schema';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, path]);

  return null; // Side-effect only
}
