import { Cart, DishList } from "../checkout/cart/cart.model"


export class cartDishesService {
  cartItems: Cart = new Cart('Cardiff Cafe', [
    new DishList('Biryani', 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png', '150', 1, false),
    new DishList('Pizza','https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png', '200', 1, true),
    new DishList('Burger', 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png', '230', 1, false),
    new DishList('Cake', 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' , '55', 1, true)
  ])

  getCartItems(): Cart {
    return this.cartItems
  }

  removeDishFromCart(index: number): DishList[] {
    this.cartItems.dishList.splice(index, 1)
    return this.cartItems.dishList
  }

  getTotalPrice(cartItemDishes: DishList[]):number {
    let total=0;
    for(let i=0; i < cartItemDishes.length; i++) {
      total += cartItemDishes[i].quantity * +cartItemDishes[i].price
    }
    return total
  }
}