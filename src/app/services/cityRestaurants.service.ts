import { Restaurant } from "../home/restaurants/restaurant.model";

export class cityRestaurantsService {
  cityRestaurants: Restaurant[] = [
    new Restaurant('Cardiff Cafe', 'https://b.zmtcdn.com/data/pictures/chains/0/19575000/e56a84ea78f244edc324322ed3489844_o2_featured_v2.jpg?output-format=webp', 4.1, 'Coimbatore', 'Peelamedu, Coimbatore'),
    new Restaurant('Nagerkovil AryaBhavan', 'https://b.zmtcdn.com/data/pictures/7/20329197/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg?output-format=webp', 4.5, 'Coimbatore', 'Peelamedu, Coimbatore'),
    new Restaurant('Signature Combos', 'https://b.zmtcdn.com/data/pictures/9/20818189/d68c06839e572122ffc0cb01edb775a2_o2_featured_v2.jpg?output-format=webp', 4.3, 'Coimbatore', 'Kodissia, Coimbatore'),
    new Restaurant('Cardiff Cafe', 'https://b.zmtcdn.com/data/pictures/chains/0/19575000/e56a84ea78f244edc324322ed3489844_o2_featured_v2.jpg?output-format=webp', 4.1, 'Coimbatore', 'Lakshmi Mills, Coimbatore'),
    new Restaurant('Nagerkovil AryaBhavan', 'https://b.zmtcdn.com/data/pictures/7/20329197/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg?output-format=webp', 4.5, 'Coimbatore', 'RS Puram, Coimbatore'),
    new Restaurant('Signature Combos', 'https://b.zmtcdn.com/data/pictures/9/20818189/d68c06839e572122ffc0cb01edb775a2_o2_featured_v2.jpg?output-format=webp', 4.3, 'Coimbatore', 'Lakshmi Mills, Coimbatore'),
    new Restaurant('Cardiff Cafe', 'https://b.zmtcdn.com/data/pictures/chains/0/19575000/e56a84ea78f244edc324322ed3489844_o2_featured_v2.jpg?output-format=webp', 4.1, 'Coimbatore', 'Gandhipuram, Coimbatore'),
    new Restaurant('Nagerkovil AryaBhavan', 'https://b.zmtcdn.com/data/pictures/7/20329197/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg?output-format=webp', 4.5, 'Coimbatore', 'Lakshmi Mills, Coimbatore'),
    new Restaurant('Signature Combos', 'https://b.zmtcdn.com/data/pictures/9/20818189/d68c06839e572122ffc0cb01edb775a2_o2_featured_v2.jpg?output-format=webp', 4.3, 'Coimbatore', 'Singanallur, Coimbatore'),
    new Restaurant('Cardiff Cafe', 'https://b.zmtcdn.com/data/pictures/chains/0/19575000/e56a84ea78f244edc324322ed3489844_o2_featured_v2.jpg?output-format=webp', 4.1, 'Coimbatore', 'RS Puram, Coimbatore'),
    new Restaurant('Nagerkovil AryaBhavan', 'https://b.zmtcdn.com/data/pictures/7/20329197/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg?output-format=webp', 4.5, 'Coimbatore', 'Neelambur, Coimbatore'),
    new Restaurant('Signature Combos', 'https://b.zmtcdn.com/data/pictures/9/20818189/d68c06839e572122ffc0cb01edb775a2_o2_featured_v2.jpg?output-format=webp', 4.3, 'Coimbatore', 'KMCH, Coimbatore')
  ]

  getRestaurants():Restaurant[] {
    return this.cityRestaurants
  }
}