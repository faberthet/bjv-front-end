import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {faPencil} from '@fortawesome/free-solid-svg-icons'
import { contactUser } from 'src/app/models/contactUser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faPencil=faPencil;

  user: contactUser = new contactUser();

  private readonly url:string="http://localhost:8080/..."

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
    this.http.post(this.url, this.user);
  }
}
