import { Dish } from "../home/dishes/dish.model"

export class topDishesService {
    topDishes: Dish[] = [
    new Dish(205,'Biryani', 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'),
    new Dish(200, 'Pizza','https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' ),
    new Dish(203, 'Burger', 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' ),
    new Dish(210, 'Cake', 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' ),
    new Dish(211, 'Sandwich', 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png' ),
    new Dish(202,'Chicken', 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'),
    new Dish(215,'Noodles', 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png'),
    new Dish(218,'North Indian', 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg'),
    new Dish(212,'Rolls', 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png')
  ]

  getDishes(): Dish[] {
    return this.topDishes
  }
}