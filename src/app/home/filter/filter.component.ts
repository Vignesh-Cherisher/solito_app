import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  isFilteredOnRating: boolean = false;
  isFilteredOnVeg: boolean = false;

  applyRatingFilter() {
    this.isFilteredOnRating = !this.isFilteredOnRating;
  }

  applyVegFilter() {
    this.isFilteredOnVeg = !this.isFilteredOnVeg;
  }

  openFilterDialog() {

  }
}
