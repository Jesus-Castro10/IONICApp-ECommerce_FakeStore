import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/shared/interfaces/product-cart';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage implements OnInit {

  cartItems: ProductCart[] = [];
  total: number = 0;
  constructor(private cartSevice: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartSevice.getCartItems();
    this.getTotalPrice();
    console.log(this.cartItems);
  }

  getTotalPrice() {
    this.cartItems.forEach(product => {
      this.total += product.price * product.quantity;
    });
  }

  increaseQuantity(id: any) {
    this.cartSevice.increaseQuantity(id - 1);
  }

  decreaseQuantity(id: any) {
    this.cartSevice.decreaseQuantity(id - 1);
  }
}
