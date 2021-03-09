import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'grid-outline',
      beta: false
    },
    {
      title: 'Discover',
      url: '/menu/discover',
      icon: 'search-outline',
      beta: true
    },
    {
      title: 'Messages',
      url: '/menu/messages',
      icon: 'chatbubble-ellipses-outline',
      beta: true
    },
    {
      title: 'Settings',
      url: '/menu/settings',
      icon: 'settings-outline',
      beta: false
    },
    
  ]

  selectedPath = ''

  
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    ) {
      
      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      })
    }
}
