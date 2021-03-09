import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewHomePageComponent } from './new-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewHomePageRoutingModule {}
