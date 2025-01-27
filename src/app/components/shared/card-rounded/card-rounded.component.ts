import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-rounded',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './card-rounded.component.html',
})
export class CardRoundedComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() iconName: string = '';
  @Input() iconColor: string = '';
  @Input() bgColor: string = '';
  @Input() small: boolean = false;
}
