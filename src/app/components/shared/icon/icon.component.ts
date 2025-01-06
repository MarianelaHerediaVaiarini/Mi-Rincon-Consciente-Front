import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconsService } from '../../../services/icons/icons.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() iconName: string = ''; 
  @Input() size: string = ''; 
  @Input() color: string = ''; 
  public sanitizedSvgContent!: SafeHtml;
  constructor(
    readonly cdr: ChangeDetectorRef,
    readonly sanitizer: DomSanitizer,
    readonly http: HttpClient,
    readonly svgIconService: IconsService,
) {}
ngOnInit(): void {
  this.loadSvg();
}
private loadSvg(): void {
  if (!this.iconName) return;
  const svgPath = `/assets/icons/${this.iconName}.svg`;

  if (!this.svgIconService.svgIconMap.has(svgPath)) {
      const svg$ = this.http.get(svgPath, { responseType: 'text' }).pipe(
        map((svg: string) => this.sanitizer.bypassSecurityTrustHtml(svg)),
        shareReplay(1),
      );
      
      this.svgIconService.svgIconMap.set(svgPath, svg$);
  }

  const cachedSvg$ = this.svgIconService.svgIconMap.get(svgPath);

  if (cachedSvg$) {
    cachedSvg$.subscribe({
      next: (svg: SafeHtml) => {
          this.sanitizedSvgContent = svg;
          this.cdr.detectChanges();
      },
      error: (error: Error) => console.error(`Error loading SVG`, error),
    });
  }
  
}
}
