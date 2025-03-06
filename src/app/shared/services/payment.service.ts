import { Injectable } from '@angular/core';
import { PaymetInformation } from '../interfaces/paymet-information';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  createPayment(payment: any): void {
    localStorage.setItem('payment', JSON.stringify(payment));
  }

  getPayment(): PaymetInformation | null {
    const json = localStorage.getItem('payment');
    return json ? JSON.parse(json) : null;
  }

  destroyPayment(): void {
    localStorage.removeItem('payment');
  }
}
