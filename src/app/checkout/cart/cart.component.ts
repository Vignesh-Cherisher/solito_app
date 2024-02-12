import { Component, OnInit } from '@angular/core';
import { cartDishesService } from '../../services/cartDishes.service';
import { Cart, DishList } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Cart;
  cartItemDishes: DishList[]
  totalPrice: number = 0;

  constructor(private cartDishesServ: cartDishesService) {}

  ngOnInit() {
    this.cartItems = this.cartDishesServ.getCartItems()
    this.cartItemDishes = this.cartItems.dishList
    this.totalPrice = this.cartDishesServ.getTotalPrice(this.cartItemDishes)
  }

  incrementDishQuantity(cartItem: DishList) {
    cartItem.quantity += 1
    this.totalPrice = this.cartDishesServ.getTotalPrice(this.cartItemDishes)
  }

  decrementDishQuantity(cartItem: DishList, index: number) {
    if(cartItem.quantity > 1) {
      cartItem.quantity -= 1
    } else {
      this.removeCartDish(index)
    }
    this.totalPrice = this.cartDishesServ.getTotalPrice(this.cartItemDishes)
  }

  removeCartDish(index: number) {
    this.cartItemDishes = this.cartDishesServ.removeDishFromCart(index)
  }

  checkoutCartItems() {

  }
}
