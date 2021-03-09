import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailsRoutingModule } from './event-details-routing.module';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { ItemsComponent } from './schedule/items/items.component';
import { ScheduleTabsComponent } from './schedule/schedule-tabs/schedule-tabs.component';
import { EventLandingModule } from '../event-landing/event-landing.module';
import { ScheduleDayComponent } from './schedule/schedule-day/schedule-day.component';
import { AllAttendeesComponent } from './attendees/all-attendees/all-attendees.component';
import { AttendeeThumbComponent } from './attendees/attendee-thumb/attendee-thumb.component';
import { ThumbsWrapperComponent } from './attendees/thumbs-wrapper/thumbs-wrapper.component';
import { AllOrganisersComponent } from './organisers/all-organisers/all-organisers.component';
import { OrganiserThumbComponent } from './organisers/organiser-thumb/organiser-thumb.component';


@NgModule({
  declarations: [
    DetailsContainerComponent, 
    ItemsComponent, 
    ScheduleTabsComponent, 
    ScheduleDayComponent, 
    AllAttendeesComponent, 
    AttendeeThumbComponent, 
    ThumbsWrapperComponent, AllOrganisersComponent, OrganiserThumbComponent
  ],
  imports: [
    CommonModule,
    EventDetailsRoutingModule,
    EventLandingModule
  ]
})
export class EventDetailsModule { }
