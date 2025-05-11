import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { BlogInterface } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {
  blog: BlogInterface = {} as BlogInterface;

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
      },
      error: (error) => {
        console.error('Error fetching blog details', error);
      },
    });
  }
}
