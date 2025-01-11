import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private therapies = ['Yoga', 'Reiki', 'Meditación', 'Masajes'];
  private blog = ['Cómo meditar', 'Alimentación consciente', 'Amor propio'];
  private resources = ['Libros de mindfulness', 'Podcasts de bienestar'];

  searchInCategory(category: string, query: string): string[] {
    if (!query) return [];
    const data = this.getDataByCategory(category);
    return data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  private getDataByCategory(category: string): string[] {
    switch (category) {
      case '/therapies':
        return this.therapies;
      case '/blog':
        return this.blog;
      case '/resources':
        return this.resources;
      default:
        return [];
    }
  }
}
