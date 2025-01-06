import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen: boolean = false;
  showSearch: boolean = true;

  constructor(readonly router: Router) {
    this.router.events.subscribe(() => {
      this.showSearch = this.router.url !== '/';
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    console.log(`Buscando "${query}" en la página actual: ${this.router.url}`);
  }
}
