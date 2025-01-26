import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { FilterInterface } from '../../../interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input() filters: FilterInterface[] = [];
  @Input() selectedFilters: string[] = []; 

  @Output() filterChange = new EventEmitter<string[]>();

  toggleFilter(filterId: string): void {
    if (this.selectedFilters.includes(filterId)) {
      this.selectedFilters = [
        ...this.selectedFilters.filter((id) => id !== filterId),
      ];
    } else {
      this.selectedFilters.push(filterId);
    }
    this.filterChange.emit(this.selectedFilters);
  }
}
