import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewHomePageRoutingModule } from './new-home-page.routing.module';

import { NewHomePageComponent } from './new-home-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewHomePageRoutingModule
  ],
  declarations: [NewHomePageComponent]
})
export class NewHomePageModule {}
