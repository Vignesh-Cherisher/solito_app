import { Component } from '@angular/core';
import { crossCommunicationService } from './services/crossCommunication.service';
import { cartDishesService } from './services/cartDishes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [crossCommunicationService, cartDishesService]
})
export class AppComponent {
  title = 'food-delivery-app';

  constructor(private crossCommunicationServ: crossCommunicationService, private cartDishesServ: cartDishesService) { }
}