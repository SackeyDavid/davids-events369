import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule) },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
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
      
    ]
  }
  ,
  {
    path: '',
    redirectTo: '/account/profile'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
