import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardInterface } from '../../interfaces/card.interfaces';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-carousel-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carousel-cards.component.html',
})
export class CarouselCardsComponent {
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
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  scrollProgress = 0;
  hasScroll = false;
  ngAfterViewInit() {
    this.checkScroll();
  }
  checkScroll() {
    const container = this.scrollContainer.nativeElement;

    this.hasScroll = container.scrollWidth > container.clientWidth;

    if (this.hasScroll) {
      this.scrollProgress =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        100;
    }
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    this.scrollProgress =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
      100;
  }
}
