import { Component } from '@angular/core';
import { ResourceInterface } from '../../interfaces/resources.interface';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../../services/resources/resources.service';
import { SkeletonDetailComponent } from '../../components/skeletons/skeleton-detail/skeleton-detail.component';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [SkeletonDetailComponent],
  templateUrl: './resource-detail.component.html',
})
export class ResourceDetailComponent {
  resource: ResourceInterface = {} as ResourceInterface;
  loading: boolean = true;
  constructor(
    readonly route: ActivatedRoute,
    readonly resourcesService: ResourcesService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getResourceDetail(id);
    }
  }
  getResourceDetail(id: string): void {
    this.resourcesService.getById(id).subscribe({
      next: (data: ResourceInterface) => {
        this.resource = data;
        setTimeout(() => {
        this.loading = false;
        }
        , 1000); 
      },
      error: (error) => {
        console.error('Error fetching resource details', error);
        this.loading = false;
      },
    });
  }
}
