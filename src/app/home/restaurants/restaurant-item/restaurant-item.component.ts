import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrl: './restaurant-item.component.css'
})
export class RestaurantItemComponent {
  @Input() restaurantItem: Restaurant;
  @ViewChild('restaurantLogo') logoElement: ElementRef;
  isContainerShrunk: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth > 900) {
      this.isContainerShrunk = false
    } else {
      this.isContainerShrunk = true
    }
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (window.innerWidth > 900) {
      this.isContainerShrunk = false
    } else {
      this.isContainerShrunk = true
    }
  }
}
