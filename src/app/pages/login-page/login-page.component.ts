import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserAuthService } from '../../services/auth/user-auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorMsg: String = "";

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private auth: UserAuthService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);

    this.auth.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);    
          if(res.id) this.router.navigate(['/phone_confirm']);   
        },
        err => {
          console.log(err);
          this.errorMsg = err.error.message;
        }
      );
  }

}
