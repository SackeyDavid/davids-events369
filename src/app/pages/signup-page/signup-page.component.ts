import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserAuthService } from 'src/app/services/auth/user-auth.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  errorMsg: String = "";

  public registerForm: FormGroup = new FormGroup({});

  constructor(private auth: UserAuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      country: new FormControl('GH', Validators.required),
      phone: new FormControl('', Validators.required),
      usertype: new FormControl('admin', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);

    this.auth.regsiterUser(this.registerForm.value)
      .subscribe(
        res => {
          console.log(res); 
          
          if(res.message == 'Ok') this.errorMsg = 'Please confirm your email'
        },
        err => {
          console.log(err)
          this.errorMsg = err.error.message;
        }
      );
  }

}
