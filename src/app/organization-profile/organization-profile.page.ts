import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.page.html',
  styleUrls: ['./organization-profile.page.scss'],
})
export class OrganizationProfilePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openAccountsPage() {
    // this.router.navigate(['account-settings'])
    this.router.navigate(['account/profile'])
  }

}
