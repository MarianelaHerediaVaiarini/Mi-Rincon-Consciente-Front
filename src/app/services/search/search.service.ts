import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResultInterface } from '../../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  search(category: string, query: string): Observable<SearchResultInterface[]> {
    if (!query) {
      return new Observable<SearchResultInterface[]>(subscriber => {
        subscriber.next([]);
        subscriber.complete();
      });
    }
    return this.http.get<SearchResultInterface[]>(`${this.apiUrl}/search/${category}?q=${query}`);
  }
}
