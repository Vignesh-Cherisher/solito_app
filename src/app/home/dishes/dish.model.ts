export class Dish {
  public dishName: string;
  public imagePath: string;
  public price: string;
  public rating: number;
  public type: boolean;

  constructor(dishName: string, imagePath?: string, price?: string, rating?: number, type?: boolean) {
    this.dishName = dishName;
    if (imagePath !== undefined) {
      this.imagePath = imagePath;
    } else {
      this.imagePath = '../../../assets/images/dish-placeholder.png';
    }
    this.price = price ? price : '₹';
    this.rating = rating ? rating : null;
    this.type = type ? type : false;
  }
}