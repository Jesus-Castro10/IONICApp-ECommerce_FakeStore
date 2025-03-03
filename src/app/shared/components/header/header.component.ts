import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "Mi ECommerce";
  @Input() backRoute!: string;
  @Input() showCart: boolean = false;

  total: string = '0';

  constructor(private router: Router, private service: CartService) { }

  ngOnInit() {
    this.total = this.service.getQuantity();
  }

  navigate() {
    this.router.navigate(["/intro"]);
  }

  goToCart() {
    this.router.navigate(["/cart"]);
  }
}
