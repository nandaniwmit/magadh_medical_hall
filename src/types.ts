export interface Medicine {
  id: string;
  name: string;
  category: string;
  price?: string;
  description: string;
  availability: 'In Stock' | 'Call for Availability' | 'Prescription Required';
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Ointment' | 'Other';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  role: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  count: string;
  iconName: string;
  description: string;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface WhatsAppOrder {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  message: string;
  preferredDeliveryTime: string;
}
