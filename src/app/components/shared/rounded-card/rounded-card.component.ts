import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-rounded-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './rounded-card.component.html',
})
export class RoundedCardComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() iconName: string = '';
  @Input() iconColor: string = '';
  @Input() bgColor: string = '';
}
