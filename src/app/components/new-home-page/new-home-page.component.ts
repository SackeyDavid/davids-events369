import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventsService } from 'src/app/services/events/events.service';


@Component({
  selector: 'app-new-home-page',
  templateUrl: './new-home-page.component.html',
  styleUrls: ['./new-home-page.component.scss']
})
export class NewHomePageComponent implements OnInit {

  sliderConfig = {
    spaceBetween:   1,
    // centeredSlides: true,
    slidesPerView: 6
  }

  public discover: string

  users_online = [
    { id: this.getRandomInt(0, 9999999999), isUser: true, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2F1596863197908.jpg?alt=media&token=a9ce07c3-b3d8-4cf1-898a-7d0740a7ecf5'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2F5e0de52aeee8b-bpfull.jpg?alt=media&token=bf8f9104-cda8-48b6-a5ea-207e32e8ae73'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2F54.jpg?alt=media&token=5d401c5b-f365-4fe9-a0b8-f4fe88129601'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2F475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg?alt=media&token=9c40b914-d234-4e04-9bf5-9a0c379085a1'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2Fbig_1539107178-avatar-realtaxadvisors.jpg?alt=media&token=2ce8c5da-3d08-48c0-99cf-ad37d7f71d77'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2FCwQKUrL.jpg?alt=media&token=133b22a4-34ab-497b-8998-da1f18f418e9'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2FKtCFjlD4.jpg?alt=media&token=e34c0034-1c49-42aa-81db-81dda390cd23'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2Fmember-02-1.jpg?alt=media&token=5d782c4b-421e-492b-9e19-5d2902377f11'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2FnyFrUx6J.jpeg?alt=media&token=0cfde0a8-ca21-4940-99f6-c14630337061'},
    { id: this.getRandomInt(0, 9999999999), isUser: false, description: '10 Kg', name: 'Goat meat Carton', price: '1.60', photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fuser%20avatars%2Fthumb.jpg?alt=media&token=a03359d8-9715-4527-ab96-fbeed5785bb8'},
    
  ]

  banners = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'An evening with Chimamanda', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fsuad-kamardeen--hx4IFNQcZU-unsplash.jpg?alt=media&token=7ef0cb3a-8138-4408-9543-2e40c0626510'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Adwoa Kotoko Season 12 Premieres', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fistockphoto-1234658597-170667a.jpg?alt=media&token=ead167a1-fba9-48a3-9848-0054a0fba833'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Ojojo Drama Festival', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fenoch-appiah-jr-kYrqetng_2U-unsplash.jpg?alt=media&token=328574b7-1474-45ca-9de1-b9c6e14f8acf'},
    
  ]

  products = [
    { id: this.getRandomInt(0, 9999999999), location: 'Spintex', watching: '290', video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-rodnae-productions-6193112.mp4?alt=media&token=49f3ece0-2867-471c-82f4-75c430a7fdde', time: ' 4 min ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: "Emy's Birthday Party", paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-09h39m03s359.webp?alt=media&token=6e8bba57-faba-42e5-9772-406d5d4258eb'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', watching: '323', video: false, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-kindel-media-6775036.mp4?alt=media&token=f39f516b-83de-405b-8c6c-b8f197203d02', time: '30 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Lancaster TechPreneur SDG Conference', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fteemu-paananen-bzdhc5b3Bxs-unsplash%20(2).jpg?alt=media&token=2f2767b5-6027-4d17-8d90-ff5864c915c5'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', watching: '563', video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fpexels-thirdman-6193608.mp4?alt=media&token=0cee438a-c7e2-40a3-a708-436e7433f2b7', time: '50 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Orchestra Chorals By Stephany Abam', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h15m51s777.webp?alt=media&token=aef06499-be15-44d1-9286-1ee88bdee6bd'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', watching: '653', video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204705871.mp4?alt=media&token=2c6db7c3-5f8e-4db1-9925-47776231a3c5', time: '20 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Guitar Play With Adams', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h19m39s495.webp?alt=media&token=234935d2-51f5-441e-82d0-006e430ec833'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra',  watching: '445',video: true, video_src: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fvideo%2Fproduction%20ID%204057975.mp4?alt=media&token=6034584f-7f06-4dc0-b56d-ba10d11e0865', time: '24 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Cooking At Home With Maame Ama', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fvlcsnap-2021-03-05-11h21m48s626.webp?alt=media&token=dcbbfb60-5797-4c29-a551-7c4e7502dead'},
    
  ]

  recommended = [
    { id: this.getRandomInt(0, 9999999999), location: 'Kumasi', time: '50 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Abrantie's Birthday", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1588430643927-defdd1957480.webp?alt=media&token=7a4e6e7b-a2e4-4d24-921a-1550add1536c'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', time: '20 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Shoot Like a Pro - Sam Bannerman', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1590568569762-9c51532a51d9.webp?alt=media&token=edabf92a-705e-4a29-bc9d-7b1e568c9143'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', time: '14 min ago', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Esinam's Dairies", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1607601016772-33a33a6abc39.webp?alt=media&token=9ba47142-6610-4bd0-9025-137ed69b6f4f'},
    { id: this.getRandomInt(0, 9999999999), location: 'Koforidua', time: ' 4 min ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'GuitarZard: A Night With Sherry', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1611665427903-2acc4d77fe15.webp?alt=media&token=7a101c6a-d45d-4475-bc75-77ea60f2d69f'},
    { id: this.getRandomInt(0, 9999999999), location: 'Takoradi', time: '30 sec ago', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'The Boyz - Sampele Edition', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1612139776934-02378cdb1ccd.webp?alt=media&token=d6475680-73bc-405d-b3a8-fb9a40f8e875'},
    
  ]

  today = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Matasora World Music Festival', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fslim-emcee-ASuzNrcUBtg-unsplash.jpg?alt=media&token=220cc887-1152-4a7e-9805-6e3dd9df6b48'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Macao Food Festival', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fmacau-photo-agency-0m2SggZHvE8-unsplash.jpg?alt=media&token=55d386b0-192a-450b-acb5-a77790f4eec4'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Matasora World Music Festival', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fslim-emcee-ASuzNrcUBtg-unsplash.jpg?alt=media&token=220cc887-1152-4a7e-9805-6e3dd9df6b48'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Macao Food Festival', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fmacau-photo-agency-0m2SggZHvE8-unsplash.jpg?alt=media&token=55d386b0-192a-450b-acb5-a77790f4eec4'},
    
  ]

  festivals = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'An evening with Chimamanda', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fsuad-kamardeen--hx4IFNQcZU-unsplash.jpg?alt=media&token=7ef0cb3a-8138-4408-9543-2e40c0626510'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Adwoa Kotoko Season 12 Premieres', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fistockphoto-1234658597-170667a.jpg?alt=media&token=ead167a1-fba9-48a3-9848-0054a0fba833'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Ojojo Drama Festival', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fenoch-appiah-jr-kYrqetng_2U-unsplash.jpg?alt=media&token=328574b7-1474-45ca-9de1-b9c6e14f8acf'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'A Matter Of Life and Death - Papa Senko', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Ffred-kearney-o-ioeoATbIM-unsplash.jpg?alt=media&token=7761e3e4-0277-4aac-ac82-d2c1ffa62e3f'},
    
  ]

