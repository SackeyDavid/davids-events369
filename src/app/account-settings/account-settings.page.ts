import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  openHomePage() {
    this.router.navigate(['/home'])
  }

  openOrganizationProfilePage() {
    this.router.navigate(['/organization/profile'])
  }

}
