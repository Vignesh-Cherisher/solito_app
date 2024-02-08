import { Dish } from "../home/dishes/dish.model"

export class cartDishesService {
  cartDishes: Dish[] = [
    new Dish(100, 'Biryani', 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png', '150', 'Long-grained rice (like basmati) flavored with fragrant spices such as saffron and layered with lamb, chicken, fish, or vegetables and a thick gravy. The dish is then covered, its lid secured with dough, and then the biryani is cooked over a low flame.', 1, false),
    new Dish(101, 'Pizza','https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png', '200', 'A perfect blend of Cheesey Macroni, Swirl of Jalapenos Dip & Cheese', 1, true),
    new Dish(105, 'Burger', 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png', '230', 'Big Mac sesame seeds bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-cocktail sauce served with pungent jalapeño slices, red onion slices, tomato slices, Cheddar cheese slice and crisp iceberg lettuce.', 1, false),
    new Dish(106, 'Cake', 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' , '55', 'A vanilla sponge based cake with a fresh strawberry filling topped with fresh white cream.', 1, true)
  ]

  getDishes(): Dish[] {
    return this.cartDishes
  }

  removeDishFromCart(index: number): Dish[] {
    this.cartDishes.splice(index, 1)
    return this.cartDishes
  }
}