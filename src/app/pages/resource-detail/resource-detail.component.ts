import { Component } from '@angular/core';
import { ResourceInterface } from '../../interfaces/resources.interface';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../../services/resources/resources.service';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [],
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
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching resource details', error);
      },
    });
  }
}
