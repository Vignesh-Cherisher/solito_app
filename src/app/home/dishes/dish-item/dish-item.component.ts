import { Component, Input } from '@angular/core';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrl: './dish-item.component.css'
})
export class DishItemComponent {
  @Input() dishItem: Dish;
}
