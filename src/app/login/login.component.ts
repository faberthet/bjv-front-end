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

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.CheckIdentity(this.user).subscribe({
      error: error => console.log(error),
      next: res => [console.log(res),this.loginservice.authenticate(res, this.user), this.router.navigate(['/admin/articles/actif'])]
    })
  }

}
