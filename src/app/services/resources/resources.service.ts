import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceInterface } from '../../interfaces/resources.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
readonly apiUrl = environment.apiUrl;

  constructor(readonly http: HttpClient) {}

  getAllData(): Observable<ResourceInterface[]> {
    return this.http.get<ResourceInterface[]>(`${this.apiUrl}/resources`);
  }

  getById(id: string): Observable<ResourceInterface> {
    return this.http.get<ResourceInterface>(`${this.apiUrl}/resources/${id}`);
  }
}
