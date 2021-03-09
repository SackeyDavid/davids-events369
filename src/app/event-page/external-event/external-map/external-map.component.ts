import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-map',
  templateUrl: './external-map.component.html',
  styleUrls: ['./external-map.component.css']
})
export class ExternalMapComponent implements OnInit {

  constructor() { }

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  ngOnInit(): void {
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }
  
}
