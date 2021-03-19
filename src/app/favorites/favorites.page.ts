import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

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
