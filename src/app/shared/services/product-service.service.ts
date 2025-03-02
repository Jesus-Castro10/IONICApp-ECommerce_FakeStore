import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.baseUrl + environment.products)
  }

  //   getProduct(id: any){
  //     return this.http.get(environment.baseUrl + environment.product + id)
  // }
}
