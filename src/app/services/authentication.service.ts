import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router: Router) { }

  // authenticate(username: string, password: string) {
  //   if (username === "admin" && password === "admin1") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  CheckIdentity(admin: Admin):Observable<object>{
    return this.http.post("http://localhost:8080/admin/auth",admin)
  }

  authenticate(admin: Admin, ok:any):void {
    //console.log(ok["login"])
    if(ok["login"]){
      sessionStorage.setItem('username', admin.adminId)
    }else{
      this.router.navigate(['/login'])
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

