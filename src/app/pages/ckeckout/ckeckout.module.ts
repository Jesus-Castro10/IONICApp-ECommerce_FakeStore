import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CkeckoutPageRoutingModule } from './ckeckout-routing.module';

import { CkeckoutPage } from './ckeckout.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CkeckoutPageRoutingModule
  ],
  declarations: [CkeckoutPage]
})
export class CkeckoutPageModule { }
