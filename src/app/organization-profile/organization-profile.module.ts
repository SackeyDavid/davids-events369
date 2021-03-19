import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationProfilePageRoutingModule } from './organization-profile-routing.module';

import { OrganizationProfilePage } from './organization-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationProfilePageRoutingModule
  ],
  declarations: [OrganizationProfilePage]
})
export class OrganizationProfilePageModule {}
