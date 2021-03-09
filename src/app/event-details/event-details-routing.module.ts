import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAttendeesComponent } from './attendees/all-attendees/all-attendees.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { AllOrganisersComponent } from './organisers/all-organisers/all-organisers.component';
import { ScheduleTabsComponent } from './schedule/schedule-tabs/schedule-tabs.component';

const routes: Routes = [
  { 
    path: "", 
    component: DetailsContainerComponent,
    children: [
      { path: "schedule", component: ScheduleTabsComponent },
      { path: "attendees", component: AllAttendeesComponent },
      { path: "organisers", component: AllOrganisersComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsRoutingModule { }
