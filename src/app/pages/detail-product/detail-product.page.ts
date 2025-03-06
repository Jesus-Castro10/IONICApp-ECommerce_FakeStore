import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product-service.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: false
})
export class DetailProductPage implements OnInit {

  id: string | null = '';
  product !: Product;
  amount: string = '0';

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

  getProduct(id: any) {
    this.service.getProduct(id).subscribe({
      next: (rest: any) => {
        this.product = rest;
        console.log(rest);
      },
      error: (error: any) => { }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.amount = this.cartService.getQuantity();
    this.toastService.presentToast('Product added to cart', true);
  }

}