  weddings = [
    { id: this.getRandomInt(0, 9999999999), location: 'Kumasi', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Joe's Graduation Ceremony", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fdr-josiah-sarpong-yk04i_lnKRU-unsplash.jpg?alt=media&token=0dc956f1-b87e-4bc2-8067-8f2a76abf2f7'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Debi's Wedding", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fnino-kojo-UgrmNIne-q8-unsplash.jpg?alt=media&token=d1e8a27b-7b3f-4ddf-b22e-a8e41e08ed3b'},
    
  ]

  plays = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Debi's Wedding", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fnino-kojo-UgrmNIne-q8-unsplash.jpg?alt=media&token=d1e8a27b-7b3f-4ddf-b22e-a8e41e08ed3b'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Joe's Graduation Ceremony", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fdr-josiah-sarpong-yk04i_lnKRU-unsplash.jpg?alt=media&token=0dc956f1-b87e-4bc2-8067-8f2a76abf2f7'},
    
  ]

  offers = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Joe's Graduation Ceremony", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Foluwatobi-babalola-03EyaPvwPH0-unsplash-cover.png?alt=media&token=510a2dda-e23d-4c14-949c-5aa24e8ea007'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Debi's Wedding", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fimageonline-co-whitebackgroundremoved.png?alt=media&token=b2a6f0b6-5dad-4e6a-84b3-ab05b048b940'},
    
  ]
  
  data: any
  events: any

  event_categories: any

  category_name: string
  temp_category: string

  show_skeleton: boolean = false
  page_loaded: boolean = false
  
  constructor(
    private menuController: MenuController,
    private eventservice: EventsService
  ) {}

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
    this.discover = "Corporate Events";
    this.temp_category = this.discover
    if(document.getElementById(this.getCategoryId(this.discover))) document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block');
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
      
        setTimeout(() => {
          this.show_skeleton = false
          this.page_loaded = true
          document.getElementById(this.getCategoryId(this.temp_category)).style.setProperty('display', 'none')
        this.temp_category = this.discover
        document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block')
        
        }, 5000);
    } else {
      document.getElementById(this.getCategoryId(this.temp_category)).style.setProperty('display', 'none')
      this.temp_category = this.discover
      document.getElementById(this.getCategoryId(this.discover)).style.setProperty('display', 'block')
      
    }
    
  }



}
