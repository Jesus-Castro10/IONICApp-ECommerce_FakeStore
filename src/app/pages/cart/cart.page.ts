import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private cartSevice: CartService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.cartSevice.getCartItems();
    this.getTotalPrice();
    console.log(this.cartItems);
  }

  getTotalPrice() {
    this.total = this.cartSevice.getTotalPrice();
  }

  increaseQuantity(id: any) {
    this.cartItems = this.cartSevice.increaseQuantity(id);
    this.getTotalPrice();
  }

  decreaseQuantity(id: any) {
    this.cartItems = this.cartSevice.decreaseQuantity(id);
    this.getTotalPrice();
  }

  deleteToCart(id: any) {
    this.cartItems = this.cartSevice.deleteToCart(id);
    this.getTotalPrice();
  }
  goCheckout() {
    this.router.navigate(["/checkout"]);
  }
}
