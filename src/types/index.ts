import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accent: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface MaintenanceInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  accent: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}
