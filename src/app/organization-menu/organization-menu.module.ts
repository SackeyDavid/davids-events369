import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationMenuPageRoutingModule } from './organization-menu-routing.module';

import { OrganizationMenuPage } from './organization-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationMenuPageRoutingModule
  ],
  declarations: [OrganizationMenuPage]
})
export class OrganizationMenuPageModule {}
