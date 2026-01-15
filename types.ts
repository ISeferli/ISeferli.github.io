
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string[];
  screenshots?: string[];
  readmeUrl: string;
  link?: string;
  reason: string;
  gameUrl: string;
  group: string;
  roles: string[];
  devDescription: string;
  features: string[];
  featuresTitle: string[];
}