import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

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
