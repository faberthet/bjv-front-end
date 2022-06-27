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
  y:any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(x:any){
    console.log(x.form.controls.nom.touched);
    ;
    if(x.form.valid){
      this.state="submitted";
      this.buttonState="button-submitted";
      const json = JSON.stringify(this.user)
      console.log(json);
      return this.http.post(this.url, this.user).subscribe({
        error: error => console.log(error),
        next: res => this.router.navigate(['/contact/sent'])
      });
    }
    x.form.controls.nom.touched=true
    x.form.controls.prenom.touched=true
    x.form.controls.email.touched=true
    x.form.controls.message.touched=true
    x.form.controls.societe.touched=true
  return null;
 }

}
