import { Component, OnInit, ElementRef, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { EventsService } from 'src/app/services/events/events.service';
import * as $ from "jquery";
import * as moment from 'moment';

@Component({
  selector: 'app-new-home-page',
  templateUrl: './new-home-page.component.html',
  styleUrls: ['./new-home-page.component.scss']
})
export class NewHomePageComponent implements OnInit, AfterViewInit, AfterContentInit {

  // @ViewChild('videoPlayer') myVideo: ElementRef;
  // @ViewChild('videoPlayer', {read: ElementRef, static: true}) videoElement: any;
  @ViewChild('slidesLiveStream', {static: false}) slidesLiveStream: IonSlides;
  @ViewChild('slidesStartingSoon', {static: false}) slidesStartingSoon: IonSlides;
  @ViewChild('slidesPopular', {static: false}) slidesPopular: IonSlides;
  @ViewChild('slidesNew', {static: false}) slidesNew: IonSlides;

  slidePrevsLiveStream() {
    this.slidesLiveStream.slidePrev();
  }
  slideNextLiveStream() {

    this.slidesLiveStream.slideNext();
  }

  slidePrevsStartingSoon() {
    this.slidesStartingSoon.slidePrev();
  }
  slideNextStartingSoon() {
    this.slidesStartingSoon.slideNext();
    // console.log('clicked')
  }

  slidePrevsPopular() {
    this.slidesPopular.slidePrev();
  }
  slideNextPopular() {

    this.slidesPopular.slideNext();
  }
  
  slidePrevsNew() {
    this.slidesNew.slidePrev();
  }
  slideNextNew() {

    this.slidesNew.slideNext();
  }

  sliderConfig = {
    spaceBetween:   0,
    // centeredSlides: true,
    slidesPerView: 6
    // autoplay: true
  }

  bannerSliderConfig = {
      spaceBetween:   1,
      centeredSlides: true,
      initialSlide: 1,
      slidesPerView: 1,
      autoplay: true,
      speed: 2000
    
  }

  public discover: string

  

  banners = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', title: 'Human Connections.', header: 'Online events.', subtitle: 'Made for You', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fbanner--202102-birthday.webp?alt=media&token=3c1bc412-f6e5-45fa-8aeb-216c7c480365'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', title: 'Plan With Us', header: 'Moved by Music', subtitle: '', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fbanner--202102-music.webp?alt=media&token=101c7ce4-4ef4-4076-818a-87064447549a'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', title: 'For Events Organizing', header: 'Biggest Platform', subtitle: '', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fbanner--202102-outdoor.webp?alt=media&token=ac266e1b-d20c-4608-a0f5-bb24d7fbbba5'},
    
  ]

  products = [
    { id: this.getRandomInt(0, 9999999999), location: 'Spintex', watching: '290', video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-rodnae-productions-6193112.mp4?alt=media&token=49f3ece0-2867-471c-82f4-75c430a7fdde', time: ' 4 min ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: "Emy's Birthday Party", paid: false, price: '10', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-09h39m03s359.webp?alt=media&token=6e8bba57-faba-42e5-9772-406d5d4258eb'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', watching: '323', video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-kindel-media-6775036.mp4?alt=media&token=f39f516b-83de-405b-8c6c-b8f197203d02', time: '30 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Lancaster TechPreneur SDG Conference', paid: false, price: '17', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fteemu-paananen-bzdhc5b3Bxs-unsplash%20(2).jpg?alt=media&token=2f2767b5-6027-4d17-8d90-ff5864c915c5'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', watching: '563', video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-thirdman-6193608.mp4?alt=media&token=0cee438a-c7e2-40a3-a708-436e7433f2b7', time: '50 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Orchestra Chorals By Stephany Abam', paid: true, price: '12', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h15m51s777.webp?alt=media&token=aef06499-be15-44d1-9286-1ee88bdee6bd'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', watching: '653', video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204705871.mp4?alt=media&token=2c6db7c3-5f8e-4db1-9925-47776231a3c5', time: '20 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Guitar Play With Adams', paid: false, price: '13', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h19m39s495.webp?alt=media&token=234935d2-51f5-441e-82d0-006e430ec833'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra',  watching: '445',video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204057975.mp4?alt=media&token=6034584f-7f06-4dc0-b56d-ba10d11e0865', time: '24 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Cooking At Home With Maame Ama', paid: true, price: '12', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h21m48s626.webp?alt=media&token=dcbbfb60-5797-4c29-a551-7c4e7502dead'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', watching: '563', video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-thirdman-6193608.mp4?alt=media&token=0cee438a-c7e2-40a3-a708-436e7433f2b7', time: '50 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Orchestra Chorals By Stephany Abam', paid: true, price: '12', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h15m51s777.webp?alt=media&token=aef06499-be15-44d1-9286-1ee88bdee6bd'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', watching: '653', video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204705871.mp4?alt=media&token=2c6db7c3-5f8e-4db1-9925-47776231a3c5', time: '20 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Guitar Play With Adams', paid: false, price: '13', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h19m39s495.webp?alt=media&token=234935d2-51f5-441e-82d0-006e430ec833'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra',  watching: '445',video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204057975.mp4?alt=media&token=6034584f-7f06-4dc0-b56d-ba10d11e0865', time: '24 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Cooking At Home With Maame Ama', paid: true, price: '12', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h21m48s626.webp?alt=media&token=dcbbfb60-5797-4c29-a551-7c4e7502dead'},
    
  ]

  
  
  data: any
  events: any

  event_categories: any

  category_name: string
  temp_category: string

  show_skeleton: boolean = false
  page_loaded: boolean = false

  watched_videos = []
  _x = this;

  // date: any
  
  constructor(
    private menuController: MenuController,
    private eventservice: EventsService
  ) {
      // console.log(this._x); 
      var _x = this._x
      $(document).ready(function(){
        //  alert('JQuery is working!!');
        $("._1g2tewe5").on("mouseover", function(event) {
        // console.log(_x.watched_videos)
        // show video div
        $(this).find('video').get(0).style.setProperty('display', 'block')

        if(_x.watched_videos.length > 0) {
          
          if(($.inArray($(this).find('video').get(0).id, _x.watched_videos)) == -1) {
              
              $(this).find('video').get(0).play()

              // _x.watched_videos.push($(this).find('video').get(0).id)
          } else {

          }
          
        } else {

          $(this).find('video').get(0).play()

          // _x.watched_videos.push($(this).find('video').get(0).id)
        }
        
        
      
    
      }).on('mouseout', function(event) {
        $(this).find('video').get(0).pause()
        $(this).find('video').get(0).currentTime = 0;
        $(this).find('video').get(0).style.setProperty('display', 'none')
        // this.pause();
    
      });
      
    })
  }

  ngOnInit() {
    this.eventservice.getAllEvents()
    .subscribe(
      data => {
        // console.log(data)
        this.data = data
        this.events = this.data.events
      }
    );

    this.eventservice.getAllCategories()
    .subscribe(
      data => {
        // console.log(data)
        this.event_categories = data
        this.event_categories = this.event_categories.categories
      }
    )
  }

  ngAfterViewInit() {
    // $(document).ready(function(){
    //  alert('JQuery is working!!');
    // var watched_videos = []
    
      // $("._1g2tewe5").on("mouseover", function(event) {
        
        // check if any videos have been watched

        // logic
        // if video hasn't been hovered before 
        // play video automatically on hover
        // otherwise let user play video manually, 
        // if they've watched the video automatically already
        // by hovering on the video
        
        // if(watched_videos.length > 0) {
          
          // if(($.inArray($(this).find('video').get(0).id, watched_videos)) == -1) {
              
              // $(this).find('video').get(0).play()

              // watched_videos.push($(this).find('video').get(0).id)
          // } else {

          // }
          
        // } else {

          // $(this).find('video').get(0).play()

          // watched_videos.push($(this).find('video').get(0).id)
        // }
        
        
        
        // console.log($(this).find('video').get(0).id)
        // watched_videos.push($(this).find('video').get(0).id)
        // console.log(watched_videos)
        // this.play();
    
      // }).on('mouseout', function(event) {
        // $(this).find('video').get(0).pause()
        // this.pause();
    
      // });
    // })
  }

  ngAfterContentInit() {

    setTimeout(() => {

      let eventCards = document.getElementsByClassName('_sqvp1j')
      // console.log(eventCards)
      for (let i = 0; i < eventCards.length; i++) {
        eventCards[i].addEventListener("mouseenter", function( event ) {
          // highlight the mouseenter target
          // event.target.style.color = "purple";
        
          // reset the color after a short delay
          // setTimeout(function() {
          //   event.target.style.color = "";
          // }, 500);
        }, false);
        
        
      }
    // video.pause()

    //   video.oninput = e => {
        //     // this.newMsg = ((<HTMLTextAreaElement>e.target).value)
            
        //     // this.scrollToBottom()
    
        // };
      // this.videoElement = this.videoElement.nativeElement
      // this.videoElement.pause()
      // this.videoElement.style.color = '#fff'
      // this.toolbarElement.style.paddingTop = '5%'
      // if(this.getMarketId()) {
      //   this.toolbarElement.style.setProperty('--background', 'var(--ion-color-' + this.getMarketId()+')'); 
      // }

      
    }, 5000)

    
  }

  openMenu() {
    // this.menuController.toggle()
    this.menuController.enable(true)
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ionViewWillEnter() {
    this.discover = "All";
    // this.temp_category = this.discover
    // if(document.getElementById(this.getCategoryId(this.discover))) document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block');
  }

  getCategoryId(category: string) {
    this.category_name = category
    this.category_name = this.category_name.toLowerCase()
    this.category_name = this.category_name.replace(/\s/g,'-')

    // console.log(this.zone_name)
    return this.category_name
  }

  segmentChanged(e: Event) {
    this.show_skeleton = true

    if(!this.page_loaded) {
      
        // setTimeout(() => {
          this.show_skeleton = false
          this.page_loaded = true
        //   document.getElementById(this.getCategoryId(this.temp_category)).style.setProperty('display', 'none')
        // this.temp_category = this.discover
        // document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block')
        
        // }, 5000);
    } else {
      // document.getElementById(this.getCategoryId(this.temp_category)).style.setProperty('display', 'none')
      // this.temp_category = this.discover
      // document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block')
      
    }
    
  }

  pauseVideo(video_id) {
    // hide pause control
    // var pauseControl = document.getElementById('video-pause-'+video_id) as HTMLButtonElement
    // pauseControl.onclick = e => {
    //   ((<HTMLButtonElement>e.target).setAttribute('display', 'none'));
    // }
    document.getElementById('video-pause-'+video_id).style.setProperty('display', 'none')
    // pauseControl

    // pause video
    // var video = document.getElementById('video-'+video_id) as HTMLVideoElement;
    // video.pause()
    $('#video-'+video_id).get(0).pause()
    this._x.watched_videos.push($('#video-'+video_id).get(0).id)
    // console.log(_x)


    // show play control
    document.getElementById('video-play-'+video_id).style.setProperty('display', 'block')
    // playControl
    

    //   video.oninput = e => {
    //     // this.newMsg = ((<HTMLTextAreaElement>e.target).value)
        
    //     // this.scrollToBottom()

    // };

    // console.log(video, video_id)
  }

  playVideo(video_id) {
    // hide play control
    document.getElementById('video-play-'+video_id).style.setProperty('display', 'none')
    
    // play video
    // var video = document.getElementById('video-'+video_id) as HTMLVideoElement;
    // video.play()
    $('#video-'+video_id).get(0).play()
    // this._x.watched_videos.sl($('#video-'+video_id).get(0).id)
    this._x.watched_videos = $.grep(this._x.watched_videos, function(value) {
      return value != $('#video-'+video_id).get(0).id;
    });

    // show pause control
    document.getElementById('video-pause-'+video_id).style.setProperty('display', 'block')
    
  }

  getEventStartDateFormatted(date) {
    return moment(date).format('ddd, MMM D, YYYY h:mmA')
  }

  getEventTime(date) {
    return moment(date).format('h:mm A')

  }



}
