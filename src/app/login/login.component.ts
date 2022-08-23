import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Admin =new Admin();
  // username:string 
  // password:string 
  // invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  // checkLogin() {
  //   if (this.loginservice.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate(["admin/articles"])
  //     this.invalidLogin = false
  //   } else
  //     this.invalidLogin = true
  // }
  checkLogin() {
    this.loginservice.CheckIdentity(this.user).subscribe({
      error: error => console.log(error),
      next: res => [console.log(res),this.loginservice.authenticate(this.user,res), this.router.navigate(['/admin/articles'])]
    })
  }
  

}
