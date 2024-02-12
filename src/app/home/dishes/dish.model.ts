export class Dish {
  public dishId: number;
  public dishName: string;
  public imagePath: string;
  public price: string;
  public rating: number;
  public veg: boolean;
  public description: string;

  constructor(Id:number, dishName: string, imagePath?: string, price?: string, description?: string, veg?: boolean, rating?: number) {
    this.dishId = Id;
    this.dishName = dishName;
    if (imagePath !== undefined) {
      this.imagePath = imagePath;
    } else {
      this.imagePath = '../../../assets/images/dish-placeholder.png';
    }
    this.price = price ? price : '₹';
    this.rating = rating ? rating : null;
    this.veg = veg ? veg : false;
    this.description = description ? description : '';
  }
}