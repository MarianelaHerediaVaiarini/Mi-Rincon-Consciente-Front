import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-resource',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-resource.component.html',
})
export class CardResourceComponent {
@Input() title: string = '';
@Input() link: string = '';
@Input() description: string = '';
}
