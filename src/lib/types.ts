export interface TechTag {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon?: string;
}

export interface Media {
  id: string;
  file_url: string;
  file_type: "image" | "video";
  alt_text?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description?: string;
  full_description?: string;
  project_type?: string;
  status: "draft" | "published";
  featured: boolean;
  live_url?: string;
  github_url?: string;
  tech_tags: TechTag[];
  media: Media[];
  role?: string;
  year?: string;
}