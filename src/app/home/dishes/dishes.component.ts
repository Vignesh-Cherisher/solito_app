import { Component, ElementRef, ViewChild } from '@angular/core';
import { topDishesService } from '../../services/topDishes.service';
import { Dish } from './dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css',
  providers: [topDishesService]
})
export class DishesComponent {
  topDishes: Dish[]
  scrollValue: number;
  @ViewChild('dishContainer') dishContainerElement:ElementRef

  constructor(private tdService: topDishesService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.topDishes = this.tdService.getDishes()
  }

  scrollOnClick(direction: string) {
    this.scrollValue = (direction === 'right') ? 236 : -236
    this.dishContainerElement.nativeElement.scrollBy({
      left: this.scrollValue,
      behavior: 'smooth'
    })
  }
}
