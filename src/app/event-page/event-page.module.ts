import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { EventLandingModule } from '../event-landing/event-landing.module';

import { EventPageRoutingModule } from './event-page-routing.module';
import { EventPageContainerComponent } from './event-page-container/event-page-container.component';
import { StreamingContainerComponent } from './streaming-event/streaming-container/streaming-container.component';
import { ConferenceContainerComponent } from './conference-event/conference-container/conference-container.component';
import { ExternalContainerComponent } from './external-event/external-container/external-container.component';
import { StreamingPortComponent } from './streaming-event/streaming-port/streaming-port.component';
import { StreamingDetailsComponent } from './streaming-event/streaming-details/streaming-details.component';
import { EventChatComponent } from './event-chat/event-chat.component';
import { ParticipantsComponent } from './conference-event/participants/participants.component';
import { ConferenceSpaceComponent } from './conference-event/conference-space/conference-space.component';
import { ExternalDetailsComponent } from './external-event/external-details/external-details.component';
import { ExternalMapComponent } from './external-event/external-map/external-map.component';


@NgModule({
  declarations: [
    EventPageContainerComponent, 
    StreamingContainerComponent, 
    ConferenceContainerComponent, 
    ExternalContainerComponent, 
    StreamingPortComponent, 
    StreamingDetailsComponent, 
    EventChatComponent, ParticipantsComponent, ConferenceSpaceComponent, ExternalDetailsComponent, ExternalMapComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    EventPageRoutingModule,
    EventLandingModule
  ]
})
export class EventPageModule { }
