import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationMenuPage } from './organization-menu.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: OrganizationMenuPage
  // }
  {
    path: '',
    component: OrganizationMenuPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule) },
      {
        path: 'profile',
        loadChildren: () => import('../organization-profile/organization-profile.module').then( m => m.OrganizationProfilePageModule)
      },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      // },
      { 
        path: "user-page", 
        loadChildren: () => import('../user-page/user-page.module').then(m => m.UserPageModule) 
      },      
      {
        path: 'discover',
        loadChildren: () => import('../discover/discover.module').then( m => m.DiscoverPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      // {
      //   path: 'organization',
      //   loadChildren: () => import('../organization/organization.module').then( m => m.OrganizationPageModule)
      // },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'security',
        loadChildren: () => import('../security/security.module').then( m => m.SecurityPageModule)
      },
      {
        path: 'personal-info',
        loadChildren: () => import('../personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('../payments/payments.module').then( m => m.PaymentsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../privacy/privacy.module').then( m => m.PrivacyPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../basic-info-organization/basic-info-organization.module').then( m => m.BasicInfoOrganizationPageModule)
      },
      
    ]
  }
  ,
  {
    path: '',
    redirectTo: '/organization/profile'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationMenuPageRoutingModule {}
