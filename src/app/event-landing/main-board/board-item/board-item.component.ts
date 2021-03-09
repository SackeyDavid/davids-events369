import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  constructor() { }

  @Input() isActive: boolean = false;

  // isInactive = false;

  public itemClasses = {
    'big-board-event': this.isActive,
    'small-board-event': !this.isActive
  }

  ngOnInit(): void {
  }

}
