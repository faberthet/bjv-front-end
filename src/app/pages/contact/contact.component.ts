import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  private readonly url:string="http://localhost:8080"

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  // onSubmit(): Observable<contactUser>{
  //   console.log(this.user);
  //   return this.http.post<contactUser>("http://localhost:8080/", this.user);
  // }
  onSubmit(){
    console.log(this.user);
    const json = JSON.stringify(this.user)
    console.log(json);
    return this.http.post(this.url, this.user).subscribe();
  }
}
