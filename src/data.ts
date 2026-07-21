import { Medicine, Testimonial, FAQItem, HealthTip, ServiceItem, CategoryItem } from './types';

export const BUSINESS_INFO = {
  name: 'Magadh Medical Hall',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy | Medical Store',
  location: 'Dalmiya new saree show room, near Devi Ashtan, faij, Main, Tekari, Bihar 824236',
  phone: '08434634920',
  phoneDisplay: '8434634920',
  whatsapp: '918434634920', // Country code + number without plus
  ownerName: 'Mukesh Kumar',
  workingHours: [
    { day: 'Monday - Saturday', time: '08:00 AM - 09:30 PM' },
    { day: 'Sunday', time: '09:00 AM - 02:00 PM (Emergency Only)' }
  ],
  emergencyPhone: '08434634920',
  primaryColor: '#0A8F6A',
};

export const MEDICINES: Medicine[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650mg',
    category: 'Tablets',
    description: 'Effective pain reliever and fever reducer. Used for mild to moderate pain relief and reducing temperature.',
    availability: 'In Stock',
    form: 'Tablet'
  },
  {
    id: 'med-2',
    name: 'Amoxicillin 500mg',
    category: 'Capsules',
    description: 'Broad-spectrum penicillin antibiotic used to treat bacterial infections of the ears, nose, throat, urinary tract, and skin.',
    availability: 'Prescription Required',
    form: 'Capsule'
  },
  {
    id: 'med-3',
    name: 'Cough & Cold Relief Syrup',
    category: 'Syrups',
    description: 'Soothes dry and chesty coughs, relieves nasal congestion and eases breathing.',
    availability: 'In Stock',
    form: 'Syrup'
  },
  {
    id: 'med-4',
    name: 'Insulin Glargine 100 IU/ml',
    category: 'Diabetic Care',
    description: 'Long-acting human insulin analogue used to improve glycemic control in adults and children with diabetes.',
    availability: 'Prescription Required',
    form: 'Injection'
  },
  {
    id: 'med-5',
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    description: 'Fully automatic upper arm blood pressure monitor with one-touch operation and irregular heartbeat detection.',
    availability: 'In Stock',
    form: 'Equipment'
  },
  {
    id: 'med-6',
    name: 'Whey Protein Supplement (1kg)',
    category: 'Protein Supplements',
    description: 'Premium quality protein concentrate for muscle recovery and daily nutrition support.',
    availability: 'In Stock',
    form: 'Protein Supplements' as any
  },
  {
    id: 'med-7',
    name: 'Multivitamin & Minerals (Zinc + Vitamin C)',
    category: 'Vitamins',
    description: 'Daily immunity-boosting supplements rich in crucial micro-nutrients, zinc, and ascorbic acid.',
    availability: 'In Stock',
    form: 'Other'
  },
  {
    id: 'med-8',
    name: 'Moisturizing Cream for Dry Skin',
    category: 'Skin Care',
    description: 'Clinically tested deep hydration cream for sensitive skin, dermatologically approved.',
    availability: 'In Stock',
    form: 'Ointment'
  },
  {
    id: 'med-9',
    name: 'Baby Feeding Bottle & Pacifier Set',
    category: 'Baby Products',
    description: 'BPA-free high-grade baby feeding essentials with anti-colic features.',
    availability: 'In Stock',
    form: 'Other'
  },
  {
    id: 'med-10',
    name: 'Antiseptic Liquid Wash',
    category: 'Personal Hygiene',
    description: 'Highly effective antiseptic liquid solution for wound cleansing, disinfection, and personal care.',
    availability: 'In Stock',
    form: 'Other'
  },
  {
    id: 'med-11',
    name: 'Adjustable Knee Support Band',
    category: 'Orthopedic Support',
    description: 'Neoprene adjustable knee support with double stabilizers to prevent injury and alleviate pain.',
    availability: 'In Stock',
    form: 'Other'
  },
  {
    id: 'med-12',
    name: 'Glucometer Testing Strips (50 pack)',
    category: 'Diabetic Care',
    description: 'Accurate and fast blood glucose test strips for monitoring blood sugar levels at home.',
    availability: 'In Stock',
    form: 'Equipment'
  },
  {
    id: 'med-13',
    name: 'Vaporizing Ointment Rub',
    category: 'OTC Medicines',
    description: 'Aromatic cold relief chest rub providing relief from nasal congestion, cough, and body aches.',
    availability: 'In Stock',
    form: 'Ointment'
  },
  {
    id: 'med-14',
    name: 'Calcium + Vitamin D3 Tablets',
    category: 'Vitamins',
    description: 'Maintains bone density, supports joint health and enhances daily calcium absorption.',
    availability: 'In Stock',
    form: 'Tablet'
  },
  {
    id: 'med-15',
    name: 'Pantoprazole 40mg (Gastro-resistant)',
    category: 'Prescription Medicines',
    description: 'Reduces excess stomach acid production. Effective for GERD, acid reflux, and stomach ulcers.',
    availability: 'Prescription Required',
    form: 'Tablet'
  },
  {
    id: 'med-16',
    name: 'Pantocid DSR Capsule',
    category: 'Capsules',
    description: 'Used for severe acidity, bloating, and gas, combining pantoprazole and domperidone.',
    availability: 'Prescription Required',
    form: 'Capsule'
  }
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'cat-1', name: 'Tablets', count: '120+ Brands', iconName: 'Pills', description: 'Essential prescription & OTC tablets' },
  { id: 'cat-2', name: 'Capsules', count: '80+ Brands', iconName: 'Layers', description: 'Gastro, antibiotic & multivitamin capsules' },
  { id: 'cat-3', name: 'Syrups', count: '60+ Brands', iconName: 'Droplet', description: 'Cough, pediatric & digestive formulations' },
  { id: 'cat-4', name: 'Injection', count: '40+ Items', iconName: 'Syringe', description: 'Critical care & life-saving injectable vials' },
  { id: 'cat-5', name: 'Medical Equipment', count: '30+ Devices', iconName: 'Activity', description: 'BP monitors, Glucometers & Nebulizers' },
  { id: 'cat-6', name: 'Protein Supplements', count: '15+ Flavors', iconName: 'Dumbbell', description: 'Fitness, nutrition, and wellness protein powders' },
  { id: 'cat-7', name: 'Vitamins', count: '50+ Options', iconName: 'ShieldAlert', description: 'Immunity boosters, minerals, and joint supplements' },
  { id: 'cat-8', name: 'Skin Care', count: '45+ Products', iconName: 'Sparkles', description: 'Dermatological creams, lotions & sunscreens' },
  { id: 'cat-9', name: 'Baby Products', count: '35+ Essentials', iconName: 'Baby', description: 'Baby food, diapers, creams & baby hygiene items' },
  { id: 'cat-10', name: 'Personal Hygiene', count: '70+ Products', iconName: 'ShieldCheck', description: 'Antiseptics, hand washes & daily hygiene supplies' },
  { id: 'cat-11', name: 'Orthopedic Support', count: '25+ Items', iconName: 'HeartHandshake', description: 'Knee bands, belts, crepe bandages & ankle guards' },
  { id: 'cat-12', name: 'Diabetic Care', count: '20+ Products', iconName: 'Thermometer', description: 'Sugar testing kits, strips & insulin accessories' }
];

