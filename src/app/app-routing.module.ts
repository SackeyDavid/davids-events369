import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';

const routes: Routes = [
  { 
    path: "event-landing", 
    loadChildren: () => import('./event-landing/event-landing.module').then(m => m.EventLandingModule) 
  },
  { 
    path: "event-page", 
    loadChildren: () => import('./event-page/event-page.module').then(m => m.EventPageModule) 
  },
  { 
    path: "event-details", 
    loadChildren: () => import('./event-details/event-details.module').then(m => m.EventDetailsModule) 
  },
  {
    path: 'home',
    loadChildren: () => import('./components/new-home-page/new-home-page.module').then( m => m.NewHomePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: 'account',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./organization-menu/organization-menu.module').then( m => m.OrganizationMenuPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: SignupPageComponent
  },
  {
    path: 'event_details',
    component: EventPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




























  // { 
  //   path: "user-page", 
  //   loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule) 
  // },
  // {
  //   path: 'discover',
  //   loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  // },
  // {
  //   path: 'messages',
  //   loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  // },
