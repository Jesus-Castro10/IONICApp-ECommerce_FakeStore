import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: false
})
export class CartItemComponent implements OnInit {

  @Output() cartItems: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() item: any;
  @Output() total: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private cartService: CartService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  getTotalPrice() {
    this.total.emit(this.cartService.getTotalPrice());
  }

  increaseQuantity(id: any) {
    this.cartItems.emit(this.cartService.increaseQuantity(id));
    this.getTotalPrice();
  }

  decreaseQuantity(id: any) {
    this.cartItems.emit(this.cartService.decreaseQuantity(id));
    this.getTotalPrice();
  }

  deleteToCart(id: any) {
    this.cartItems.emit(this.cartService.deleteToCart(id));
    this.getTotalPrice();
    this.toast.presentToast('Product removed from cart', false);
  }
}
