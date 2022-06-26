import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { text } from '@fortawesome/fontawesome-svg-core';
// import {faPencil} from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs';
import { contactUser } from 'src/app/models/contactUser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //faPencil=faPencil;

  user: contactUser = new contactUser();

  private readonly url:string="http://localhost:8080";

  public state:string="not-submitted";
  public buttonState:string="button-not-submitted";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  // onSubmit(): Observable<contactUser>{
  //   console.log(this.user);
  //   return this.http.post<contactUser>("http://localhost:8080/", this.user);
  // }
  onSubmit(){
    this.state="submitted";
    this.buttonState="button-submitted";
    console.log(this.user);
    const json = JSON.stringify(this.user)
    console.log(json);
    return this.http.post(this.url, this.user).subscribe({
      error: error => console.log(error),
      next: res => this.router.navigate(['/contact/sent'])
    }
  );
    //this.router.navigate(['/contact/sent'])
  }
}
