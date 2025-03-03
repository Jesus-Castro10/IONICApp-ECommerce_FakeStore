import { Injectable } from '@angular/core';
import { ProductCart } from '../interfaces/product-cart';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  addToCart(product: Product) {
    let cartItems = this.getCartItems();
    let item = cartItems.find((item: any) => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('total', cartItems.length.toString());
  }

  getQuantity() {
    return localStorage.getItem('total') || '0';
  }

  decreaseQuantity(id: any) {
    let cartItems = this.getCartItems();
    let item = cartItems.find((item: any) => item.id === id);
    if (item.quantity > 1) {
      item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  increaseQuantity(id: any) {
    let cartItems = this.getCartItems();
    let item = cartItems.find((item: any) => item.id === id);
    item.quantity++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
