import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {
  blog: any;

  constructor(readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro dinámico de la URL
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.getBlogDetails(slug);
    }
  }

  getBlogDetails(slug: string): void {
    // this.blogService.getBlogBySlug(slug).subscribe((data) => {
    //   this.blog = data;
    // });
  }
}
