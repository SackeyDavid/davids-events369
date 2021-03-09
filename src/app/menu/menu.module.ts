import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule) },
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
      
    ]
  }
  ,
  {
    path: '',
    redirectTo: '/menu/home'
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
