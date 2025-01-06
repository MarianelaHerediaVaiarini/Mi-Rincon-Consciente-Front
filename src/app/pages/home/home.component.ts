import { Component } from '@angular/core';
import { RoundedCardComponent } from '../../components/shared/rounded-card/rounded-card.component';
import { SubMenuListInterface } from '../../interfaces/home.interfaces';
import { subMenuListUtil } from '../../utils/home.utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoundedCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected subMenuList: SubMenuListInterface[] = subMenuListUtil;
}
