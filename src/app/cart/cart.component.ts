import { Component, OnInit } from '@angular/core';
import { Dish } from '../home/dishes/dish.model';
import { cartDishesService } from '../services/cartDishes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartDishItems: Dish[];

  constructor(private cartDishesServ: cartDishesService) {}

  ngOnInit() {
    this.cartDishItems = this.cartDishesServ.getDishes()
  }

  incrementDishQuantity(cartItem: Dish) {
    cartItem.quantity += 1
  }

  decrementDishQuantity(cartItem: Dish, index: number) {
    if(cartItem.quantity > 1) {
      cartItem.quantity -= 1
    } else {
      this.removeCartDish(index)
    }
  }

  removeCartDish(index: number) {
    this.cartDishItems = this.cartDishesServ.removeDishFromCart(index)
  }

  checkoutCartItems() {
    
  }
}
