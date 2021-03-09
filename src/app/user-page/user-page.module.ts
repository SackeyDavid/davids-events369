import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageContainerComponent } from './user-page-container/user-page-container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabPane1Component } from './tab-pane1/tab-pane1.component';
import { TabPane2Component } from './tab-pane2/tab-pane2.component';
import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';
import { UpcomingTopComponent } from './upcoming-top/upcoming-top.component';
import { UpcomingExtrasComponent } from './upcoming-extras/upcoming-extras.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    UserPageContainerComponent, 
    SidenavComponent, 
    TabPane1Component, 
    TabPane2Component, 
    UpcomingListComponent, UpcomingTopComponent, UpcomingExtrasComponent, SearchBarComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MatTabsModule
  ]
})
export class UserPageModule { }
