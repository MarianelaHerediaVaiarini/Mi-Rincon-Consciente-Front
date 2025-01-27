import { Component } from '@angular/core';
import { TitlePageComponent } from "../../components/shared/title-page/title-page.component";
import { CardCoverComponent } from "../../components/shared/card-cover/card-cover.component";
import { CardResourceComponent } from "../../components/shared/card-resource/card-resource.component";
import { ResourceCardInterface } from '../../interfaces/resources.interface';
import { CarouselCardsComponent } from "../../components/carousel-cards/carousel-cards.component";
import { CarouselCardsResourceComponent } from "../../components/carousel-cards-resource/carousel-cards-resource.component";

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [TitlePageComponent, CardCoverComponent, CardResourceComponent, CarouselCardsComponent, CarouselCardsResourceComponent],
  templateUrl: './resources.component.html',
})
export class ResourcesComponent {
protected booksList: ResourceCardInterface[] = [
    {
      title: 'libro 1',
      link: '/resources',
      description: 'libro sobre etc etc etc ...#scrollContainer',
    },
    {
      title: 'libro 2',
      link: '/resources',
      description: 'libro sobre etc etc etc ...#scrollContainer',
    },
    {
      title: 'libro 3',
      link: '/resources',
      description: 'libro sobre etc etc etc ...#scrollContainer',
    },
  ];
  protected podcatsList: ResourceCardInterface[] =  [ {
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  }]
  protected moviesList: ResourceCardInterface[] =  [ {
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },{
    title: 'libro 1',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 2',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  },
  {
    title: 'libro 3',
    link: '/resources',
    description: 'libro sobre etc etc etc ...#scrollContainer',
  }]

}
