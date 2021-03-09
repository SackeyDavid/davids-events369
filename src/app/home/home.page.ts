import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Online Events', name: 'Find events personalized for you', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fpexels-august-de-richelieu-4262423%20(2).jpg?alt=media&token=1d4d0a06-0101-405e-8f93-2cfb2066a7e4'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Experiences', name: 'Participate in events without leaving home', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fmohammad-shahhosseini-cPWUODAvXjk-unsplash.jpg?alt=media&token=ec302882-4379-48bd-a6ef-94ead7525baf'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Event Gallery', name: "Couldn't attend an event? We've saved everything for you.", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fmarketing%20space%2Fvisuals-ufK-deiLqY8-unsplash.jpg?alt=media&token=baeaba04-84f8-4e32-9149-b19bcd457ae6'},
    
  ]

  products = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'LET FREEDOM SING Presented By Stephany Abam', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fmatthew-ball-sxkWJC3iAtg-unsplash.jpg?alt=media&token=5f4e3418-1c36-4d5a-9e8c-ac7081db1ac7'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Macao Food Festival', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fmacau-photo-agency-0m2SggZHvE8-unsplash.jpg?alt=media&token=55d386b0-192a-450b-acb5-a77790f4eec4'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: 'Cooking At Home With Maame Ama', paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1535291692377-b7eb2fb22a8b.webp?alt=media&token=4d9be903-3584-4e3b-a6c0-39b404b4a979'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Trap Karoate: Live DJ In The Booth', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1584432851263-dbb6df294b8b.webp?alt=media&token=ab80994a-c307-47be-8255-f8390bbb9543'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Lancaster TechPreneur SDG Conference', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fteemu-paananen-bzdhc5b3Bxs-unsplash%20(2).jpg?alt=media&token=2f2767b5-6027-4d17-8d90-ff5864c915c5'},
    
  ]

  recommended = [
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Abrantie's Birthday", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1588430643927-defdd1957480.webp?alt=media&token=7a4e6e7b-a2e4-4d24-921a-1550add1536c'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'Shoot Like a Pro - Sam Bannerman', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1590568569762-9c51532a51d9.webp?alt=media&token=edabf92a-705e-4a29-bc9d-7b1e568c9143'},
    { id: this.getRandomInt(0, 9999999999), location: 'Accra', description: 'Thur, Feb 18, 2021 7:00 PM GMT', name: "Esinam's Dairies", paid: true, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1607601016772-33a33a6abc39.webp?alt=media&token=9ba47142-6610-4bd0-9025-137ed69b6f4f'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'GuitarZard: A Night With Sherry', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1611665427903-2acc4d77fe15.webp?alt=media&token=7a101c6a-d45d-4475-bc75-77ea60f2d69f'},
    { id: this.getRandomInt(0, 9999999999), location: 'Tema', description: 'Sun, Feb 21, 2021 8:00 PM GMT', name: 'The Boyz - Sampele Edition', paid: false, photo: 'https://firebasestorage.googleapis.com/v0/b/semagh-987db.appspot.com/o/Work%2FEvents369%2Fcustomer%20App%2Fevents%2Fphoto-1612139776934-02378cdb1ccd.webp?alt=media&token=d6475680-73bc-405d-b3a8-fb9a40f8e875'},
    
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
  
  
  constructor(
    private menuController: MenuController,
    private router: Router
  ) {}

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
    this.discover = "all"
  }

  segmentChanged(e: Event) {
    
  }

  openEventPage() {
    this.router.navigate(['event-page'])
  }

}
