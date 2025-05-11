import { Component } from '@angular/core';
import { TherapyInterface } from '../../interfaces/therapies.interface';
import { ActivatedRoute } from '@angular/router';
import { TherapiesService } from '../../services/therapies/therapies.service';
import { IconComponent } from '../../components/shared/icon/icon.component';
import { CardRoundedComponent } from '../../components/shared/card-rounded/card-rounded.component';


@Component({
  selector: 'app-therapy-detail',
  standalone: true,
  imports: [IconComponent, CardRoundedComponent],
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
        console.log('Therapy details:', this.therapy);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching blog details', error);
      },
    });
  }
}
