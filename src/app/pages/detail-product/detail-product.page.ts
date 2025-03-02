import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: false
})
export class DetailProductPage implements OnInit {

  product: any = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    image: 'https://m.media-amazon.com/images/I/71weQvGyBFL._AC_SX569_.jpg',
    category: "men's clothing",
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.',
    bought: 120,
    rating: 3.9,
  };

  constructor() { }

  ngOnInit() {
  }

}
