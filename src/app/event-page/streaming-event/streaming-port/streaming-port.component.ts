import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-streaming-port',
  templateUrl: './streaming-port.component.html',
  styleUrls: ['./streaming-port.component.css']
})
export class StreamingPortComponent implements OnInit {

  constructor() { }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  ngOnInit(): void {
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
