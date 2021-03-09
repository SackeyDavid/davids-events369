import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceContainerComponent } from './conference-event/conference-container/conference-container.component';

import { EventPageContainerComponent } from './event-page-container/event-page-container.component';
import { ExternalContainerComponent } from './external-event/external-container/external-container.component';
import { StreamingContainerComponent } from './streaming-event/streaming-container/streaming-container.component';

const routes: Routes = [
  {
    path: "",
    component: EventPageContainerComponent,
    children: [
      { path: "streaming", component: StreamingContainerComponent },
      { path: "conference", component: ConferenceContainerComponent },
      { path: "external", component: ExternalContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPageRoutingModule { }
