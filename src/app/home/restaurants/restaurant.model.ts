export class Restaurant {
  public name: string;
  public logoImagePath:string
  public rating: number;
  public cityName: string;
  public address: string;
  public imagePaths: string[];
  public restaurantId: string;

  constructor(name: string, logoImage:string, rating?: number, CityName?: string, address?: string, imagePaths?: string[] ) {
    this.name = name;
    this.logoImagePath = logoImage;
    this.rating = rating || 0;
    this.cityName = '';
    this.address = address || '';
    this.imagePaths = imagePaths || [];
    this.restaurantId = name.replace(' ', '-') + '-' + address.split(',').join().replace(' ', '-');
  }
}