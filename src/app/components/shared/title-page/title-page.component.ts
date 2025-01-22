import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [],
  templateUrl: './title-page.component.html',
})
export class TitlePageComponent {
@Input() title: string = '';
}
