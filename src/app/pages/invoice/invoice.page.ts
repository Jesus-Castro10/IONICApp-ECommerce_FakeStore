import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  standalone: false
})
export class InvoicePage implements OnInit {

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit() {
  }

  goToHome() {
    this.cart.destroyCart();
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }
}
