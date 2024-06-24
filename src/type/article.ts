interface Project {
  title: string;
  link: string;
  alt: string;
}

export interface Article {
  title: string;
  projects: Project[];
}
