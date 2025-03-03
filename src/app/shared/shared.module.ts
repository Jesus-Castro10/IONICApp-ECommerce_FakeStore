import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service.service';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [CardProductComponent, HeaderComponent];
const MODULES = [CommonModule, IonicModule, FormsModule, HttpClientModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ],
  exports: [...COMPONENTS, ...MODULES],
  providers: [ProductService]
})
export class SharedModule { }
