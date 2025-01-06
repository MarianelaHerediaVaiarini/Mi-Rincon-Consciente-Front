import { Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() title: string = '';
@Input() link: string = '';
@Input() iconName: string = '';
@Input() imgSrc: string = '';
@Input() description: string = '';

ngOnInit() {
  console.log('CardComponent initialized');
}
}
