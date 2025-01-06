import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public svgIconMap: Map<string, Observable<SafeHtml>> = new Map<string, Observable<SafeHtml>>();
  constructor() { }
}