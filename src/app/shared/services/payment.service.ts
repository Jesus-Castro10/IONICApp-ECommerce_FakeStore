import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  createPayment(payment: any): void {
    localStorage.setItem('payment', JSON.stringify(payment));
  }

  getPayment(): any {
    return localStorage.getItem('payment')
  }

  destroyPayment(): void {
    localStorage.removeItem('payment');
  }
}
