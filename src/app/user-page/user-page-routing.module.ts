import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageContainerComponent } from './user-page-container/user-page-container.component';

const routes: Routes = [
  { path: "", component: UserPageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
