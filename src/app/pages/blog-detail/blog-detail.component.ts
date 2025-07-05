import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { BlogInterface } from '../../interfaces/blog.interface';
import { SkeletonDetailComponent } from '../../components/skeletons/skeleton-detail/skeleton-detail.component';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [SkeletonDetailComponent],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {
  blog: BlogInterface = {} as BlogInterface;
  loading: boolean = true;
  formattedContent: SafeHtml = '';

  constructor(
    readonly route: ActivatedRoute,
    readonly blogService: BlogService,
    private sanitizer: DomSanitizer
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
        this.formattedContent = this.sanitizer.bypassSecurityTrustHtml(
          this.getFormattedContent()
        );
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

  getFormattedContent(): string {
  if (!this.blog.content) return '';

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  try {
    const result = marked.parse(this.blog.content);
    
    if (typeof result === 'string') {
      return result
        .replace(/<h1>/g, '<h1 class="text-3xl lg:text-4xl font-cormorant font-semibold text-brown-900 mb-4 mt-6">')
        .replace(/<h2>/g, '<h2 class="text-2xl lg:text-3xl font-cormorant font-semibold text-brown-900 mb-4 mt-6">')
        .replace(/<h3>/g, '<h3 class="text-xl lg:text-2xl font-cormorant font-semibold text-brown-900 mb-4 mt-6">')
        .replace(/<p>/g, '<p class="text-sm md:text-base text-brown-800 mb-4 leading-relaxed">')
        .replace(/<ul>/g, '<ul class="list-disc ml-6 mb-4 space-y-2">')
        .replace(/<ol>/g, '<ol class="list-decimal ml-6 mb-4 space-y-2">')
        .replace(/<li>/g, '<li class="text-sm md:text-base text-brown-800">')
        .replace(/<strong>/g, '<strong class="font-semibold text-brown-900">')
        .replace(/<hr>/g, '<hr class="my-8 border-brown-200">');
    }
    
    return '';
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return this.blog.content || '';
  }
}
}