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

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  getTotalPrice(total: number) {
    this.total = total;
  }

  getCartItems(cartItems: any) {
    this.cartItems = cartItems;
  }

  goCheckout() {
    this.router.navigate(["/checkout"]);
  }
}
