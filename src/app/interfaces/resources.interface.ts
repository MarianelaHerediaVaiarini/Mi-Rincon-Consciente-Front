export interface ResourceCardInterface {
  title: string;
  link: string;
  description: string;
  type: number
}

export interface ResourceInterface {
  id: number;
  title: string;
  description: string;
  summary: string;
  phrase: string;
  url: string;
  cover_image: string;
  images: string[];
  published_at: Date;
  type: {
    id: number;
    name: string;
  };
}
