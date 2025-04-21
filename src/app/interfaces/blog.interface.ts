export interface CategoryInterface {
    id: number;
    name: string;
    description: string;
  }
  
  export interface BlogInterface {
    id: number;
    title: string;
    subtitle: string;
    summary: string;
    content: string;
    published_at: Date; 
    updated_at: string;
    cover_image_url: string;
    category: CategoryInterface;
    tags: string[];
  }
  