export const SERVICES: ServiceItem[] = [
  { id: 'srv-1', title: 'Prescription Medicines', description: 'We source and dispense 100% authentic, high-quality, doctor-prescribed drugs with proper documentation and batch-tracking.', iconName: 'ClipboardList' },
  { id: 'srv-2', title: 'General & OTC Medicines', description: 'Wide range of over-the-counter daily medicines for pain relief, cold, acidity, digestion, and allergies.', iconName: 'Pills' },
  { id: 'srv-3', title: 'Health Supplements', description: 'Premium quality proteins, daily multivitamins, zinc, calcium, and specialized health nutrition from trusted brands.', iconName: 'Dumbbell' },
  { id: 'srv-4', title: 'Baby Care', description: 'Everything your little one needs: baby milk powder, gentle lotions, sanitizing wipes, diapers, and organic products.', iconName: 'Baby' },
  { id: 'srv-5', title: 'Personal Care', description: 'Premium dermatological skincare, sanitizers, oral care, and antiseptic washes for your daily hygiene routine.', iconName: 'Sparkles' },
  { id: 'srv-6', title: 'Medical Equipment', description: 'Reliable, calibrated monitors for Blood Pressure, Blood Glucose, pulse oximeters, and high-performance nebulizers.', iconName: 'Activity' },
  { id: 'srv-7', title: 'Surgical Supplies', description: 'Sterile surgical cottons, bandages, surgical gloves, syringes, surgical tape, and clinical instruments.', iconName: 'Scissors' },
  { id: 'srv-8', title: 'First Aid Products', description: 'Fully stocked first aid kits, antiseptic creams, instant cooling pads, and burn relief gels for household emergencies.', iconName: 'HeartPulse' },
  { id: 'srv-9', title: 'Diabetic Care', description: 'Sugar testing kits, replacement lancets, fast-acting sugar gels, and customized skincare for diabetic patients.', iconName: 'Activity' },
  { id: 'srv-10', title: 'Healthcare Essentials', description: 'Comprehensive catalog of face masks, sanitizers, thermometer guns, and everyday clinical consumables.', iconName: 'Shield' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh Ranjan',
    rating: 5,
    comment: 'Magadh Medical Hall is my go-to store in Tekari. They always have the exact medicines prescribed by my cardiologist. Highly reliable service and polite owner!',
    role: 'Local Teacher, Tekari',
    date: 'June 2026'
  },
  {
    id: 't-2',
    name: 'Sunita Devi',
    rating: 5,
    comment: 'The owner Mr. Mukesh is very helpful. I ordered my baby care products and daily vitamins via WhatsApp, and got them quickly. Pricing is also very reasonable.',
    role: 'Homemaker, Tekari',
    date: 'May 2026'
  },
  {
    id: 't-3',
    name: 'Vikash Kumar',
    rating: 5,
    comment: 'Excellent shop with genuine medicines. In Tekari, finding specific life-saving drugs is sometimes hard, but Magadh Medical Hall always arranges them. Truly grateful.',
    role: 'Government Employee',
    date: 'April 2026'
  },
  {
    id: 't-4',
    name: 'Dr. Amit Pathak',
    rating: 5,
    comment: 'I highly recommend this pharmacy to my patients. Their stock of surgical supplies and diabetic care items is top-notch, and they maintain great hygiene standard.',
    role: 'Medical Practitioner',
    date: 'March 2026'
  },
  {
    id: 't-5',
    name: 'Riya Gupta',
    rating: 5,
    comment: 'A very modern store near Devi Ashtan. The staff is knowledgeable and tells me the correct substitute if the main brand is out of stock. Very helpful guidance!',
    role: 'Pharmacy Student',
    date: 'February 2026'
  },
  {
    id: 't-6',
    name: 'Sanjay Mishra',
    rating: 5,
    comment: 'Their WhatsApp prescription upload is amazing! I just sent a photo of my prescription, they checked the stock, calculated the bill, and kept my order ready for quick pickup.',
    role: 'Retiree, Tekari',
    date: 'January 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines at Magadh Medical Hall genuine?',
    answer: 'Yes, absolutely. We source all our medicines, healthcare devices, and surgical products directly from licensed pharmaceutical distributors. We maintain absolute strict adherence to quality and authenticity.',
    category: 'Medicines'
  },
  {
    id: 'faq-2',
    question: 'Can I order medicines through WhatsApp?',
    answer: 'Yes! We offer convenient WhatsApp ordering. Simply upload your prescription photo and type your requirements. We will review it, calculate the total, and confirm your order promptly.',
    category: 'Orders'
  },
  {
    id: 'faq-3',
    question: 'Is a prescription mandatory for buying medicines?',
    answer: 'A valid doctor prescription is mandatory for scheduled drugs (such as antibiotics, high-potency psychiatric drugs, and special hormones). General OTC (Over-The-Counter) products and health supplements do not require a prescription.',
    category: 'Medicines'
  },
  {
    id: 'faq-4',
    question: 'Where is Magadh Medical Hall located in Tekari?',
    answer: 'We are conveniently located at "Dalmiya new saree show room, near Devi Ashtan, faij, Main, Tekari, Bihar 824236". Feel free to check the Google Map section on our contact page for exact walking/driving directions.',
    category: 'General'
  },
  {
    id: 'faq-5',
    question: 'What are the store working hours?',
    answer: 'We are open Monday to Saturday from 08:00 AM to 09:30 PM. On Sundays, we are open from 09:00 AM to 02:00 PM primarily for emergency healthcare supplies.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Do you offer home delivery of medicines in Tekari?',
    answer: 'Yes, we provide home delivery for nearby localities in Tekari for order values above a certain minimum. For distant areas, please contact us on WhatsApp to discuss availability.',
    category: 'Delivery'
  },
  {
    id: 'faq-7',
    question: 'Do you sell medical devices like Blood Pressure and Blood Glucose monitors?',
    answer: 'Yes, we stock premium calibrated digital BP monitors, glucometers with test strips, oximeters, digital thermometers, and orthopedic support accessories from reputed brands.',
    category: 'Products'
  },
  {
    id: 'faq-8',
    question: 'Can I return or exchange purchased medicines?',
    answer: 'Unopened, intact medicine strips with valid cash bills can be exchanged within 7 days of purchase, provided they do not require temperature-controlled cold-chain storage (e.g., insulin or vaccines cannot be returned for safety reasons).',
    category: 'Orders'
  },
  {
    id: 'faq-9',
    question: 'What forms of payment do you accept?',
    answer: 'We accept all payment modes including UPI (PhonePe, Google Pay, Paytm), Cash, and major credit/debit cards at our retail checkout counter.',
    category: 'General'
  },
  {
    id: 'faq-10',
    question: 'How do I check the availability of a specific medicine?',
    answer: 'You can use the "Medicine Availability Inquiry" feature on our website, or directly text us on WhatsApp at 08434634920. Our experienced pharmacist will check our inventory and respond immediately.',
    category: 'Medicines'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Understanding Antibiotics: Why You Must Finish the Full Course',
    category: 'Medication Safety',
    summary: 'Stopping antibiotics early because you feel better can create super-resistant bacteria. Read why finishing the prescription is crucial.',
    content: 'Many patients stop taking antibiotics as soon as their symptoms subside, thinking they are cured. However, stopping early allows the strongest bacteria to survive, mutate, and multiply, leading to antibiotic resistance. Always follow your doctor\'s recommended dose and complete the entire course, even if you feel 100% recovered.',
    readTime: '3 min read',
    date: 'July 2026'
  },
  {
    id: 'tip-2',
    title: 'Managing Blood Pressure Naturally at Home',
    category: 'Chronic Care',
    summary: 'Monitor your hypertension effectively with simple daily dietary modifications and correct monitoring methods.',
    content: 'Hypertension requires systematic monitoring. To manage it at home: 1) Reduce dietary sodium/salt intake. 2) Drink adequate water. 3) Maintain a quiet environment for 5 minutes before checking with your digital BP monitor. 4) Track your pulse and log daily numbers to share with your cardiologist during your next checkup.',
    readTime: '4 min read',
    date: 'June 2026'
  },
  {
    id: 'tip-3',
    title: 'Essential First Aid Supplies Every Household Needs',
    category: 'First Aid',
    summary: 'An emergency can happen anytime. Check the checklist of essential tools to keep in your home first aid box.',
    content: 'Your household first aid box should always be organized and accessible. It must contain: antiseptic wipes/liquid, sterile gauge pads, medical adhesive tapes, band-aids of various sizes, scissor, tweezers, pain-relieving spray, paracetamol, burn ointment, and a digital thermometer. Regularly inspect expiration dates of all supplies!',
    readTime: '3 min read',
    date: 'May 2026'
  },
  {
    id: 'tip-4',
    title: 'How to Correctly Store Your Daily Medications',
    category: 'Health Tips',
    summary: 'Moisture, heat, and light can degrade your medicines. Learn the safest places to store your prescription pills.',
    content: 'Many people store medicines in bathroom cabinets or near kitchen stoves, which are actually the worst spots due to high humidity and temperature changes. Most medicines should be stored in a cool, dry place below 25°C, away from direct sunlight. Temperature-sensitive items like insulin must be kept in the refrigerator (not the freezer!).',
    readTime: '3 min read',
    date: 'April 2026'
  }
];

