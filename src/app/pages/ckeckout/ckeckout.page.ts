import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-ckeckout',
  templateUrl: './ckeckout.page.html',
  styleUrls: ['./ckeckout.page.scss'],
  standalone: false
})
export class CkeckoutPage implements OnInit {

  total: number = 0;
  user: any;
  isValidForm!: boolean;

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    bankAccount: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    cvc: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
    dueDate: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
    ]),
  });

  constructor(
    private cart: CartService,
    private router: Router,
    private toast: ToastService,
    private paymetService: PaymentService
  ) { }

  ngOnInit() {
    this.total = this.cart.getTotalPrice();
  }

  goToInvoice() {
    if (this.profileForm.valid) {
      this.paymetService.createPayment(this.profileForm.value);
      this.router.navigate(["/invoice"]);
    } else {
      this.toast.presentToast('Some of the fields are invalid', false);
    }
  }

}
