import { Component } from '@angular/core';
import { TitlePageComponent } from '../../components/shared/title-page/title-page.component';
import { FilterComponent } from '../../components/shared/filter/filter.component';
import { FilterInterface } from '../../interfaces/filter.interface';
import { CardComponent } from '../../components/shared/card/card.component';
import { CardCoverComponent } from '../../components/shared/card-cover/card-cover.component';
import { CardInterface } from '../../interfaces/card.interfaces';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    TitlePageComponent,
    FilterComponent,
    CardComponent,
    CardCoverComponent,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  protected filters: FilterInterface[] = [
    { id: 'all', label: 'Todos', hovered: false },
    { id: 'nutrition', label: 'Alimentación', icon: 'food', hovered: false },
    {
      id: 'self-love',
      label: 'Amor propio',
      icon: 'love-yourself',
      hovered: false,
    },
    {
      id: 'spirituality',
      label: 'Espiritualidad',
      icon: 'basic-meditation',
      hovered: false,
    },
    {
      id: 'physical-wellbeing',
      label: 'Bienestar físico',
      icon: 'basic-yoga',
      hovered: false,
    },
    { id: 'lifestyle', label: 'Estilo de vida', icon: 'tree', hovered: false },
  ];
  protected selectedFilters: string[] = ['all'];
  protected cards: CardInterface[] = [
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
    {
      title: 'Card 1',
      link: 'https://www.google.com',
      iconName: 'home',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'This is a description for card 1',
    },
  ];
  filterChange(selectedFilters: string[]): void {
    this.selectedFilters = selectedFilters;
  }
}
