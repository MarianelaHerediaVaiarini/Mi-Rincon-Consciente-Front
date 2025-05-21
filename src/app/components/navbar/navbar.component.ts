import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';
import { SearchResultInterface } from '../../interfaces/search.interface';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen: boolean = false;
  showSearch: boolean = true;
  results: SearchResultInterface[] = [];
  searchQuery: string = '';
  type: string = '';
  constructor(readonly router: Router, readonly searchService: SearchService) {
    this.router.events.subscribe(() => {
      this.showSearch = this.router.url == '/blog' || this.router.url == '/resources' || this.router.url == '/therapies';
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    const currentRoute = this.router.url;
    this.type = currentRoute.replace('/', '');
    this.searchService.search(this.type, this.searchQuery).subscribe({
      next: (res) => {
        this.results = res;
      },
      error: (err) => {
        console.error('Error en búsqueda:', err);
        this.results = [];
      },
    });
  }

  onResultClick(result: SearchResultInterface): void {
    switch (this.type) {
      case 'therapies':
        this.router.navigate(['/therapies', result.id]);
        break;
      case 'blog':
        this.router.navigate(['/blog', result.id]);
        break;
      case 'resources':
        this.router.navigate(['/resources', result.id]);
        break;
      default:
        console.warn('Tipo de resultado desconocido:', result);
        break;
    }
    this.results = [];
    this.searchQuery = '';
    this.menuOpen = false;
  }
}
