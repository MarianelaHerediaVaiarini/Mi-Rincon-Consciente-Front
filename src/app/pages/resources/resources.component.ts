import { Component } from '@angular/core';
import { TitlePageComponent } from "../../components/shared/title-page/title-page.component";
import { CardCoverComponent } from "../../components/shared/card-cover/card-cover.component";
import { ResourceCardInterface, ResourceInterface } from '../../interfaces/resources.interface';
import { CarouselCardsResourceComponent } from "../../components/carousel-cards-resource/carousel-cards-resource.component";
import { ResourcesService } from '../../services/resources/resources.service';
import { SkeletonListComponent } from '../../components/skeletons/skeleton-list/skeleton-list.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [TitlePageComponent, CardCoverComponent, CarouselCardsResourceComponent, SkeletonListComponent],
  templateUrl: './resources.component.html',
})
export class ResourcesComponent {
protected booksList: ResourceCardInterface[] = [];
  protected podcatsList: ResourceCardInterface[] =  []
  protected moviesList: ResourceCardInterface[] =  []
  protected loading: boolean = true;
constructor(readonly resourcesService: ResourcesService) {}
  ngOnInit() {
    this.getAllDataResources();
  }

  getAllDataResources() {
    this.resourcesService.getAllData().subscribe({
      next: (data: ResourceInterface[]) => {
        const dataCards = data.map((item: ResourceInterface) => {
          return {
            title: item.title,
            link: `/resources/${item.id}`,
            iconName: 'home',
            imgSrc: item.cover_image,
            description: item.summary,
            bgColor: 'brown-light',
            iconColor: 'white',
            type: item.type.id
          };
        });
        this.booksList = dataCards.filter((item) => item.type === 1);
        this.podcatsList = dataCards.filter((item) => item.type === 2);
        this.moviesList = dataCards.filter((item) => item.type === 3);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      error: (error) => {
        console.error('Error fetching resources data', error);
      },
    });
  }
}
