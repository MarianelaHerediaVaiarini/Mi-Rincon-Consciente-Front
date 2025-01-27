import { Component } from '@angular/core';
import { CardRoundedComponent } from '../../components/shared/card-rounded/card-rounded.component';
import { SubMenuListInterface } from '../../interfaces/home.interfaces';
import { subMenuListUtil } from '../../utils/home.utils';
import { CarouselCardsComponent } from '../../components/carousel-cards/carousel-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardRoundedComponent, CarouselCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected subMenuList: SubMenuListInterface[] = subMenuListUtil;
}
