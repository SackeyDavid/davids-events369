import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicInfoOrganizationPageRoutingModule } from './basic-info-organization-routing.module';

import { BasicInfoOrganizationPage } from './basic-info-organization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicInfoOrganizationPageRoutingModule
  ],
  declarations: [BasicInfoOrganizationPage]
})
export class BasicInfoOrganizationPageModule {}
