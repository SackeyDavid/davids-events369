import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  // { 
  //   path: "user-page", 
  //   loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule) 
  // },
  {
    path: 'home',
    loadChildren: () => import('./components/new-home-page/new-home-page.module').then( m => m.NewHomePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
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
  {
    path: 'account-settings',
    loadChildren: () => import('./account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
