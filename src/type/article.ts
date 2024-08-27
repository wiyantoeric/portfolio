interface Project {
  title: string;
  link: string;
  alt: string;
  imageUrl?: string;
}

export interface Article {
  title: string;
  projects: Project[];
}
