import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TherapyInterface } from '../../interfaces/therapies.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TherapiesService {
  readonly apiUrl = environment.apiUrl;

  constructor(readonly http: HttpClient) {}

  getAllData(): Observable<TherapyInterface[]> {
    return this.http.get<TherapyInterface[]>(`${this.apiUrl}/therapies`);
  }

  getById(id: string): Observable<TherapyInterface> {
    return this.http.get<TherapyInterface>(`${this.apiUrl}/therapies/${id}`);
  }
}
