import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'

import { EventLandingRoutingModule } from './event-landing-routing.module';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { BoardPortComponent } from './main-board/board-port/board-port.component';
import { BottomContainerComponent } from './bottom-pane/bottom-container/bottom-container.component';
import { SideContainerComponent } from './side-pane/side-container/side-container.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BoardItemComponent } from './main-board/board-item/board-item.component';
import { CompaniesContainerComponent } from './bottom-pane/companies/companies-container/companies-container.component';
import { CompanyThumbComponent } from './bottom-pane/companies/company-thumb/company-thumb.component';
import { SpeakersContainerComponent } from './bottom-pane/speakers/speakers-container/speakers-container.component';
import { SpeakerThumbComponent } from './bottom-pane/speakers/speaker-thumb/speaker-thumb.component';
import { SponsorsContainerComponent } from './bottom-pane/sponsors/sponsors-container/sponsors-container.component';
import { SponsorThumbComponent } from './bottom-pane/sponsors/sponsor-thumb/sponsor-thumb.component';
import { OverviewComponent } from './side-pane/overview/overview.component';
import { ShowroomContainerComponent } from './side-pane/showrooms/showroom-container/showroom-container.component';
import { ChatContainerComponent } from './side-pane/live-chat/chat-container/chat-container.component';
import { FilesComponent } from './side-pane/files/files.component';
import { ShowroomItemComponent } from './side-pane/showrooms/showroom-item/showroom-item.component';


@NgModule({
  declarations: [
    LandingContainerComponent, 
    BoardPortComponent, 
    BottomContainerComponent, 
    SideContainerComponent, 
    TopbarComponent, 
    BoardItemComponent, 
    CompaniesContainerComponent, 
    CompanyThumbComponent, 
    SpeakersContainerComponent, 
    SpeakerThumbComponent, 
    SponsorsContainerComponent, 
    SponsorThumbComponent, 
    OverviewComponent, 
    ShowroomContainerComponent, 
    ChatContainerComponent, 
    FilesComponent, 
    ShowroomItemComponent,
  ],
  imports: [
    CommonModule,
    EventLandingRoutingModule,
    MatTabsModule,
  ],
  exports: [
    TopbarComponent
  ]
})
export class EventLandingModule { }
