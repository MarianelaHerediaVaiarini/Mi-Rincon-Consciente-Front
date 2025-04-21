import { Component } from '@angular/core';
import { CardRoundedComponent } from '../../components/shared/card-rounded/card-rounded.component';
import { SubMenuListInterface } from '../../interfaces/home.interfaces';
import { subMenuListUtil } from '../../utils/home.utils';
import { CarouselCardsComponent } from '../../components/carousel-cards/carousel-cards.component';
import { BlogInterface } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog/blog.service';
import { CardInterface } from '../../interfaces/card.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardRoundedComponent, CarouselCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected subMenuList: SubMenuListInterface[] = subMenuListUtil;
  protected blogData: CardInterface[] = [];

  constructor(readonly blogService: BlogService) {}

  ngOnInit() {
    this.getLastBlogPosts();
  }

  getLastBlogPosts() {
    this.blogService.getAllData().subscribe({
      next: (data: BlogInterface[]) => {
        this.blogData = data.map((item: BlogInterface) => {
          return {
            title: item.title,
            link: `/blog/${item.id}`,
            iconName: 'home',
            imgSrc: item.cover_image_url,
            description: item.summary,
          };
        });
      },
      error: (error) => {
        console.error('Error fetching blog data', error);
      },
    });
  }
}
