import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

class UserAccount {
  name: string
  telephone: string
  profilePic: string
  zone: string
  retailer_id: string
  createdAt: number
}


@Component({
  selector: 'app-organization-menu',
  templateUrl: './organization-menu.page.html',
  styleUrls: ['./organization-menu.page.scss'],
})
export class OrganizationMenuPage implements OnInit {
  pages = [
    // {
    //   title: 'Profile',
    //   url: '/organization/profile',
    //   icon: 'person-circle-outline',
    //   beta: false
    // },
    {
      title: 'Basic Info',
      url: '/organization/info',
      // icon: 'person-circle-outline',
      beta: false
    },
    {
      title: 'Package',
      url: '/organization/personal-info',
      // icon: 'person-add-outline',
      beta: true
    },
    {
      title: 'Payments',
      url: '/organization/security',
      // icon: 'shield-checkmark-outline',
      beta: false
    },
    {
      title: 'Charges & Credits',
      url: '/organization/calendar',
      // icon: 'calendar-outline',
      beta: false
    },
    // {
    //   title: 'M',
    //   url: '/menu/messages',
    //   icon: 'add',
    //   beta: false
    // },
    // {
    //   title: 'Messages',
    //   url: '/organization/messages',
    //   icon: 'chatbubble-ellipses-outline',
    //   beta: true
    // },
    {
      title: 'Notifications',
      url: '/organization/notifications',
      // icon: 'notifications-outline',
      beta: false
    },
    
  ]

  selectedPath = ''

  uid: string
  username: string
  // mainuser: AngularFirestoreDocument
  sub
  name : string
  profilePic: string

  public useraccount: UserAccount[] = []; 

  userData: any

  newUser: UserAccount = {
    name: '',
    telephone: '',
    profilePic: '',
    zone: '',
    retailer_id: '',
    createdAt: null         
  }

  online: boolean  = false
  
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    // public afstore: AngularFirestore,
    // public user: UserService,
    // public afAuth: AngularFireAuth,
    // public userAccount: UseraccountService,
    // public storage: Storage,
    // private statusBar: StatusBar
    ) { 

      // this.statusBar.overlaysWebView(true)
      // this.statusBar.styleDefault()
      
      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      })

    

    
  }



  
  ngOnInit() {
    // this.storage.get('user').then((val) => {
    //   if(val){
    //     this.userAccount.useraccount = val
    //     this.userData = val

    //     // Do not splice in production
    //     if(this.userData.length > 1) this.userData.splice(0,1);
        
    //     // console.log(this.userData[0].name)

    //     if(this.userData[0].name != null) {
    //       this.name = this.userData[0].name
    //       this.profilePic = this.userData[0].profilePic
          
    //     }

    //   } else {
    //     // this.auth_currentUrl = 'what-is-your-number'
        // this.userAccount.useraccount.push(this.newUser) 
    //   }
    // });
    
    // console.log(this.userAccount.getName())

    // this.name = this.userAccount.getName()
    // this.profilePic = this.userAccount.getProfilePic()
    // this.getUser()
    
    }

  ngOnDestroy() {
      // this.sub.unsubscribe()
    }

  // async getUser() {
  //   this.afAuth.authState.subscribe( user => {
     
  //     if (user != null) 
  //     {
  //       this.uid = user.uid
  //       console.log(this.uid)
  //       this.mainuser = this.afstore.doc(`users/${this.uid}`)
      
  //       this.sub = this.mainuser.valueChanges().subscribe(event => {

  //         if(event != null) {
  //           this.name = event.name
  //           this.online = true

  //           if(this.name) {
  //             if(this.name.substr(0,this.name.indexOf(' '))) {
  //               this.name = this.name.substr(0,this.name.indexOf(' '));
  //             }
  //           }

            
            
  //           this.profilePic = event.profilePic
  //         }
           
  //       })
  //       console.log(this.uid)
        
  //     }
      
  //     });
  // }

  openPhoto() {
    this.menuCtrl.close()
    this.router.navigate(['/menu/photo']);
  }

}
