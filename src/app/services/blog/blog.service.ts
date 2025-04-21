import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { BlogInterface } from '../../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly apiUrl = environment.apiUrl;

  constructor(readonly http: HttpClient) {}

  getAllData(): Observable<BlogInterface[]> {
    return this.http.get<BlogInterface[]>(`${this.apiUrl}/blog`);
  }

  getById(id: string): Observable<BlogInterface> {
    return this.http.get<BlogInterface>(`${this.apiUrl}/blog/${id}`);
  }
}
