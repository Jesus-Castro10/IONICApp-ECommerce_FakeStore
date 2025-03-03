import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductCart } from 'src/app/shared/interfaces/product-cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: false
})
export class DetailProductPage implements OnInit {

  id: string | null = '';
  product !: Product;

  constructor(private service: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

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
    window.location.reload();
  }

}
