export interface Project {
  title: string;
  link: string;
  alt: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
}

export interface Article {
  title: string;
  projects: Project[];
}
