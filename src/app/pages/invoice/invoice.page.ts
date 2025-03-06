import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  standalone: false
})
export class InvoicePage implements OnInit {

  isValidForm!: boolean;
  profileForm: any;
  total = 0;
  bankAccount = "1234567890";

  constructor(
    private router: Router,
    private cart: CartService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.profileForm = this.paymentService.getPayment();
    this.total = this.cart.getTotalPrice();
    console.log(this.profileForm);
  }

  goToHome() {
    this.cart.destroyCart();
    this.paymentService.destroyPayment();
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }
}
