import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen: boolean = false;
  showSearch: boolean = true;
  results: any[] = [];
  searchQuery: string = '';
  constructor(readonly router: Router, readonly searchService: SearchService) {
    this.router.events.subscribe(() => {
      this.showSearch = this.router.url !== '/';
      this.menuOpen = false; 
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    const currentRoute = this.router.url;
    this.results = this.searchService.searchInCategory(currentRoute, this.searchQuery);
  }

  onResultClick(result: string): void {
    const targetElement = document.getElementById(result);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    this.results = [];
    this.searchQuery = '';
  }
}
