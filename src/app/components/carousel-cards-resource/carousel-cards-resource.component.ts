import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardResourceComponent } from '../shared/card-resource/card-resource.component';
import { ResourceCardInterface } from '../../interfaces/resources.interface';

@Component({
  selector: 'app-carousel-cards-resource',
  standalone: true,
  imports: [CardResourceComponent],
  templateUrl: './carousel-cards-resource.component.html',
})
export class CarouselCardsResourceComponent implements AfterViewInit {
  @Input() cards: ResourceCardInterface[] = [];
  @Input() title: string = '';
  hasScroll = false;
  @ViewChild('scrollContainerResource') scrollContainer!: ElementRef;
  scrollProgress = 0;
  ngAfterViewInit() {
    this.checkScroll();
  }

  checkScroll() {
    const container = this.scrollContainer.nativeElement;

    this.hasScroll = container.scrollWidth > container.clientWidth;

    if (this.hasScroll) {
      this.scrollProgress =
        (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    }
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    this.scrollProgress =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
  }

}
