import { Component } from '@angular/core';
import { TherapyInterface } from '../../interfaces/therapies.interface';
import { ActivatedRoute } from '@angular/router';
import { TherapiesService } from '../../services/therapies/therapies.service';
import { CardRoundedComponent } from '../../components/shared/card-rounded/card-rounded.component';
import { SkeletonDetailComponent } from '../../components/skeletons/skeleton-detail/skeleton-detail.component';


@Component({
  selector: 'app-therapy-detail',
  standalone: true,
  imports: [CardRoundedComponent, SkeletonDetailComponent],
  templateUrl: './therapy-detail.component.html',
})
export class TherapyDetailComponent {
 therapy: TherapyInterface = {} as TherapyInterface;
 loading: boolean = true;


  constructor(
    readonly route: ActivatedRoute,
    readonly therapiesService: TherapiesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getTherapiesDetails(id);
    }
  }

  getTherapiesDetails(id: string): void {
    this.therapiesService.getById(id).subscribe({
      next: (data: TherapyInterface) => {
        this.therapy = data;
         setTimeout(() => {
        this.loading = false;
        }
        , 1000); 
      },
      error: (error) => {
        console.error('Error fetching blog details', error);
        this.loading = false;
      },
    });
  }
}
