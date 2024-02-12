export class Cart {
  public restaurantName: string;
  public dishList: DishList[];

  constructor(restaurantName: string, dishList:DishList[]) {
    this.restaurantName = restaurantName === this.restaurantName ? restaurantName : this.changeRestaurantName(restaurantName);
    this.dishList = []
    this.dishList.push(...dishList);
  }

  changeRestaurantName(restaurantName: string): string {
    return restaurantName;
  }
}

export class DishList {
  public dishName: string;
  public imagePath: string;
  public price: string;
  public quantity: number;
  public veg: boolean;

  constructor(dishName: string, imagePath: string, price: string, quantity: number, veg: boolean) {
    this.dishName = dishName;
    this.imagePath = imagePath;
    this.price = price;
    this.quantity = quantity;
    this.veg = veg;
  }
}