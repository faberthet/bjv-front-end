import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  //private baseUrl: string="http://localhost:5000"
  //private baseUrl: string="http://breizhjar-env.eba-tipx9yis.eu-west-3.elasticbeanstalk.com"
  private baseUrl: string="https://api.breizh-jardinvivant.com"

  constructor(private http:HttpClient,private router: Router) { }

  CheckIdentity(admin: Admin):Observable<object>{
    return this.http.post(this.baseUrl + "/admin/auth",admin)
  }

   authenticate(valid:any,admin: Admin):void {
    if(valid["valid"]==true){
      sessionStorage.setItem('username', admin.adminId)
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

