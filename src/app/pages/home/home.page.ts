import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  products: Product[] = [];
  categories: string[] = [];

  selectedCategory = 'all';

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
  sortProducts(order: string) {
    this.products.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  filterProducts() {
    console.log(this.selectedCategory);
    if (this.selectedCategory !== 'all') {
      this.service.getProductByCategory(this.selectedCategory).subscribe({
        next: (rest: any) => {
          this.products = rest;
        },
        error: (error: any) => { }
      })
    } else {
      this.getProducts();
    }
  }

  getProducts() {
    this.service.getProducts().subscribe({
      next: (rest: any) => {
        this.products.push(...rest)
      },
      error: (error: any) => { }
    })
  }

  getCategories() {
    this.service.getCategories().subscribe({
      next: (rest: any) => {
        this.categories.push(...rest)
      },
      error: (error: any) => { }
    })
  }
}
