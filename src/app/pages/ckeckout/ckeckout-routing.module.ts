import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CkeckoutPage } from './ckeckout.page';

const routes: Routes = [
  {
    path: '',
    component: CkeckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CkeckoutPageRoutingModule {}
