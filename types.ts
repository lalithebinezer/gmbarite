export type Page = 'home' | 'products' | 'about' | 'contact' | 'quality' | 'applications' | 'resources' | 'careers';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  grade: string;
  specificGravity: string;
  particleSize: string;
  chemicalPurity: string[];
  applications: string[];
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    imageUrl: string;
    documentUrl: string;
}

export interface CareerOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}