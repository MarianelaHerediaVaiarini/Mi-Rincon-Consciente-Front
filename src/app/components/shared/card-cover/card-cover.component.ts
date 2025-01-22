import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cover',
  standalone: true,
  imports: [],
  templateUrl: './card-cover.component.html',
})
export class CardCoverComponent {
@Input() title: string = '';
}
