import { Component } from '@angular/core';
import { crossCommunicationService } from '../../services/crossCommunication.service';
import { cityRestaurantsService } from '../../services/cityRestaurants.service';
import { Restaurant } from './restaurant.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
  providers: [cityRestaurantsService]
})
export class RestaurantsComponent {
  cityName: string = '';
  cityRestaurants: Restaurant[];

  constructor(private crossCommunicationServ: crossCommunicationService,
              private cityRestaurantServ: cityRestaurantsService,
              private router: Router) { }

  ngOnInit(): void {
    this.cityName = this.crossCommunicationServ.getSelectedCity()
    this.cityRestaurants = this.cityRestaurantServ.getRestaurants()
  }

  ngAfterContentChecked(): void {
    this.cityName = this.crossCommunicationServ.getSelectedCity()
  }

  openRestaurantDetails(restaurantItem: Restaurant) {
    this.router.navigate(['restaurant-view', restaurantItem.name])
  }
}
