import { Component } from '@angular/core';
import { TitlePageComponent } from '../../components/shared/title-page/title-page.component';
import { FilterComponent } from '../../components/shared/filter/filter.component';
import { FilterInterface } from '../../interfaces/filter.interface';
import { CardComponent } from '../../components/shared/card/card.component';
import { CardCoverComponent } from '../../components/shared/card-cover/card-cover.component';
import { CardInterface } from '../../interfaces/card.interfaces';
import { BlogService } from '../../services/blog/blog.service';
import { BlogInterface } from '../../interfaces/blog.interface';
import { SkeletonListComponent } from '../../components/skeletons/skeleton-list/skeleton-list.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    TitlePageComponent,
    FilterComponent,
    CardComponent,
    CardCoverComponent,
    SkeletonListComponent,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  protected filters: FilterInterface[] = [];
  protected selectedFilters: string[] = ['all'];
  protected cards: CardInterface[] = [];
  protected loading: boolean = true;
  constructor(readonly blogService: BlogService) {}
  ngOnInit() {
    this.getAllDataBlog();
  }

  getAllDataBlog() {
    this.blogService.getAllData().subscribe({
      next: (data: BlogInterface[]) => {
        this.cards = data.map((blog) => {
          return {
            title: blog.title,
            link: `/blog/${blog.id}`,
            iconName: 'home',
            imgSrc: blog.cover_image_url,
            description: blog.summary,
          };
        });
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
    });
  }
  filterChange(selectedFilters: string[]): void {
    this.selectedFilters = selectedFilters;
  }
}
