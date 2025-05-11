import { Component } from '@angular/core';
import { TitlePageComponent } from '../../components/shared/title-page/title-page.component';
import { CardCoverComponent } from '../../components/shared/card-cover/card-cover.component';
import { CardRoundedComponent } from '../../components/shared/card-rounded/card-rounded.component';
import { SubMenuListInterface } from '../../interfaces/home.interfaces';
import { TherapiesService } from '../../services/therapies/therapies.service';
import { TherapyInterface } from '../../interfaces/therapies.interface';

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [TitlePageComponent, CardCoverComponent, CardRoundedComponent],
  templateUrl: './therapies.component.html',
})
export class TherapiesComponent {
  protected therapies: SubMenuListInterface[] = [];
  protected loading: boolean = true;
  constructor(readonly therapiesService: TherapiesService) {}
  ngOnInit() {
    this.getAllTherapies();
  }
  getAllTherapies() {
    this.therapiesService.getAllData().subscribe({
      next: (data: TherapyInterface[]) => {
        this.loading = false;
        this.therapies = data.map((item: TherapyInterface, index) => {
          return {
            title: item.name,
            link: `/therapies/${item.id}`,
            iconName: 'home',
            imgSrc: item.cover_image,
            description: item.summary,
            bgColor: this.getBgColor(index),
            iconColor: 'white',
          };
        });
      },
      error: (error) => {
        console.error('Error fetching therapies data', error);
        this.loading = false;
      },
    });
  }

  getBgColor(index: number): string {
    const colors = ['beige', 'brown-light', 'brown-dark'];
    return colors[index % colors.length];
  }
}
