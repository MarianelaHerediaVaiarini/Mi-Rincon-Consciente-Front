import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardInterface } from '../../interfaces/card.interfaces';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-carousel-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carousel-cards.component.html',
  styleUrl: './carousel-cards.component.css'
})
export class CarouselCardsComponent {
protected cards: CardInterface[] = [{
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
},{
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}, {
  title: 'Card 1',
  link: 'https://www.google.com',
  iconName: 'home',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'This is a description for card 1'
}]
@ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef | undefined;
  scrollProgress = 0;

  // Detectar el scroll
  onScroll(event: any) {
    const element = this.scrollContainer?.nativeElement;
    const scrollWidth = element.scrollWidth - element.clientWidth;
    const scrolled = (element.scrollLeft / scrollWidth) * 100;
    this.scrollProgress = scrolled;
  }
}
