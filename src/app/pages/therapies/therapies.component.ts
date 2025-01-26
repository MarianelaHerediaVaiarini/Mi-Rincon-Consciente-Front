import { Component } from '@angular/core';
import { TitlePageComponent } from '../../components/shared/title-page/title-page.component';
import { CardCoverComponent } from '../../components/shared/card-cover/card-cover.component';
import { RoundedCardComponent } from "../../components/shared/rounded-card/rounded-card.component";
import { SubMenuListInterface } from '../../interfaces/home.interfaces';

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [TitlePageComponent, CardCoverComponent, RoundedCardComponent],
  templateUrl: './therapies.component.html',
})
export class TherapiesComponent {
protected therapies: SubMenuListInterface[] = [
  {
    title: 'TERAPIAS',
    link: '/therapies',
    iconName: 'mandala',
    bgColor: 'beige',
    iconColor: 'gray-dark',
  },
  {
    title: 'BLOG',
    link: '/blog',
    iconName: 'mandala',
    bgColor: 'brown-light',
    iconColor: 'white',
  },
  {
    title: 'RECURSOS',
    link: '/resources',
    iconName: 'mandala',
    bgColor: 'brown-dark',
    iconColor: 'white',
  },
  {
    title: 'TERAPIAS',
    link: '/therapies',
    iconName: 'mandala',
    bgColor: 'beige',
    iconColor: 'gray-dark',
  },
  {
    title: 'BLOG',
    link: '/blog',
    iconName: 'mandala',
    bgColor: 'brown-light',
    iconColor: 'white',
  },
  {
    title: 'RECURSOS',
    link: '/resources',
    iconName: 'mandala',
    bgColor: 'brown-dark',
    iconColor: 'white',
  },
  {
    title: 'TERAPIAS',
    link: '/therapies',
    iconName: 'mandala',
    bgColor: 'beige',
    iconColor: 'gray-dark',
  },
  {
    title: 'BLOG',
    link: '/blog',
    iconName: 'mandala',
    bgColor: 'brown-light',
    iconColor: 'white',
  },
  {
    title: 'RECURSOS',
    link: '/resources',
    iconName: 'mandala',
    bgColor: 'brown-dark',
    iconColor: 'white',
  },
  {
    title: 'TERAPIAS',
    link: '/therapies',
    iconName: 'mandala',
    bgColor: 'beige',
    iconColor: 'gray-dark',
  },
  {
    title: 'BLOG',
    link: '/blog',
    iconName: 'mandala',
    bgColor: 'brown-light',
    iconColor: 'white',
  },
  {
    title: 'RECURSOS',
    link: '/resources',
    iconName: 'mandala',
    bgColor: 'brown-dark',
    iconColor: 'white',
  },
]
}
