export interface TherapyInterface{
    id: number;
    name: string;
    description: string;
    phrase: string;
    summary: string;
    duration: number; 
    price: number; 
    modality: number; 
    type: number;    
    cover_image: string;
    images: string[];
    created_at: Date; 
  }
  