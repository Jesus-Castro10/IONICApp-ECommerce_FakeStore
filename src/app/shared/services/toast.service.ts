import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(message: string, isSuccess: boolean) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      color: isSuccess ? 'success' : 'danger', // Verde si es éxito, rojo si es error
      position: 'top',
    });

    await toast.present();
  }
}