export const TIMELINE_EVENTS = [
  { year: '1998', title: 'Humble Beginnings', description: 'Established as a small local health desk in Tekari, aiming to provide genuine medicines to the community.' },
  { year: '2008', title: 'Expansion & Service Growth', description: 'Expanded medical catalog to include specialized baby care and surgical medical supplies.' },
  { year: '2018', title: 'Devi Ashtan Modernization', description: 'Relocated near Devi Ashtan to a bigger, air-conditioned retail setup with computerized billing.' },
  { year: '2026', title: 'Digital Pharmacy Ordering', description: 'Launched online web catalog and full WhatsApp prescription order integration for hassle-free shopping.' }
];

export const OUR_VALUES = [
  { title: '100% Authenticity', description: 'Zero tolerance for unverified suppliers. Every tablet or device is backed by proper clinical authenticity certificates.', iconName: 'Award' },
  { title: 'Affordable Pricing', description: 'We believe healthcare is a basic human right. We keep prices competitive and transparent for our community.', iconName: 'Tag' },
  { title: 'Compassionate Care', description: 'We don\'t just sell pills. We offer warm customer care, experienced answers, and medical instructions with empathy.', iconName: 'Heart' },
  { title: 'Rapid Service', description: 'We respect your time. Whether in-store or over WhatsApp, we ensure rapid drug compounding, confirmation, and dispensing.', iconName: 'Zap' }
];
