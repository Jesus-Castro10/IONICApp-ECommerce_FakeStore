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

  filteredProducts = [...this.products];
  selectedCategory = 'all';

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  sortProducts(order: string) {
    //   this.filteredProducts.sort((a, b) =>
    //     order === 'asc' ? a.price - b.price : b.price - a.price
    //   );
  }

  filterProducts() {
    // this.filteredProducts =
    //   this.selectedCategory === 'all'
    //     ? [...this.products]
    //     : this.products.filter(p => p.category === this.selectedCategory);
  }

  getProducts() {
    this.service.getProducts().subscribe({
      next: (rest: any) => {
        this.products.push(...rest)
        console.log(this.products);
      },
      error: (error: any) => { }
    })
  }
}
