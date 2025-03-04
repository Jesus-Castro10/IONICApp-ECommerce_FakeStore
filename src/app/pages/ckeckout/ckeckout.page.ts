import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-ckeckout',
  templateUrl: './ckeckout.page.html',
  styleUrls: ['./ckeckout.page.scss'],
  standalone: false
})
export class CkeckoutPage implements OnInit {

  total: number = 0;

  constructor(private cart: CartService, private router: Router) { }

  ngOnInit() {
    this.total = this.cart.getTotalPrice();
  }

  goToInvoice() {
    // this.cart.destroyCart();
    this.router.navigate(["/invoice"]);
  }
}
