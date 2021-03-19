import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicInfoOrganizationPage } from './basic-info-organization.page';

const routes: Routes = [
  {
    path: '',
    component: BasicInfoOrganizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicInfoOrganizationPageRoutingModule {}
