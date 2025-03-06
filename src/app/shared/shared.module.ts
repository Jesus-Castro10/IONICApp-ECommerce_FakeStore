import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service.service';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

const COMPONENTS = [CardProductComponent, HeaderComponent, PersonalInformationComponent, CartItemComponent];
const MODULES = [CommonModule, IonicModule, FormsModule, HttpClientModule, ReactiveFormsModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ],
  exports: [...COMPONENTS, ...MODULES],
  providers: [ProductService]
})
export class SharedModule { }
