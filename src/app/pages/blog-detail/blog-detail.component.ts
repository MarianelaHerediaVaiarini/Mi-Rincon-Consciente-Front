import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { BlogInterface } from '../../interfaces/blog.interface';
import { SkeletonDetailComponent } from '../../components/skeletons/skeleton-detail/skeleton-detail.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [SkeletonDetailComponent],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {
  blog: BlogInterface = {} as BlogInterface;
  loading: boolean = true;
  constructor(
    readonly route: ActivatedRoute,
    readonly blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getBlogDetails(id);
    }
  }

  getBlogDetails(id: string): void {
    this.blogService.getById(id).subscribe({
      next: (data: BlogInterface) => {
        this.blog = data;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      error: (error) => {
        console.error('Error fetching blog details', error);
        this.loading = false;
      },
    });
  }
}
