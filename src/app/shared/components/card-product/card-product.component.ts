import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
  standalone: false
})
export class CardProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private router: Router) { }

  ngOnInit() { }

  navigate() {
    this.router.navigate(["detail-product/" + this.product.id]);
  }
}
